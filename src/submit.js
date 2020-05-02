import reqJson from './reqjson.js'

// elements
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
  await reqJson('/api/upload', 'POST', data)

  // tell user the text was received
  submit.innerHTML = 'Submitted'
  setTimeout(() => { submit.innerHTML = 'Submit' }, 3000)

  // clear text
  text.value = ''
})
