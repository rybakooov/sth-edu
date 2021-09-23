function update () {
  document.body.style.setProperty('--vh', `${window.innerHeight / 100}px`)
}

document.addEventListener('resize', update)
update()
