import Vue from 'vue'

/**
 * Предварительный загрузчик ресурсов
 */
export class Loader {
  constructor() {
    /**
     * @property {Array<string>} resources Массив путей ресурсов, которые должны загрузиться
     */
    this.resources = []

    /**
     * @property {number} resourcesLength Общее количество ресурсов
     */
    this.resourcesLength = 0

    /**
     * @property {Object} progress Отслеживаемый объект, содержит значение загрузки
     * @param {number} progress.value Значение загрузки, от 0 до 100
     */
    this.progress = Vue.observable({ value: 0 })

    /**
     * Если ресурсов нет - устанавливаем значение прогресса равным 100
     */
    setTimeout(() => {
      if (this.resources.length === 0) {
        this.progress.value = 100
      }
    })
  }

  /**
   * @property {Function} addResource Добавляет ресурс, увеличивает количество ресурсов
   * @param {string} src Путь до ресурса
   */
  addResource(src) {
    this.resources.push(src)
    this.resourcesLength += 1
  }

  /**
   * @property {Function} setLoaded Фильтрует загруженные ресурсы, вычисляет прогресс
   * @param {string} src Путь до ресурса
   */
  setLoaded(src) {
    this.resources = this.resources.filter(itemSrc => itemSrc !== src)
    this.progress.value = 100 - this.resources.length / this.resourcesLength * 100 || 0
  }

  /**
   * @property {Function} reset Сбрасывает загрузчик
   */
  reset() {
    this.progress.value = 0
    this.resources = []
    this.resourcesLength = 0
  }
}

export default (_, inject) => {
  const loader = new Loader()
  inject('loader', loader)
}
