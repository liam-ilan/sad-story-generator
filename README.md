# Sad Story Generator
## A school project (Also known as the HaUk project because of my group)

### About
A set of tools used to build a text generation. This includes a sever-side application, and interface to get text from the public, as well as the text generation software itself.

All of this is hosted at https://sadstorygenerator.herokuapp.com/.

Note that this is not only limited to "sad stories". That comes from my group, again.

### How To

#### Getting Started
- Clone this repo: `git clone https://github.com/liam-ilan/sad-story-generator.git`
- Init NPM: `npm init`
- Make a .env file, and add a `MONGODB_URI`

#### Server
- To start the server, run: `npm start`. This will host the site on localhost:3000.

#### Development
- For linting, run: `npm run lint`

#### Generation
- Run `node /generators/getstroies.js` to create a database dump used by the generators (data.json)
- Run any other file in `/generators` to generate stories (eg. `node ordertwo.js`)
- You can also generate stories through the site itself, under the generate tab, or by using the `/api/generate/<type of generator>` path.

### Credit
All software written by [Liam Ilan](https://liamilan.surge.sh)

Project group: Nathaniel Tham, Bibiane Yang, Naomi Amin