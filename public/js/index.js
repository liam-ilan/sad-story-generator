/* global reqJson */

// consts
const submit = document.getElementById('submit')
const text = document.getElementById('text')
const name = document.getElementById('name')

// event listener
submit.addEventListener('click', async function () {

  // prep data
  const data = {
    text: text.value,
    name: name.value
  }

  // request
  console.log(await reqJson('/upload', 'POST', data))
})