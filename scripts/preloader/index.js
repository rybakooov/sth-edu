import Fluid from '@/scripts/fluidWedGl/fluid'
import config from './_config'
import defaultOptions from './_options'
import formatLoaderImage from './format-loaders/image'
import formatLoaderFake from './format-loaders/fake'

export class Preloader {
  constructor (element, options = {}) {
    this.$element = document.createElement('div')
    this.$canvas = document.createElement('canvas')
    this.$progress = document.createElement('div')
    this.$value = document.createElement('span')
    this.progress = 0
    this.resources = []
    this.options = options

    this.$element.appendChild(this.$canvas)
    this.$element.appendChild(this.$progress)
    this.$progress.appendChild(this.$value)
    this.$element.classList.add(config.classNames.elements.preloader, config.classNames.modifiers.empty)
    this.$canvas.classList.add(config.classNames.elements.canvas)
    this.$progress.classList.add(config.classNames.elements.progress)
    this.$value.classList.add(config.classNames.elements.value)
    this.$element.classList.add(config.classNames.modifiers.run)

    return this
  }

  set resources (resources) {
    this._resources = resources || []
    this._ready = []
  }

  set progress (value) {
    this._progress = value || 0
    this._percent = Math.ceil(this._progress * 100)
    this.$value.textContent = this._percent
  }

  set options (options) {
    this._options = Object.assign({}, defaultOptions, options)
  }

  get resources () {
    return this._resources
  }

  get options () {
    return this._options
  }

  get progress () {
    return this._progress
  }

  get percent () {
    return this._percent
  }

  get state () {
    return {
      progress: this.progress,
      percent: this.percent,
      resources: this._resources,
      ready: this._ready
    }
  }

  static async loadResource ({ type, src, timeout = 0 }) {
    let result = {}
    if (type === 'image') {
      result = await formatLoaderImage({ src })
    } else if (type === 'fake') {
      result = await formatLoaderFake({ timeout })
    } else {
      return { success: false, message: 'Type not supported' }
    }

    return result
  }

  run (callback) {
    this.position = { X: 0 }
    this.destination = { X: 0 }
    this.stop()
    this.initFluid()
    this.update()
    this.fluid.instance.run()
    this.tick()

    callback && callback(this.state)
    return Promise.all(
      this._resources.map((resource) => {
        return Preloader.loadResource(resource).then((result) => {
          this._ready.push(result)
          this.update()
          callback && callback(this.state)
        })
      })
    )
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .then(() => {
        this.$element.classList.add(config.classNames.modifiers.complete)
      })
  }

  initFluid () {
    if (!this.fluid) {
      this.fluid = { instance: new Fluid(this.$canvas, config.fluid) }
    }
    this.fluid.pointers = config.pointers.map(item => Object.assign({}, item))
    this.fluid.pointers.forEach(pointer => this.fluid.instance.createOrUpdatePointer(pointer.id, pointer.position, pointer.options))
  }

  update () {
    this.progress = this._ready.length / this._resources.length
    this.$element.classList.remove(config.classNames.modifiers.empty)
    this.destination.X = Math.max(this.progress * this.$canvas.clientWidth - this.$progress.clientWidth, 0)
    this.fluid.pointers.forEach((pointer) => {
      pointer.destination.X = Math.max(this.progress * this.$canvas.clientWidth + pointer.margin.X - this.$progress.clientWidth, 0)
      if (!pointer.destination.Y) {
        pointer.destination.Y = this.$canvas.clientHeight * 2 / 3 + pointer.margin.Y
        pointer.position.Y = this.$canvas.clientHeight * 2 / 3 + pointer.margin.Y
      }
    })
  }

  tick () {
    const maxStep = 2
    const now = Date.now()
    let update = false
    if (!this.lu) {
      this.lu = now
    }
    this.position.X += 0.05 * (this.destination.X - this.position.X)
    this.fluid.pointers.forEach((pointer) => {
      // const y = pointer.position.Y  pointer.destination.Y
      const diffX = pointer.speed * (pointer.destination.X - pointer.position.X)
      pointer.position.X += diffX
      pointer.position.Y = pointer.position.Y + (0.15 * pointer.direction)
      // pointer.position.Y = pointer.destination.Y + Math.sin((now - this.lu) / 2) * sy

      if (pointer.position.Y >= pointer.destination.Y + pointer.sin) {
        pointer.direction = -1
      } else if (pointer.position.Y <= pointer.destination.Y - pointer.sin) {
        pointer.direction = 1
      }

      // pointer.position.Y = pointer.destination.Y
      if (now - this.lu > 20) {
        update = true
        this.lu = now
      }
      // if (update) {}
      this.fluid.instance.updatePointer(pointer.id, pointer.position)
    })

    this.$progress.style.transform = `translate(${this.position.X}px, 0)`
    this._RAF = requestAnimationFrame(this.tick.bind(this))
  }

  stop () {
    this.stopTick()
    this.stopFluid()
  }

  stopTick () {
    if (this._RAF) {
      cancelAnimationFrame(this._RAF)
    }
  }

  stopFluid () {
    if (this.fluid) {
      this.fluid.instance.destroyRAF()
    }
  }

  destroy () {
    this.stopTick()
    this.destroyFluid()
  }

  destroyFluid () {
    if (this.fluid) {
      this.fluid.instance.destroy()
    }
  }
}
