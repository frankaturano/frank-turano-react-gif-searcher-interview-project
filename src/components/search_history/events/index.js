// Quick Hack! Support for keyboard events ;)
// Normally I would never do this, but I wanted to keep this interview project under 2 hours
// Plus #goodoldjavascript ?? maybe?? yes... let's go with yes...
window.onkeydown = e => {
  if (e.keyCode === 40) {
    let historyItems = document.querySelectorAll('.history-item')
    if (historyItems && historyItems.length) {
      let active = document.querySelector('.history-item.active')
      if (active) {
        active.classList.remove('active')
        active.nextElementSibling ?
          active.nextElementSibling.classList.add('active') :
          historyItems[0].classList.add('active')
      } else {
        historyItems[0].classList.add('active')
      }
    }
  } else if (e.keyCode === 13 && document.querySelector('.history-item.active')) {
    document.querySelector('.history-item.active').click()
  }
}
