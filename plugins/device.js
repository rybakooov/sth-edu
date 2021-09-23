export class Device {
  constructor () {
    this.isAndroid = navigator.userAgent.match(/Android/i)
    this.isBlackberry = navigator.userAgent.match(/BlackBerry/i)
    this.isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i)
    this.isOpera = navigator.userAgent.match(/Opera Mini/i)
    this.isWindows = navigator.userAgent.match(/IEMobile/i)
    this.isSafari = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    this.isIE = (document.documentMode || /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent))
    this.isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))
  }

  get isMobile () {
    return (this.isAndroid || this.isBlackberry || this.isIOS || this.isOpera || this.isWindows)
  }
}

export default function (context, inject) {
  const device = new Device()
  const isDev = process.env.NODE_ENV === 'development'

  if (device.isMobile) {
    document.body.classList.add('mobile')
  }
  if (device.isSafari) {
    document.body.classList.add('safari')
  }
  if (device.isTouch) {
    document.body.classList.add('touch')
  }
  if (device.isIE) {
    document.body.classList.add('ie')
  }
  if (isDev) {
    document.body.classList.add('dev')
  }

  inject('device', device)
}
