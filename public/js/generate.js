/* global reqJson */

const button = document.getElementById('generate')
const outputBox = document.getElementById('output')
const [...options] = document.getElementsByClassName('option')

let currentMode = options[0].id
options[0].classList.add('active')
options[0].classList.remove('passive')

function clearOptionColors () {
  options.forEach((option) => {
    option.classList.remove('active')
    option.classList.add('passive')
  })
}

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    clearOptionColors()
    e.target.classList.add('active')
    e.target.classList.remove('passive')

    currentMode = e.target.id
  })
})

button.addEventListener('click', async function () {
  outputBox.innerText = (await reqJson(`/api/generate/${currentMode}`)).story
})
