# Gatsby course modules text

In this course, we will check [gatsby](https://www.gatsbyjs.com/docs/) which is a framework to build websites with `react`. In each module, we will have some text that will help me to write about what I will be learning.

## Module 1: Getting setup

- The first thing you need to have to begin to work is [Nodejs](https://nodejs.org/en/) I recommend the `LTS` version
- On the root directory of this repository we have 2 folders in the root directory one call `gatsby`; that is our `frontend` part of the application; and the other is called `sanity`; that is the `backend` of the application. On your terminal go and install all dependencies using:
  `npm install`
- Now we need to set [gatsby-cli](https://www.npmjs.com/package/gatsby-cli) and [@sanity/cli](https://www.npmjs.com/package/@sanity/cli) globally on our machine using:
  `sudo npm install gatsby-cli @sanity/cli -g`

  A more in deep look at those packages is going to be available on future modules. Need to use `sudo` on mac and Linux to have administrative permission to install those packages

- To check if you correctly install the packages use the following commands:
  `gatsby --version and sanity --version`

Now you are all set to begin our learning journey.

## Module 2: Gatsby basic

### What is gatsby? and why we are going to use it?

Is like a framework for building modern websites and the reason that we can call it a `framework` instead of a `library` is because it comes with a lot of feature out of the box like a way to manage data; a routing strategy; build process; etc oppose as a library like `react` that is used to render data to the `DOM` very quickly.

Like we mention before `gatsby` has some features that make almost effortless do a modern website and that gives us the opportunity to concentrate on the actuals features that we need. At the core of `gatsby`, we have a `static` site generator or `pre-generation` meaning that you have a `build` step on your website that oppose to sites that are on-demand like `WordPress` where you decide when someone hit an `URL` it parses the `slug` that gives the type of page then takes that `URL` and translate into what needs to be looking upon the database then translate it into what template need to render finally take your data and template put it together and create the `HTML`. `Gatsby` still those these steps but it does in `build` time so you will have always available the `HTML`; this will make the site much faster. Also is smart with the `CSS` because it will load it as fast as possible or before the content so you have it available fast. `Gatsby` do `rehydration` where it will load all the `HTML` and turn it into a full `react` application.

For the images; out of the box it adds `lazy load`; compress the images and turn it into a modern format also have it own routing strategy and got a good `plugin` ecosystem but `gatsby` we don't have `cms`; in our case, we are going to use `sanity`; and finally because of his `static` nature, you need to call some things in a particular way specifically when you are working with dynamic pages.

### Gatsby directories

On the `gatsby` directory you will see the following folders:

- `public`: Folder that `gatsby` place the output files when you run a build or deploy. If you have some issues with the page you can delete this folder and will re-construct when you run the build command or the `clean` command(more on this command later).
- `static`: Is the directory where you put files that you just want to serve up like a regular `HTML` almost always you don't want to put files on the `static` directory because we don't want to reference anything by it `static` path; because we want that almost everything goes through `gatsby` so it will know about all our `assets` and can implement all the out of the box features that we mentioned before.
- `src`: This is where most of the `Gatsby` will live and the only `gatsby` specific directory inside the `src` folder is the `pages` directory; the other is implemented by the creator of the example.
  - `pages`: Directory where you add the components that represent pages
  - `assets`: Is where statics files will live such as images and fonts
  - `components`: Is the directory where reusable components will live
  - `styles`: Is the directory where we add the styles of the applications
  - `templates`: Is the directory where we add the parts of the page that are reusable such as pagination
  - `utils`: Is the directory that store functions that help us on a specific task

### Pages in Gatsby

The `pages` on `gatsby` can be dynamically generated (more on this later) or can be done by `file system routing` this means that you can create a file like `index.js`; `gatsby` will know that this will be associate with the `/` path and if you name a file `beers.js` it will associate with the `/beers` path.

#### Creating our first page

- First on your editor go to the `src/pages` directory and create a new file call `index.js`
- Inside of the newly created file import `react`: `import React from 'react';`
- Then exports a function call `HomePage` with a `div` and inside of it a `paragrath` tag with some message

  ```js
  export default function HomePage() {
    return (
      <div>
        <p>Hey! Im home page</p>
      </div>
    );
  }
  ```

  `Gatsby` assume that the default `export` from a page is what it `render` when someone visits that page

- Now on your terminal go to the `gatsby` directory
- Run the `start` script using:
  `npm start`

  The `start` script will run the `develop` script that runs our local server and put us in the live reload mode

- It should be a `localhost` URL for us in this case `localhost:8000` and a `graphql` URL that is how we are going to source our data(more on this later)
- On your browser go to `http://localhost:8000/`
- You should see the message that you put on the `index.js` file
- Now update the message and save the `index.js` file
- You should see the page updating the message without reloading the page(this is called hot-reloading)
- Now create all the pages that we will use on the project:
  ```
  File name ======>  function name
  beers.js  ======>  BeersPage
  order.js  ======>  OrderPage
  pizzas.js ======>  PizzasPage
  slicemaster.js => SlicemastersPage
  ```
- Test each new page on your browser
  ```
  - http://localhost:8000/beers
  - http://localhost:8000/order
  - http://localhost:8000/pizzas
  - http://localhost:8000/slicemaster
  ```
- You should see each custom message that you use on each function

#### 404 page

By default `gatsby` will automatically create a `404` page for you and on development mode event you create your custom page you will be redirected to the `gatsby` pre-build `404` page but you can see you custom one clicking on the `Preview custom 404-page` button that it will be on the `gatsby 404 page`.

- On your editor in the `src/pages` directory create a file call `404.js`
- Import `react`: `import React from 'react';`
- Exports a function call `FourOhFourPage` with a message
  ```js
  export default function FourOhFourPage() {
    return <p>Hey - That page doesn't exist!</p>;
  }
  ```
- Now on your browser go to a page that doesn't exist like `http://localhost:8000/test`
- You should see `gatsby` 404 page
- Click on the `Preview custom 404 page` button
- You should see your custom 404 message
