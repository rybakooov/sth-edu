/**
 * Скачивает файл по переданному url
 * @param {string} url адресс файла для скачивания
 * @param {string} fileName название файла, должно быть с ФОРМАТОМ. Пример: helloWorld.png
 * */

export default async function (url, fileName) {
  const a = document.createElement("a")
  a.href = await toDataURL(url)
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

function toDataURL(url) {
  return fetch(url).then((response) => {
    return response.blob()
  }).then((blob) => {
    return URL.createObjectURL(blob)
  })
}
