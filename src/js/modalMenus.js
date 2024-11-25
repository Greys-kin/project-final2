const burgerBtn = document.querySelector('.round-icon--burger')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuContainer = document.querySelector('.burger-menu__container')
const closeBtn = document.querySelector('.round-icon--close-menu')

burgerBtn.addEventListener('click', displayMenu)
closeBtn.addEventListener('click', closeMenu)
burgerMenu.addEventListener('click', (c) => {
  const withinBoundaries = c.composedPath().includes(burgerMenuContainer)
  if (!withinBoundaries) {
    burgerMenu.style.display = 'none'
  }
})

function displayMenu() {
  burgerMenu.style.display = 'block'
  burgerMenuContainer.classList.add('burger-menu__container--active')
}

function closeMenu() {
  burgerMenu.style.display = 'none'
  burgerMenuContainer.classList.remove('burger-menu__container--active')
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1120) {
    displayMenu()
  } else if (window.innerWidth < 1120) {
    closeMenu()
  }
})

const feedbackBtn = document.querySelector('.round-icon--chat-burger')
const feedbackBtn2 = document.querySelector('.round-icon--chat')
const feedback = document.querySelector('.feedback')
const feedbackContainer = document.querySelector('.feedback__container')
const closeBtnFeedback = document.querySelector('.round-icon--close-menu')

feedbackBtn.addEventListener('click', displayMenuFeedback)
feedbackBtn2.addEventListener('click', displayMenuFeedback)
closeBtnFeedback.addEventListener('click', closeMenuFeedback)
feedback.addEventListener('click', (c) => {
  const withinBoundaries = c.composedPath().includes(feedbackContainer)
  if (!withinBoundaries) {
    feedback.style.display = 'none'
  }
})

function displayMenuFeedback() {
  feedback.style.display = 'flex'
  feedbackContainer.classList.add('feedback__container--active')
}

function closeMenuFeedback() {
  feedback.style.display = 'none'
  feedbackContainer.classList.remove('feedback__container--active')
}

const requestCallBtn = document.querySelector('.round-icon--call-burger')
const requestCallBtn2 = document.querySelector('.round-icon--call')
const requestCall = document.querySelector('.request-call')
const requestCallContainer = document.querySelector('.request-call__container')
const closeBtnRequestCall = document.querySelector('.round-icon--close-menu')

requestCallBtn.addEventListener('click', displayMenuRequestCall)
requestCallBtn2.addEventListener('click', displayMenuRequestCall)
closeBtnRequestCall.addEventListener('click', closeMenuRequestCall)
requestCall.addEventListener('click', (c) => {
  const withinBoundaries = c.composedPath().includes(requestCallContainer)
  if (!withinBoundaries) {
    requestCall.style.display = 'none'
  }
})

function displayMenuRequestCall() {
  requestCall.style.display = 'flex'
  requestCallContainer.classList.add('request-call__container--active')
}

function closeMenuRequestCall() {
  requestCall.style.display = 'none'
  requestCallContainer.classList.remove('request-call__container--active')
}
