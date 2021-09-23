import ru from './_ru'
import en from './_en'

const langs = { ru, en }

class Time {
  constructor ({ timestamp, locale }) {
    this.dateObject = new Date(timestamp)
    this.timestamp = this.dateObject.getTime()
    this.locale = locale
    this.date = this.getDate()
    this.datetime = this.dateObject.toJSON()
    this.update()
  }

  isToday () {
    return this.dateObject.toDateString() === this.now.toDateString()
  }

  isYesterday () {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return this.dateObject.toDateString() === yesterday.toDateString()
  }

  isTomorrow () {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return this.dateObject.toDateString() === tomorrow.toDateString()
  }

  getDate () {
    const year = this.dateObject.getFullYear()
    const month = this.dateObject.getMonth()
    const day = this.dateObject.getDate()
    const weekday = this.dateObject.getDay() - 1
    const hours = this.dateObject.getHours()
    const minutes = this.dateObject.getMinutes()
    const seconds = this.dateObject.getSeconds()
    return {
      year: { value: year, string: this.toStringValue(year) },
      month: { value: month, string: this.toStringValue(month + 1) },
      day: { value: day, string: this.toStringValue(day) },
      weekday: { value: weekday, string: this.toStringValue(weekday) },
      hours: { value: hours, string: this.toStringValue(hours) },
      minutes: { value: minutes, string: this.toStringValue(minutes) },
      seconds: { value: seconds, string: this.toStringValue(seconds) }
    }
  }

  update () {
    this.now = new Date()
    this.left = (Date.now() - this.timestamp)
    this.past = this.getPast()
    this.future = this.getFuture()
    this.today = this.isToday()
    this.yesterday = this.isYesterday()
    this.tomorrow = this.isTomorrow()
    this.t = this.getTranslates()
  }

  getTranslates () {
    const translates = langs[this.locale]
    const relative = this.left > 0 ? this.past : this.future
    return {
      month: translates.months[this.date.month.value],
      weekday: translates.weekdays[this.date.weekday.value],
      in: translates.in,
      ago: translates.ago,
      short: this.today ? translates.today : this.yesterday ? translates.yesterday : this.tomorrow ? translates.tomorrow : '',
      relative: {
        days: {
          normal: numerate(translates.normal.days, relative.days.value),
          left: numerate(translates.left.days, relative.days.value)
        },
        hours: {
          normal: numerate(translates.normal.hours, relative.hours.value),
          left: numerate(translates.left.hours, relative.hours.value)
        },
        minutes: {
          normal: numerate(translates.normal.minutes, relative.minutes.value),
          left: numerate(translates.left.minutes, relative.minutes.value)
        },
        seconds: {
          normal: numerate(translates.normal.seconds, relative.seconds.value),
          left: numerate(translates.left.seconds, relative.seconds.value)
        }
      }
    }
  }

  getPast () {
    const left = this.left > 0 ? this.left : 0
    return this.buildLeft(left)
  }

  getFuture () {
    const left = this.left < 0 ? Math.abs(this.left) : 0
    return this.buildLeft(left)
  }

  buildLeft (left) {
    const days = Math.floor(left / 1000 / (60 * 60 * 24))
    const hours = Math.floor((left / 1000 / (60 * 60)) % 24)
    const minutes = Math.floor((left / 1000 / 60) % 60)
    const seconds = Math.floor(left / 1000 % 60)
    return {
      left,
      days: { value: days, string: this.toStringValue(days) },
      hours: { value: hours, string: this.toStringValue(hours) },
      minutes: { value: minutes, string: this.toStringValue(minutes) },
      seconds: { value: seconds, string: this.toStringValue(seconds) }
    }
  }

  toStringValue (value) {
    return value.toString().padStart(2, '0')
  }
}

function numerate (variants, count = 0) {
  let result = ''
  const first = variants[0] || ''
  const second = variants[1] || ''
  const third = variants[2] || second
  const empty = variants[3] || third
  const _count = Math.abs(count)

  if (_count.toString().includes('.')) {
    result = second
  } else if (!_count) {
    result = empty
  } else if (_count % 10 === 1 && _count % 100 !== 11) {
    result = first
  } else if (_count % 10 >= 2 && _count % 10 <= 4 && (_count % 100 < 10 || _count % 100 >= 20)) {
    result = second
  } else {
    result = third
  }
  return result
}

export default function ({ app }, inject) {
  function time (timestamp) {
    const locale = app.i18n.locale
    return new Time({ timestamp, locale })
  }
  time.setServerTime = function () {}

  inject('time', time)
}
