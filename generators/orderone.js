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

  // if finished scentence count limit, return nothing
  if (sentenceCount === 0) {
    return ''
  }

  // generate more of the story
  return (nextWord + ' ' + generateStory(nextWord, nextWord === '.' ? sentenceCount - 1 : sentenceCount)).split(' .').join('.')
}

// export
if (require.main === module) {
  let story = generateStory()
  story = story[story.length - 1] === ' ' ? story.slice(0, -1) : story
  story = story.split('. ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join('. ')

  console.log(story)
} else {
  module.exports = () => {
    let story = generateStory()
    story = story[story.length - 1] === ' ' ? story.slice(0, -1) : story
    story = story.split('. ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join('. ')

    return story
  }
}
