
const isDev = false
// const isDev = process.env.NODE_ENV === 'development'

let stats = null
let Stats = null
if (isDev) {
  Stats = require('stats.js')
}

export class Raf {
  constructor () {
    this.RAF = null
    this.callbacks = []
    this.lastTickDate = Date.now()
    this.start()
  }

  tick () {
    if (isDev) {
      stats.begin()
    }
    const now = performance.now()
    let deltaTime = (now - this.lastTickDate) / 1000
    if (deltaTime > 1 / 5) {
      deltaTime = 0
    }

    const data = { deltaTime }
    // console.log(callbacks.length, callbacks.map(i => i.name))

    for (const callback of this.callbacks) {
      try {
        callback.tick(data)
      } catch (e) {}
    }

    this.lastTickDate = now
    if (isDev) {
      stats.end()
    }
    this.RAF = requestAnimationFrame(this.tick.bind(this))
  }

  start () {
    if (isDev) {
      stats = new Stats()
      stats.showPanel(0)
      document.body.appendChild(stats.dom)
    }
    this.tick()
  }

  stop () {
    cancelAnimationFrame(this.RAF)
  }

  addCallback (tick, name) {
    this.callbacks.push({ name, tick })
  }

  removeCallback (callback) {
    this.callbacks = this.callbacks.filter(item => item.tick !== callback)
  }
}
