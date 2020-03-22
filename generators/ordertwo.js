// consts
const fs = require('fs')
const table = {}
const firstWords = []

// get stories
const data = JSON.parse(fs.readFileSync('generators/data.json', 'utf8'))

// setting up the table
data.forEach((story) => {
  // split into words
  const words = story.split('.').join(' .').split(' ')

  // for each word
  words.forEach((word, i) => {
    // get next word
    // EOS = end of story
    const state = word + ' ' + (i + 1 < words.length ? words[i + 1] : 'EOS')
    const nextState = i + 2 < words.length ? words[i + 2] : 'EOS'

    if (state.split(' ')[0] === '.' && state.split(' ')[1] !== 'EOS' && !firstWords.includes(state.split(' ')[1])) {
      firstWords.push(state.split(' ')[1])
    }

    // add to table
    if (Object.keys(table).includes(state)) {
      if (Object.keys(table[state]).includes(nextState)) {
        table[state][nextState] += 1
      } else {
        table[state][nextState] = 1
      }
    } else {
      table[state] = {}
      table[state][nextState] = 1
    }
  })
})

// recursive function to generate story
function generateStory (state = `. ${firstWords[Math.floor(Math.random() * firstWords.length)]}`) {
  // list of next words
  let nextWords = []

  // fill nextWords
  Object.keys(table[state]).forEach((key) => {
    // ignore EOS
    nextWords = [...nextWords, ...new Array(table[state][key]).fill(key)]
  })

  // pick random nextState
  const nextState = state.split(' ')[1] + ' ' + nextWords[Math.floor(Math.random() * nextWords.length)]

  // if the new state contains EOS, then return period
  if (nextState.includes('EOS')) {
    return '.'
  }

  // genrerate more of the story
  return (state + ' ' + generateStory(nextState)).split(' ').slice(1).join(' ').split(' .').join('.')
}

const story = generateStory()
console.log(story)
