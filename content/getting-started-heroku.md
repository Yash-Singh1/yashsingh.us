---
title: Getting Started with Heroku
subtitle: A simple guide to starting up with heroku
image: ../img/github-and-heroku.png
author: Yash Singh
date: June 1, 2021
---

# Getting Started with Heroku

Heroku is a simple to use system allowing you to deploy servers in a variety of
languages. It is owned by SalesForce.

## About

This post will cover how to setup a simple Node.js server and deploy it to Heroku.

## Prerequisites

Here are some recommended prerequisites before you get started with Heroku:

- Ability to push a git repository to GitHub
- Signed up for Heroku and GitHub
- Know how to set up an express application in Node.js

## Steps

Here are the steps for creating and connecting the server:

### 1. Set up application

Create a new directory named `sample-heroku-app`:

```sh
mkdir sample-heroku-app/
cd sample-heroku-app/
```

Then, initialize NPM and install `express`:

```sh
npm init -y
npm install --save express
```

Create a new file called `index.js`:

```js
// 1
const express = require('express');
const app = express();

// 2
app.get('/', (req, res) => {
  res.send('Hello world');
});

// 3
const port = process.env.PORT || 1455;

// 4
app.listen(port, () => {
  console.log('Listening on :' + port);
});
```

1. Over here, we are importing `express` and creating a new application.
2. This creates a new router that listens for requests on the `/` path. When a
request is recieved, it returns `"Hello world"`
3. In Heroku, the `PORT` enviorment variable is set to the port that has to be
listened to. Over here, we are listening to `1455` if there is no `PORT` (development)
4. This makes the application actually listen for any requests and logs the port
listened to

Now let's test out our application:

```sh
node index.js
```

Open up [`localhost:1455`](http://localhost:1455/) and you should see `"Hello world"`
displayed on the screen.

By default, Heroku calles `npm start` when it runs our application. Let's set up
this script to just run `index.js`:

```sh
npm set-script start 'node index.js'
```

Our application is now set up! We can run it on the development enviornment, now
let's set it up for the production enviornment.

### 2. Create a new repository

Run the following commands to initialize our repository and get it ready to be pushed:

```sh
git init
git commit -a -m Init
```

Now, create a new repository in GitHub and call it `sample-heroku-app`.

To push our repository to GitHub, run:

```sh
git remote add origin https://github.com/{USERNAME}/sample-herokuapp.git
git push
```

### 3. Create the dyno

To create the dyno, click on New > Create New App.

Enter the name as `sample-heroku-app-{YOUR_NAME}`

Now, go underneath Deploy and click on GitHub.

Search up `sample-heroku-app` and select it.

Scroll down and `Enable Automatic Deploys` and `Wait for CI to pass before deploy`.

Click on `Deploy Branch`.

### 4. Preview

After some time, the app should be published on `{HEROKU_DYNO_NAME}.herokuapp.com`.
