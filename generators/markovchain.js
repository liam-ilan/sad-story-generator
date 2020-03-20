// consts
const fs = require('fs')
const table = {}

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
    const nextWord = i + 1 < words.length ? words[i + 1] : 'EOS'

    // add to table
    if (Object.keys(table).includes(word)) {
      if (Object.keys(table[word]).includes(nextWord)) {
        table[word][nextWord] += 1
      } else {
        table[word][nextWord] = 1
      }
    } else {
      table[word] = {}
      table[word][nextWord] = 1
    }
  })
})

// recursive function to generate story
function generateStory (word = '.', sentenceCount = 5) {
  // list of next words
  let nextWords = []

  // fill nextWords
  Object.keys(table[word]).forEach((key) => {
    // ignore EOS
    if (key !== 'EOS') {
      nextWords = [...nextWords, ...new Array(table[word][key]).fill(key)]
    }
  })

  // pick random nextWord
  const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)]

  // if the next word EOS, then return nothing
  if (sentenceCount === 0) {
    return ''
  }

  // genreate more of the story
  return (nextWord + ' ' + generateStory(nextWord, nextWord === '.' ? sentenceCount - 1 : sentenceCount)).split(' .').join('.')
}

// clean up dots
const story = generateStory()
console.log(story)
