const timeout = (duration = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export class Cover {
  constructor () {
    this.isFirst = true
    this.isShow = false
    this.animaionDuration = 650
    this.className = 'cover'
    this.$element = document.createElement('div')
    this.$element.classList.add(this.className)
    document.body.appendChild(this.$element)
  }

  async show () {
    if (!this.isFirst) {
      this.$element.classList.add('--animated')
      this.$element.classList.add('--show')
      this.isShow = true
      await timeout(this.animaionDuration)
    }
    this.isFirst = false
  }

  async hide () {
    if (this.isShow) {
      this.isShow = false
      document.body.classList.add('hide-menu-fast')
      await timeout(50)
      this.$element.classList.remove('--show')
      this.$element.classList.add('--hide')
      await timeout(this.animaionDuration)
      this.$element.classList.remove('--animated')
      this.$element.classList.remove('--hide')
      document.body.classList.remove('hide-menu-fast')
    }
  }
}

export default ({ app }) => {
  const cover = new Cover()

  app.router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      cover.show().then(next)
    } else {
      next()
    }
  })
  app.router.afterEach(() => {
    cover.hide()
  })
}
