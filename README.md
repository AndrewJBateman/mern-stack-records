# :zap: MERN Full Stack Records

* Mongo Express React Node (MERN) full-stack app to perform CRUD operations on records
* Tutorial code from [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A) - see 'Inspiration' below.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: MERN Full Stack Records](#zap-mern-full-stack-records)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
    * [:books: Backend](#books-backend)
    * [:books: Frontend](#books-frontend)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Backend Technologies](#signal_strength-backend-technologies)
  * [:signal_strength: Frontend Technologies](#signal_strength-frontend-technologies)
  * [:floppy_disk: Setup - Backend](#floppy_disk-setup---backend)
    * [:floppy_disk: Setup - Frontend](#floppy_disk-setup---frontend)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Backend Features](#cool-backend-features)
    * [:cool: Frontend Features](#cool-frontend-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

### :books: Backend

* MongoDB cloud Atlas used as the backend database.

### :books: Frontend

* React frontend form to add text/image data to backend database
* Text & image data is displayed in ui-material cards
* Display is responsive: uses Material-UI [Grid](https://material-ui.com/api/grid/)
* Material-UI [makeStyles](https://material-ui.com/styles/api/#makestyles-styles-options-hook) used to link a style sheet with a function component using a hook.  `Grow`

## :camera: Screenshots

![screenshot](./img/front.png)

## :signal_strength: Backend Technologies

* [Mongoose v5](https://mongoosejs.com/) object modelling for Node.js
* [npm mongodb v3](https://www.npmjs.com/package/mongodb) official MongoDB driver for Node.js
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) NoSQL cloud database service
* [Express.js middleware v4.17](https://expressjs.com/): Note, as of version 4.16+, their own body-parser implementation is now included by default
* [Node.js v14](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart afdter code changes

## :signal_strength: Frontend Technologies

* [React framework v16](https://reactjs.org/)
* [React-Redux v7](https://react-redux.js.org/) store interaction logic, re-render only changed data
* [Redux-Thunk](https://www.npmjs.com/package/redux-thunk) middleware for Redux to write action creators that return an (asynchronous) function instead of an action.
* [Material-UI](https://www.npmjs.com/package/@material-ui/core) npm module for React components
* [Material-UI Official Site](https://material-ui.com/)
* [Bootstrap v4](https://getbootstrap.com/) component library
* [react-file-base64](https://www.npmjs.com/package/react-file-base64) to convert files to base64
* [Axios](https://www.npmjs.com/package/axios) promise-based http client
* [SVG Backgrounds](https://www.svgbackgrounds.com/) source of custom backgrounds with compact file-size (~5KB) & supported by all modern browsers

## :floppy_disk: Setup - Backend

* Change to `/server` directory
* Install dependencies using `npm i`
* Install [nodemon](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Register with [MongoDB Atlas](www.mongodb.com), create & configure a database cluster and add cluster connection string to .env file - there is an example `.env.example` file to help.
* Run `npm start` for a dev server
* Navigate to `http://localhost:5000/`. The server will automatically reload if you change any of the source files

### :floppy_disk: Setup - Frontend

* Change to `/client` directory
* Install dependencies using `npm i`
* Run `npm start`. Frontend will open at `http://localhost:3000/`

## :computer: Code Examples

* Extract from `` - tba

```javascript

```

## :cool: Backend Features

* All data stored in collections in a mongoDB.Atlas database that costs nothing to use in the free tier option. Data can be edited from the mongoDB.Atlas collection or from within the React frontend

### :cool: Frontend Features

* Uses [React Hooks](https://reactjs.org/docs/hooks-intro.html)

## :clipboard: Status & To-Do List

* Status: In progress
* To-Do: Finish

## :clap: Inspiration

* [Javascript Mastery: Build and Deploy a Full Stack MERN Project - React + Redux, Node, Express, MongoDB [Part 1/2]](https://www.youtube.com/watch?v=ngc9gnGgUdA&t=3589s)
* [Javascript Mastery: Build and Deploy a Full Stack MERN Project - React + Redux, Node, Express, MongoDB [Part 2/2]](https://www.youtube.com/watch?v=aibtHnbeuio&t=171s)
* [React documentation](https://reactjs.org/docs/getting-started.html)
* [REST API Tutorial website: HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) * you are welcome to [send me a message](https://andrewbateman.org/contact)
