# Sad Story Generator
## A school project (Also known as the HAUK project because of my group)

### What is this?
A set of tools used to build a text generation. This includes a sever-side application, and interface to get text from the public, as well as the text generation software itself (WIP).

Note that this is not only limited to "sad stories". That comes from my group, again.

### How to use?

#### Getting Started
- Clone this repo: `git clone https://github.com/liam-ilan/sad-story-generator.git`
- Init NPM: `npm init`
- Make a .env file, and add a `MONGODB_URI`

#### Server
- To start the server (for getting text), run: `npm start`

#### Development
- For linting, run: `npm run lint`

#### Generation (WIP)
- Run `node /generators/getstroies.js` to create a database dump for the generators (data.json)
- Run any other file in `/generators` to generate stories

### Credit
All software written by [Liam Ilan](https://liamilan.surge.sh)

Project group: Nathaniel Tham, Bibiane Yang, Naomi Amin