# Sad Story Generator
## A school project (Also known as the HaUk project because of my group)

### About
A set of tools used to build a text generation. This includes a sever-side application, and interface to get text from the public, as well as the text generation software itself.

All of this is hosted at https://sadstorygenerator.herokuapp.com/.

Note that this is not only limited to "sad stories". That comes from my group, again.

### How To

#### Getting Started
- Clone this repo, `git clone https://github.com/liam-ilan/sad-story-generator.git`.
- Init NPM, `npm init`.
- Make a .env file, and add a `MONGODB_URI`.

#### Server
- To start the server, `npm start`. This will host the site on port 3000.

#### Development
- For linting, `npm run lint`.
- To start development server, `npm run dev`.

#### Deployment
- Make sure to run `npm run build` before deployment.

#### Generation
- Run `node /generators/getstroies.js` to create a database dump used by the generators (data.json)
- Run any other file in `/generators` to generate stories (eg. `node ordertwo.js`)
- You can also generate stories through the site itself, under the generate tab, or by using the `/api/generate/<type of generator>` path.

### Samples

#### *People Eating Veal In Lego City*
honestly people still eat veal. he was doing his own thing until a man has fallen into the river in lego city. as there were no other ways to save him. but you made friends. just like me. then he died.

#### *The Dog Giving Vibes*
mike was alone living with no friends. he notices the dog. but worse. but the dog gave vibes from the situation it found itself in. i am working at mcdonalds.

#### *A Man Fell Into the River*
now a man has fallen into the river. now a man screamed.

### Credit
All software written by [Liam Ilan](https://liamilan.com)

Project group: Nathaniel Tham, Bibiane Yang, Naomi Amin