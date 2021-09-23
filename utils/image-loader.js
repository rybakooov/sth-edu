export default function (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    img.onerror = reject
    img.onload = (image) => {
      return resolve(image)
    }
  })
}
