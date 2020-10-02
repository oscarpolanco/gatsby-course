# Gatsby course modules text

In this course, we will check [gatsby](https://www.gatsbyjs.com/docs/) which is a framework to build websites with `react`. In each module, we will have some text that will help me to write about what I will be learning. In this course, they are assuming that you have some pre-existing knowledge about `js`, `react`; `node` and some basic understanding of some configurations that are used.

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

### Routing and Navigation on Gatsby

Like we mention before `gatsby` has its own routing strategy so we don't need to add some extra package to manage that. We are going to illustrate this creating a `Nav` component

- First on your editor go to the create a new file call `Nav.js` on the` gatsby / src / components` directory
- On that newly create file import `react`:`import React from 'react';`
- Export a function call `Nav`
  ```js
  export default function Nav () {
    return ();
  }
  ```
- Inside of the `return` statement add a` nav` with a `ul` child; then add with 2 `li` tags as children of the` ul` tag and inside of each `li` tag place an anchor that get you to the` home` page and the `beers` page
  ```js
  export default function Nav () {
    return (
      <nav>
        <ul>
          <li>
            <Link to = "/"> Home </Link>
          </li>
          <li>
            <Link to = "/ beers" Beers </Link>
          </li>
        </ul>
      </nav>
    );
  }
  ```
- Now go to the `slicemaster.js` file in the` pages` directory
- Import the `Nav` component:`import Nav from '../ components / Nav';`
- Use the `Nav` component inside of the` div` in the `return` statement
- On your console go to the `gatsby` directory and run your local server using:` npm start`
- Go to the [slidemaster page] (http: // localhost: 8000 / slicemaster)
- You should see 2 links above
- Click on the `Home` link
- You should be redirected to the `Home` page
- Now go to the `index.js` and` beers` page and add the `Nav` component like we did on the` slicemaster` page
- Now you can see that every time you click on a link the page reload and change it content and for 1 second the content desapear; to fix this we will use some of the function that `Gatsby` have in this case the` Link` component. Go to the `Nav` component and import the` Link` component from `gastby`
  `import {Link} from 'gatsby';`
- Update the `anchors` to use the` Link` component
  ```js
  return (
      <nav>
        <ul>
          <li>
            <Link to = "/"> Home </Link>
          </li>
          <li>
            <Link to = "/ beers" Beers </Link>
          </li>
        </ul>
      </nav>
    );
  ```
- Now go back to the `beers` page
- Click on the `Home` link
- You should that the page content update with the `home` content real fast instead of relaoding the page. This is because we are swping out the components each time we click a link instead of reloding the page; also will do a html file push to change the url and add it to the browser history
- Some time we need to programally change the pages like when someone submit a form or click a specific button and not rely on the user clicking a link we use `navigate`. On the `Nav` component impor` navigate` from `gastby`
  `import {Link, navigate} from 'gatsby';`
- Do another `li` and add a button with the following message
  ```js
  return (
      <nav>
        <ul>
          <li>
            <Link to = "/"> Home </Link>
          </li>
          <li>
            <Link to = "/ beers" Beers </Link>
          </li>
          <li>
            <button type = "button" onClick = {goToSlicematers}>
              Click me to see slicemaster after 2 seconds
            </button>
        </li>
        </ul>
      </nav>
    );
  ```
- Create a function above the `Nav`function call` goToSlicematers`: `function goToSlicematers () {}`
- Now add a `setTimeout` function and` console` a message
  ```js
  function goToSlicematers() {
    setTimeout(() => {
      console.log("Go to slicers !!!");
    }, 2000);
  }
  ```
- Now bellow of the console add the `navigate` function
  ```js
  function goToSlicematers() {
    setTimeout(() => {
      console.log("Go to slicers !!!");
      navigate("/ slicemaster", { replace: true });
    }, 2000);
  }
  ```
  The `navigate` function receives the` URL` of the page that you will redirect and a configuration object in this case we send the `replace` property as` true` so the `URL` that we redirect will be added to the browser history
- For this example we are not going to use the `navigation` function so delete all code related of the` Nav` component
- Then add the following `li` items
  ```js
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Hot Now </Link>
        </li>
        <li>
          <Link to="/ pizzas /"> Pizza Menu </Link>
        </li>
        <li>
          <Link to="/"> Logo </Link>
        </li>
        <li>
          <Link to="/ slicemaster"> Slicemaster </Link>
        </li>
        <li>
          <Link to="/ order"> Order Ahead! </Link>
        </li>
      </ul>
    </nav>
  );
  ```

### Creating layouts in Gatsby

As you see on the example of the preview we import several times the `Nav` components but we want like a general structure to handle this instead of repeating ourself over and over on each page component so we will create a general `layout` for our pages that contain the `Nav` component that we create before. `Gatsby` doesn't have a special way to handle this type of `layout` so we will use `react` components with children (There is a way to use a `gatsby` specific feature that we are going to use at the end of this section)

- First on your editor go to the `src/components` directory
- Create a new file call `Footer.js`
- In this newly created file import `react`: `import React from 'react';`
- Export a function call `Footer`: `export default function Footer() {}`
- Return on the `Footer` function a `footer` tag with the following content
  ```js
  export default function Footer() {
    return (
      <footer>
        <p>&copy; Slick Slices {new Date().getFullYear()}</p>
      </footer>
    );
  }
  ```
- Now on the `component` directory create a file call `Layout.js`
- On that newly created file; import `react`: `import React from 'react';`
- Now export a function call `Layout`: `export default function Layout() {}`
- Import the `Nav` component: `import Nav from './Nav';`
- Import the `Footer` component: `import Footer from './Footer';`
- Now return a `react` fragment using the `Nav` component; a `p` tag with a message and the `Footer` component
  ```js
  export default function Layout() {
    return (
      <>
        <Nav />
        <p>I am the page content</p>
        <Footer />
      </>
    );
  }
  ```
- Now go to the `index.js` file on the `page` directory
- Import the `Layout` component: `import Layout from '../components/Layout';`
- Then enclose the content of the `index` page using the `Layout` component
  ```js
  export default function HomePage() {
    return (
      <Layout>
        <p>Hey! Im home page</p>
      </Layout>
    );
  }
  ```
- On your terminal go to the `gatsby` directory
- Run your local server using: `npm start`
- On your browser go to the [homepage](http://localhost:8000/)
- You should see the `nav`; the `p` tag content of the `Layout` component and the `footer`
- Now we need to make the content of the current page avilable instead of the message of the `Layout` component. For this we will use the `props` that recive the `Layout` component; in this case the `children` prop that have the content that we need because we send the `p` tag as child of `Layout` on the `index.js` file. So use destructuring to use this prop on the `Layout` function
  `export default function Layout({ children }) {}`
- Then on the return statement use this child prop between the `Nav` and `Footer` component
  ```js
  export default function Layout({ children }) {
    return (
      <>
        <Nav />
        {children}
        <Footer />
      </>
    );
  }
  ```
- Now on your browser go to the [homepage](http://localhost:8000/)
- You should see the `nav`; the message that is on the `index.js` file and the `footer` component
- Now we end with something similar to the issue that we describe early because we will need to import the `Layout` component to every `page` that we need but we can use a `gatsby` custom files that automaclly wrap the `pages` for use. On the `gatsby` root directory create a file call `gatsby-browser.js`.

  The `gatsby-browser.js` is a specific `gatsby` file that will allow us to hook into different `gatsby` APIs if we need to. By default `gatsby` don't wrap our pages with something unless we use the `element` prop.

- On this newly created file import `react` and the `Layout` component
  ```js
  import React from "react";
  import Layout from "./src/components/Layout";
  ```
- Then export a function call `wrapPageElement`: `export function wrapPageElement() {}`

  The name `wrapPageElement` is recomended by the [gatsby documentation](https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement).

- The `wrapPageElement` will recive 2 props `element` and `props`
  `export function wrapPageElement({ element, props }) {}`

  Now `gatsby` will check for this function when the `page` render

- Then return the `Layout` component sending the `props` as prop of `Layout` and `element` as it children
  ```js
  export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
  }
  ```
- Now go to the `index.js` file and remove any reference of the `Layout` component
- Now go to your terminal and restart your local server. Are you don't do this the update of the `gatsby-browser.js` will not be reflected on the page
- You should see on every page with the `nav`; the content of the `page` and the `footer`
- Go to every page component and remove every reference of the `Nav` and `Layout` component
- Finally on the `gatsby` directory create a file called `gatsby-ssr.js`
- Copy the content of the `gatsby-browser.js` and paste it on the `gatsby-ssr.js` file. The `gatsby-browser` file will only work on the browser because this file will run when the page has been loaded but `gatsby` also generate everything on the server so we need to use the `gatsby-ssr` to have this function available
