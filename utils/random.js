export function randomInArray (array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function randomInRange (min, max) {
  if (max === undefined) {
    return min
  }
  return Math.random() * (max - min) + min
}
