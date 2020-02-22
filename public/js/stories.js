/* global reqJson */

// elements
const stories = document.getElementById('stories')

// fetch
reqJson('/api/stories').then((res) => {
  // for each story
  res.forEach((story) => {
    // make a new item
    const el = document.createElement('div')

    // set text
    el.innerText = story

    // set id
    el.id = 'story'

    // add to doc
    stories.appendChild(el)
  })
})
