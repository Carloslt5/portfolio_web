
const button = document.querySelector('.header__button')
const nav = document.querySelector('.nav')
button.addEventListener('click', () => {
  nav.classList.toggle('active')
})

const li = document.querySelectorAll('.nav__li')
li.forEach(el => {
  el.addEventListener('click', () => {
    nav.classList.remove('active')
  })

})