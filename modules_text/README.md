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
  slicemasters.js => SlicemastersPage
  ```
- Test each new page on your browser
  ```
  - http://localhost:8000/beers
  - http://localhost:8000/order
  - http://localhost:8000/pizzas
  - http://localhost:8000/slicemasters
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
- Now go to the `slicemasters.js` file in the` pages` directory
- Import the `Nav` component:`import Nav from '../ components / Nav';`
- Use the `Nav` component inside of the` div` in the `return` statement
- On your console go to the `gatsby` directory and run your local server using:` npm start`
- Go to the [slidemasters page] (http://localhost:8000/slicemasters)
- You should see 2 links above
- Click on the `Home` link
- You should be redirected to the `Home` page
- Now go to the `index.js` and` beers` page and add the `Nav` component like we did on the` slicemasters` page
- Now you can see that every time you click on a link the page reload and change it content and for 1 second the content disappear; to fix this we will use some of the function that `Gatsby` have in this case the` Link` component. Go to the `Nav` component and import the` Link` component from `gastby`
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
              Click me to see slicemasters after 2 seconds
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
      navigate("/slicemasters", { replace: true });
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
          <Link to="/slicemasters"> Slicemasters </Link>
        </li>
        <li>
          <Link to="/order"> Order Ahead! </Link>
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

## Module 3: CSS in Gatsby

Generally, you make available your `CSS` in your code using a `link` tag and add the path to the actual file that contains all the `CSS` that you want to add; like this:

`<link rel="stylesheet" href="./my_path" />`

But this will be against the idea of `gatsby` because it needs to know about your `CSS`; this is because `gatsby` can maKe a decision such as what `CSS` your page need to have available so `gatsby` put that `CSS` before the actual page. There are a couple of ways to import `CSS` in `Gatsby` but for this example, we will use `style` components but some of the other ways will be mention next ending with our actual approach.

### Ways to import your style

#### Import the style

- First; on your editor go to the `src/styles` directory and create a file call `red.css`
- Add the following to that file:
  ```css
  body {
    background: red;
  }
  ```
- Now go to the `gatsby-browser.js` file and import your `red.css` file
  `import './src/styles/red.css';`
- Then on your terminal go to the `gatsby` directory and run your local server using: `npm start`
- Go to the [homepage](http://localhost:8000/)
- You should see a `red` background on your page. Now `gatsby` will know that this `CSS` is necessary in order to do the first render but at this moment since we are on development mode in the local server when you use the `page source` option on the browser you will no see this style but is your run a build you will see that this `CSS` is added on the page in a `style` tag

#### Use css-modules

You can `css-modules`; [here](https://www.gatsbyjs.com/docs/css-modules/#reach-skip-nav) is the explanation of the official `gatsby` docs about the subject. We won't use it as part of the process of this example.

#### Styled-components

The [styled-components](https://styled-components.com/docs) is a way to do `scope` CSS inside of `react` applications and will be used across this example. Now we will create the `global` style of the application:

- First; delete everything you did add the `red.css` file
- Now we are going to eliminate all the default styles that the browser add by default on our page using `normalize.css`(this is a module that we add on the default configuration); so on the `Layout` component in the `gatsby/src/components` directory; import `normalize.css`
  `import 'normalize.css';`
- Then on the `src/style` directory; create a file called `GlobalStyles.js`
- Go to my [repository](https://github.com/oscarpolanco/gatsby-course/tree/master/gatsby/src/styles/GlobalStyles.js) and copy all the content of the file
- Paste it in the file that you just created
- Go to the `Layout` component and import the `GlobalStyles` that you created
  `import GlobalStyles from '../styles/GlobalStyles';`
- Use the `GlobalStyle` component on the return statement
  ```js
  export default function Layout({ children }) {
    return (
      <div>
        <GlobalStyles />
        <Typography />
        <Nav />
        {children}
        <Footer />
      </div>
    );
  }
  ```
- On your terminal go to the `gatsby` directory and run your local server using: `npm start`
- You should see a background update and if you check the browser console on the element tag you should see some of the style of the page

##### GlobalStyles.js content

On the `GlobalStyles` we have the following:

- First; we got the [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle) function; that is a helper to handle global styling.
- Then we import the `SVG` that we are going to use. `Gatsby` knows that this is not valid `js` and doesn't render as a `js` module it just output the actual file that you need in this case an `SVG`; also it's done this way because we want `gatsby` to know about those `SVG` and if we don't do it this way we will have to put the `static` folder reference. If you check the `background-img` on the style section on your browser console you will see that `gatsby` add a unique identifier to the `SVG` name that will be updated so it will not be cached by the browser
- Then some `CSS` variables are add-in `:root` so we have all of then available to all our `CSS`
- Then we have some base style for out `HTML`, `body`, `fieldset`, `button`
- We select all the `gatsby` images using the `.gatsby-image-wrapper img[src*=base64\\,]` selector before that they are fully rendered. `Gatsby` under the hood render `images` with multiple formats that with fallback its one doesn't work on a specific browser; also put multiple sizes of that `image` so depending the user screen will render a smaller or larger version of the `image` and before it loads all different images from the server it will render a `base 64 image` that in our case you can scale that `image` and made a blur effect before the other `images` load as you see in the style on that selector
- After the `image` style we have the `scrollbar` style; some custom `hr` style and a `max-with` for all `images`

### Typography

This will like the `global` style that we added before but this will be in its own separate file because if we need to update some `font` we quickly can update it.

- First; on your editor in the `gatsby/src/styles` create a file call `Typography.js`
- Go to my [repository](https://github.com/oscarpolanco/gatsby-course/tree/master/gatsby/src/styles/Typography.js) and copy the content of the `Typography.js` file
- Paste the content on the file that you just created
- Now on the `Layout` component import the `Typography` file
  `import Typography from '../styles/Typography';`
- Use the `Typography` component on the return statement
  ```js
  export default function Layout({ children }) {
    return (
      <div>
        <GlobalStyles />
        <Typography />
        <Nav />
        {children}
        <Footer />
      </div>
    );
  }
  ```
- Now on your terminal start your local server using: `npm start`
- On your browser you should see a change of the text in the page

If you see at the top of the file we import a `font` the same way as we do in the `global` style's `SVG` so `gatsby` know about the `font` that we are going to use.

### Styling Nav and logo

Now we will check how we make styles on our components and check step by step some of the styles to learn a few things about `CSS`. Here are the steps and some brief explanation

- First; on your editor go to the `Nav` component
- Import the `style` object from the `styled-components` module
  `import styled from 'styled-components';`
- Now before the `Nav` function creates a constant call `NavStyle`(The `style` in the name is not necessary is just personal preference). That constant will be equal to the `styled` object calling the element that you want in this case a `nav` element
  ```js
  const NavStyles = styled.nav``;
  ```
- Then add some style on the constant. For example:
  ```js
  const NavStyles = styled.nav`
    background: red;
  `;
  ```
- On the return statement substitute the `nav` element for `NavStyle`
- Now on your editor go to the `gatsby` directory and run your local server using: `npm start`
- Go to your browser and you should see the `nav` of the page with a `red` background
- Go back to the `Nav` component
- Add an `anchor` selector rule in `NavStyle` like this:
  ```js
  const NavStyles = styled.nav`
    background: red;
    a {
      background: green;
    }
  `;
  ```
- Go back to your browser and you should see every link with a `green` background
- Then go to the `index.js` page
- Where is the content of the page add an `anchor` tag with an example message
- Go back to the browser(on the homepage) and you should see that the link doesn't have the `green` background because we explicitly add the style for the `nav` element in the `Nav` component so we encapsulate the style in one element

  Useful advice makes the top element a `styled component` and use selectors for styling the children unless the style of the children will be reused multiple times; in that case, we can do separate `styled-components`

- No remove remove everything we use on the `background` example except the `NavStyles` constant
- Now begin with the style!! First; add the following:

  ```js
  const NavStyles = styled.nav`
    margin-bottom: 3rem;
    ul {
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr auto 1fr 1fr;
      grid: 2rem;
      text-align: center;
      list-style: none;
      align-items: center;
    }
  `;
  ```

  Here we add some `margin` to the complete `nav` element to separate from the other elements and the border of the page. Then we organize the `ul` element that will not have any `margin` or `padding` because we are going to use a `grid` alignment and each element will occupy one (fr)[https://www.w3.org/TR/css3-grid-layout/#fr-unit] and the middle one is the `logo` and will have as much space as it needs and we add some [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) between the columns; then we eliminate the list style and align the content to the center.

  If you notice for some of the values we use [rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Relative_length_units) that will be the value of the [font size](https://github.com/oscarpolanco/gatsby-course/blob/master/gatsby/src/styles/GlobalStyles.js#L17) times the predecessor number(the `font-size` of the global style file).

- Now add the style the `li` with the following

  ```js
  const NavStyles = styled.nav`
    margin-bottom: 3rem;
    ul {...}
    li {
      --rotate: -2deg;
      transform: rotate(var(--rotate));
      order: 1;
      &::nth-child(1) {
        --rotate: 1deg;
      }
      &::nth-child(2) {
        --rotate: -2.5deg;
      }
      &::nth-child(4) {
        --rotate: 2.5deg;
      }
      &:hover {
        --rotate: 3deg;
      }
    }
  `;
  ```

  Now we define a `css` variable call `rotate` to use it accross the selector; first rotating all element by `-2 degrees` then adding a `order` that will help us with the `media-queries` later. Then we need to override the `rotate` value on each element so we use `pseudo` selectors(`nth-child`) that help us to choose each `li` element and put a unique rule and change each value changing the `rotate` variable. We do it this way because is you try to override a `translate` with a rule and that `traslate` have more than 1 value will be override complete. Here is an example:

  ```css
  li {
    transform: rotate(rotate(-2deg) scale(4));
    &::nth-child(1) {
      transform: rotate(rotate(1deg));
    }
  }
  ```

  In this example, all `li` elements will be `rotate` by `-2deg` and will be `scale` by 4 except the first child that only will be `rotate` by `1deg` and will not be `scale`.

  Finally, on `hover` of each `li` element, we will `rotate` by `3deg`. Is worth mentioning that we could use a nesting selector for the `li` in other words the `li` inside of the `ul` selector but is better to avoid the nesting if is necessary.

- Now we continue with the `anchor` tag

```js
const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {...}
  li {...}
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;
```

Here we will have just add a `font-size` depending on the `font-size` of the global style and a `color` when the link is `hover` using the previously define `red` variable on the global style

- Now we need to add the `logo` so go to this [link](https://github.com/oscarpolanco/gatsby-course/blob/master/gatsby/src/components/Logo.js) and copy its content
- Now go to the `components` directory and create a `Logo.js` file
- Paste the content that you copy before in this newly created file. Just a few things to mention on this file; first; that we add `className` on some of the elements because we will need to add some styling on other components that handle the logo.

  If you see at the top of the `LogoStyle` constant it use [clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) on the `font-size` so this means that we going to have a `minimum`; `middle` and `maximum` pixel size so when you `scale` your browser the `font-size` will `scale` with it and with that said you will see that the values of the other properties are `em` so will be change with the `font-size` that use `clamp`.

- Now go to the `Nav` component and import the `Logo` component
  `import Logo from './Logo';`
- Then replace the word `Logo` on the return statement for the `Logo` component
- Now go back to the `NavStyle` constant and add the `logo` selector with the following
  ```js
  const NavStyles = styled.nav`
    margin-bottom: 3rem;
    .logo {
      transform: translateY(-25%);
    }
    ul {...}
    li {...}
    a {...}
    }
  `;
  ```
  This `transform` will give the logo a base without adding any `margin` or `padding`. For the moment will be hiding at the top of the page but is ok; later will be updated.

### Styling our layout

Now we are going to work on the style of the content of the page.

- First; go to the `Layout.js` file
- Import the `styled` function from `styled-component`
- Before the `Layout` function create a constant call `ContentStyles` using the `styled` function for a `div`
  ```js
  const ContentStyles = styled.div``;
  ```
- Now add the following on the `ContentStyles`:
  ```js
  const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
  `;
  ```
- Then use the `ContentStyles` on the return statement using the `Nav` component and `children` as it child
  ```js
  export default function Layout({ children }) {
    return (
      <>
        <GlobalStyles />
        <Typography />
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </>
    );
  }
  ```
- Import the `stripes` svg from the `asset/images` directory
  `import stripes from '../assets/images/stripes.svg';`
- Now we are going to add the a border in the content of the page and limit the site to a specific sizes. Create a constant call `SiteBorderStyles`
  ```js
  const SiteBorderStyles = styled.div``;
  ```
- Add the following style:

  ```js
  const SiteBorderStyles = styled.div`
    max-width: 1000px;
    margin: 12rem auto 4rem auto;
    margin-top: clamp(2rem, 10vw, 12rem);
    background: white url(${stripes});
    background-size: 1500px;
    padding: 5px;
    padding: clamp(5px, 1vw, 25px);
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0, 0.044);
    border: 5px solid white;
    @media (max-width: 1100px) {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  `;
  ```

  First; we add a maximun size of the content of a `1000px` then add some space on all content side and allways be centered in the page. Then we overide the `margin-top` that we previously defined so it will change with the sizes of the logo but `clamp` is not supported by all browser so in case that `clamp` doesn't work will have the first one as it value.

  Now we add the `stripe` svg as a background of our content container that in combination of the previous that we define on the `ContentStyles` will looks like a border of all the content and add a size to that `background`.

  Now we add a `padding` so the content is push a little bit and we can add some border on the content and follow the same `clamp` strategy of override the previous one. Then we add some shadow to the content container and border.

  Finally we add some more space on the sides of the content when you are bellow `1100px` screen size.

- Now go to the `Nav` component and add some `margin` on the `ul` selector to push a little bit to the top of the page the logo
  ```js
  const NavStyles = styled.nav`
    margin-bottom: 3rem;
    .logo {...}
    ul {
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr auto 1fr 1fr;
      grid-gap: 2rem;
      text-align: center;
      list-style: none;
      align-items: center;
      margin-top: -6rem;
    }
    li {...}
    a {...}
  `;
  ```

#### Note:

- One important thing is that if you want to custom the links that belong to the current page; you will see that this link have an `aria-current="page"` that you can target for styling like this: `&[aria-current="page"] {...}`

## Module 4: Headless CMS

We are going to begin the work with the backend side of our application and for this step, we are going to use [sanity](https://www.sanity.io/) that is a `headless CMS` and that means that there are no frontend or theme to actually view the data in your website this mean that `sanity` is just the backend. To see the data on our frontend we going to inject the data that we build on `sanity` via `Gatsby`.

We already install `sanity` at the beginning of this example and have some pre-load files that are on the repository on the `sanity` directory but normally you produce a new `sanity` project doing the command `sanity init` that will give you some folders to begin to work.

Now we need to initialize the add:

- First, on your terminal go to the `sanity` directory
- Now we need to create a new `dataset` using this command:
  `sanity init --reconfigure`

  If you don't have a `sanity` account yet; this command will redirect you to the `sanity` page to do it; follow the steps and login with your new account and continue with the process on your terminal. If you wanna some time to `log in` again just use the `sanity login` command

- Then it will show a series of questions that will help you to create a new project and the first one is actually is `create a new project`
- Now put the name of the project. To follow the example I put `slicks-slices-custom_name`
- For now, we will use the default `dataset` configuration so add `Yes`. This will create the `dataset` on the `sanity` dashboard
- If you don't have any problems you can run `sanity` using: `npm start`

  This command will run the `sanity start` command that will run a local server with `sanity studio` that will be the UI that we will interact

- If everything is ok it will ask you to log in and you will see an empty `schema` message so this mean that you are up a running

### Creating a schema on sanity

If you see on the `sanity.json` a property called `parts` and in that property points us to the `schema` file in the `schemas` directory so automatically `sanity` will check for this file in order to see your `schemas` unless you want to create your custom one.

On the `schema` file it will take all our `datatypes` and concatenate into our `schema`.

#### Creating our first schema

- First; our your editor go to the `sanity/schemas` directory and create a file call `pizza.js`
- Then export an object in this newly created file: `export default {...}`
- Then add the following properties to the object:

  ```js
  export default {
    name: "pizza",
    title: "Pizza",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Pizza name",
        type: "string",
        description: "Name of the pizza",
      },
    ],
  };
  ```

  The difference between the `name` and `title` is that the name is for the `schema` and the `title` is the visible name for the UI. Then we add the type of the object that will be [document](https://www.sanity.io/docs/groq-data-types#document-b9acc83522bf) that are objects with some properties added by `sanity`. Finally, we add a `fields` property that will have an array of objects with the same characteristics of the previous properties defined but instead of referring to the `schema` will be related to the `field`

- Now on the `schema.js` file in the same directory import your `pizza` schema
  `import pizza from './pizza';`
- On the `concat` function array add the `pizza` name
  `types: schemaTypes.concat([pizza]),`

  Now the browser will reload automatically and you will see that you can create some `pizza` data(don't do it just yet; we are going to add some more fields)

- Now we are going to add an `icon` property to the main object in the `pizza.js` file. Add the following:

  ```js
  export default {
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    icon: () => 'xxxx',
    fields: [...]
  }
  ```

  Since everything on `sanity` is a `react` component we can send a `react` component if we want on the properties but actually we are going to be using a `package` that have all this icons call `react-icons`

- At the top of the file import `MdLocalPizza` as `icon` from `react-icons/md`
  `import { MdLocalPizza as icon } from 'react-icons/md';`
- Now use it on the object like this:
  ```js
  export default {
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    icon: () => 'xxxx',
    fields: [...]
  }
  ```
- We can continue adding the files and the first one is the `slug` field:
  ```js
  export default {
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    fields: [
      {...},
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100,
        },
      }
    ]
  }
  ```
  The difference with the other objects in that we got an `options` property that receives an object of options for the field; the first one is `source` that will add the content of the `slug` field using the content that you previously put on the `name` field and will have a max length of a 100 characters and since is a `slug` type it will slugify the content
- Then we add a `image` field:
  ```js
  export default {
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    fields: [
      {...},
      {...},
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      ]
    }
  }
  ```
  When you put `hotspot` true on the `options` property; when you edit the image you will have a crop option available where you can highlight the thing of the image that you want only to show and will make sure that on every version of the image that spot will be on the center
- Finally we will add the the `price` field
  ```js
  export default {
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    fields: [
      {...},
      {...},
      {...},
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the pizza in cents',
        validation: (Rule) => Rule.min(1000),
        // TODO: Add custom input component
      },
    ]
  }
  ```
  Since we need to be a minimum 10 dollar pizza we will use the `validation` property. This property will give you the `Rule` object as a parameter that has a number of helpers that will help you to do the validation that you want and this is a function so you can add your custom logic to validate the field
- Now you can create your first pizza. Fill the form and submit the information(On the `sample-data` directory you will find some images of pizzas that you can use)

### Creating the toppings content and custom previews

Now we are going to a new `schema` for the `toppings` and this will have a relation with the `pizza schema` where the `pizzas` will have many `toppings` related so after creating the actual `topping schema` we will create that relationship.

- First; on the `schema` directory create a new file call `topping.js`
- Then import the `FaPepperHot` icon and name it as `icon` from the `react-icons/fa` library
  `import { FaPepperHot as icon } from 'react-icons/fa';`
- Now export an object that will represent the `schema`
  ```js
  export default {
    name: "topping",
    title: "Toppings",
    type: "document",
    icon,
  };
  ```
- Lets begin to create the fields; the first one will be the `name` field
  ```js
  export default {
    name: "topping",
    title: "Toppings",
    type: "document",
    icon,
    fields: [
      {
        name: "name",
        title: "Topping name",
        type: "string",
        description: "What is the name of the topping?",
      },
    ],
  };
  ```
- Then we will add a `checkbox` to mark if the `topping` if `vegetarian` or not
  ```js
  export default {
  ...
  fields: [
    {...},
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping?',
      options: { layout: 'checkbox' },
    },
  ],
  ```
- Go to the `schema.js` file and import the `toppling` schema
  `import topping from './topping';`
- Then add `toppling` to the `types` concat array
  `types: schemaTypes.concat([pizza, topping])`
- Now on your terminal go to the `sanity` directory and start your local server using: `npm start`
- Go to the `sanity studio` [page](http://localhost:3333/)
- You should see the new `Toppings` option
- Create some `toppings` such as bacon; mushrooms; onions; peperoni and mark some of them as `vegetarian`
- Now go back to your editor and will be adding a `preview` for each `topping`

  ```js
  export default {
    ...
    fields: [
      {...},
      {...},
    ],
    preview: {
      select: {
        name: 'name',
        vegetarian: 'vegetarian',
      },
    },
  };
  ```

  The `preview` property will `select` the `field` name as the name of the topping and will have access to the `vegetarian` value but we still need a `prepare` property to actually see the value

- Add the following `prepare` property:
  ```js
  export default {
    ...
    fields: [
      {...},
      {...},
    ],
    preview: {...},
      prepare: ({ name, vegetarian }) => ({
        title: `${name} ${vegetarian ? '🌱' : ''}`,
      }),
    },
  };
  ```
  So whatever is returned in the `prepare` function will be shown as the `title`; the `prepare` function receives the `fields` object but we use destructuring to get the actual property values. We will show a `leaf` emoji for the `vegetarian toppling`
- Now check on the `sanity` dashboard and you will see that have the title and on the `vegetarian toppling` you will see an emoji

### Creating data relationships

As you see we created a `schema` for `pizzas` and another one for `toppings` and the idea behind this is that every pizza can have multiple toppings and we don't wanna write over an over the same toppings information on each pizza that we create so we are going to create a relation one to many to help us with this

- First; on your editor go to the `pizza.js` file on the `sanity/schema/` directory
- On the `fields` array add the following:
  ```js
  export default {
    ...
    fields: [
      {...},
      {...},
      {...},
      {...},
      {
        name: 'toppings',
        title: 'Toppings',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'topping' }] }],
      },
    ],
  };
  ```
  The difference with the other `fields` is that we put a `type` of `array` because we want a one to many relationships and that will be an `array` of references so this is the reason that we don't reference directly to the `topping` schema. We use the property `of` to specify the content of the `array` and inside of the `array` we define the object that will be each item, in this case, will be an object with a special type call `reference` that will help us to `reference` to another `schema` and we use the `to` property to mention with `schema` we are referring. Normally you put only the `schema` name on the `to` property but imaging that we have multiple `schemas` that we need to relate with the pizza; for this, we will add an `array` of `types` that will reference each `schema`
- Now on your terminal go to the `sanity` directory
- Run your local server using: `npm start`
- Go to the `Pizzas` section
- Add the `toppings` on the `pizza` that you created before
- Now we want to show more information about the `pizza` that you are creating; so go back to the `pizza.js` file on your editor
- Bellow the `fields` property add the following

  ```js
  export default {
    ...
    fields: [
      {...},
      {...},
      {...},
      {...},
      {
        name: 'toppings',
        title: 'Toppings',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'topping' }] }],
      },
    ],
    preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
  };
  ```

  The first thing you can notice is when we refer to the `name` field we put `title`; if you remember on the `select` property of the `toppings` we use `name` to reference the `name` field; this may be confusing some times because you can actually put whatever you want as the property name here and that name will be the parameter that you receive on the `prepare` function. We select the `image` that we add on the `image` field and finally, we add the `toppings`. We actually cannot call the complete field like `toppings: toppings` because that will give users an array of references but not the actual value so we need to reference like this to get the actual value:
  `schemaNameIndex: 'schema.index.property'`

  Like the `sanity` documentation said just to reference what you need no complete object. In this case, we will put the 4 `toppings`

- Now we need to add the `prepare` function:
  ```js
  export default {
    ...
    fields: [
      {...},
      {...},
      {...},
      {...},
      {
        name: 'toppings',
        title: 'Toppings',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'topping' }] }],
      },
    ],
    preview: {
    select: {...},
    prepare: ({ title, media, ...toppings }) => {
      const tops = Object.values(toppings).filter(Boolean);
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  };
  ```
  Now we receive all the things that we defined on the `select` property. If you notice we use a `rest` param to capture everything else that are not `title` and `media` in an object called `toppings` then we eliminate all the `undefined` on the `toppings` object and on the `return` statement `join` each array value of the `tops` array using a comma and space as a subtitle

### Creating our person data type

Now we need to create another `schema` to add the `slicemasters` information so we can show it on the frontend of the application. For this, we going to follow the same what we did before on the others `schemas`.

```js
import { MdPerson as icon } from "react-icons/md";

export default {
  name: "person",
  title: "Slicemasters",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Tell us a bit about the person",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
```

Then go to the `schema` directory and import the `person` schema and use it on the `type` concat array

```js
import person from "./person";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pizza, topping, person]),
});
```

Finally, go to your browser and add a `slicemasters`; you can use the `data` on the `sample-data` directory. In the `text-data.md` are the user's information and on the `nice-pizza-pics` directory have some people images.

### Custom CMS inputs in Sanity

We are going to add our custom `input` to `sanity studio` so we can add our custom logic in this case the `price` input that is on the `pizza` schema so we can have the actual `price` shown as you write and with the conversion from cents to dollars. We can do this because `sanity studio` is a `react` base cms that we are hosting ourselves for the moment.

- First; on your editor create a new directory call `components` in the `sanity/schema` directory
- On that newly created directory create a new file call `PriceInput.js`
- Inside of that file import `react`: `import React from 'react';`
- Now export a function call `PriceInput`
  `export default function PriceInput() {}`
- Add the following parameters for the function
  `export default function PriceInput({ type, value, onChange, inputComponent }) {...}`

  `Sanity` send to your custom component a bunch of `props` depending on where you use it so all the data that it uses it before to render their component is passed to your custom one

- Then put a return statement with the following:

  ```js
  export default function PriceInput({
    type,
    value,
    onChange,
    inputComponent,
  }) {
    return (
      <div>
        <h2>{type.title}</h2>
        <p>{type.description}</p>
        <input type={type.name} value={value} />
      </div>
    );
  }
  ```

  One thing before to dive in on the custom component is that the style of the input, in this case, will not be equal to what `sanity` use for the components because `sanity` add a bunch of classes in their components and we are not using those in our custom one.

  First, we use the `type` object that has the information that we defined previously on the `fields` array of the `pizza` schema in this case the `title` that are defined on the `select` object of the `preview`, the `description` is defined on the object related to the `price` field. The `name` property also is defined on the `field` object related to the `input` and the `value` have the actual value of the input

- Every time you put an `input` with a `value` on `react` you will need an `onChange` property on that input but before we do this we need to import some functions so our custom component work well with `sanity studio`. First import the `PatchEvent`, `set` and `unset` functions:
  `import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';`
- Now create a function call `createPatchFrom` that recive `value`
  `function createPatchFrom(value) {}`
- Now return the `PatchEvent` with the following:

  ```js
  function createPatchFrom(value) {
    return PatchEvent.from(value === "" ? unset() : set(Number(value)));
  }
  ```

  We run the `PatchEvent` sending the `unset` or `set` function where the input has a value or not. The `set` value will as its name said `set` the value of the input if it exists and `unset` the opposite. We put `Number` on the `set` parameter because even the `input` is type `number` the value will be a `string`

- Now add a `onChange` property on the input that we created before using the `createPatchFrom` to send the value to `sanity` to patch itself for things like live updating and preview
  ```js
  export default function PriceInput({
    type,
    value,
    onChange,
    inputComponent,
  }) {
    return (
      <div>
        <h2>{type.title}</h2>
        <p>{type.description}</p>
        <input
          type={type.name}
          value={value}
          onChange={(event) => onChange(createPatchFrom(event.target.value))}
        />
      </div>
    );
  }
  ```
- Then we need to add the reference to the actual `inputComponent`
  ```js
  export default function PriceInput({
    type,
    value,
    onChange,
    inputComponent,
  }) {
    return (
      <div>
        <h2>{type.title}</h2>
        <p>{type.description}</p>
        <input
          type={type.name}
          value={value}
          onChange={(event) => onChange(createPatchFrom(event.target.value))}
          ref={inputComponent}
        />
      </div>
    );
  }
  ```
- Now we need to expose a `focus` method so `sanity` can run it. So bellow the `PriceInput` function add the following:
  ```js
  PriceInput.focus = function () {
    this._inputElement.focus();
  };
  ```
- Now we need to add the `format` value on the `h2`; so we will have the price on dollar and that price will be update immediately with the information that you put on the price input. Add the following before the `PriceInput` function
  ```js
  const formatMoney = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format;
  ```
  The [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) is an object that provides us with some tools to format numbers and strings depending on the function that you use and the configuration that you send to that function; in this case, is a `currency` of `US` dollars
- Then we need to add the value on the `h2` tag and wrap that value on using `formatMoney` and devide the value by a `100` because the value of the input is on cents. Finally; ask if we actually have a value so we can put a empty string instead of calling `formatMoney`
  ```js
  export default function PriceInput({
    type,
    value,
    onChange,
    inputComponent,
  }) {
    return (
      <div>
        <h2>
          {type.title} - {value ? formatMoney(value / 100) : ""}
        </h2>
        ...
      </div>
    );
  }
  ```
- Now go to the `pizza.js` file on the `schema` directory
- Import the `PriceInput` component
  `import PriceInput from '../components/PriceInput';`
- Search for the `price` field and add the following:
  ```js
  {
    name: 'price',
    title: 'Price',
    type: 'number',
    description: 'Price of the pizza in cents',
    validation: (Rule) => Rule.min(1000),
    inputComponent: PriceInput,
  }
  ```
  Putting the `inputComponent` property will override the previews configuration that you have with your custom component
- Now on your terminal go to the `sanity` directory and run your local server using: `npm start`
- On your browser go to the `pizzas` option
- Click on one of the `pizza` that you create
- You should see the `price` input and when you type a number you should see the price on the dollar next to the input title

## Module #5: Getting data into Gatsby with GraphQL

At this point, we got a frontend implementation using `Gatsby` and a backend implementation using `sanity`. On the `sanity` part of the application, we create data that we need available on our site so we need something that helps us with this and that something is [GraphQL](https://graphql.org/) that is a data query and manipulation language for APIs.

`Gatsby` already has a playground for you on development mode just need to run your local server(for this project `npm start`) and look at the output in the terminal and you will see this URL `http://localhost:8000/___graphql`. You will see that the site has some `queries` that you can use but at this moment we will not use then they are more for the low-level plugin dev.

Add build-time `Gatsby` will go and gather all the data that it needs in order to run in our case the `sanity` data; then stick all this data in memory and allow us to make `queries` via `graphQL query`.

Now that we spoke a little bit of `graphQL` with `Gatsby` we need to know how we are going to bring all the data that we need from `sanity` and the way that we do this is via `plugins` and those `plugins` are defined on the [Gatsby config file](https://www.gatsbyjs.com/docs/gatsby-config/). Most of the time you will use this file to specify `plugins` that are used on your website but you can also specify `metadata` of your site; `pathPrefix` that will help you to deploy your add to a path on a domain and some more things.

### First query using graphQL

- First; on your editor in the root of the `gatsby` directory create a file called `gatsby-config.js`
- Now export an object
  `export default {}`

  If you notice on the documentation you will see that they use `common js` modules but here we add `ES6 modules` and the reason that we can do this is; because we set this env variable on the script of the `package.json`: `NODE_OPTIONS=\"-r esm\" `

- Then add a property call `siteMetadata` and it value is an object
  ```js
  export default {
    siteMetadata: {},
  };
  ```
- Add the following on the `siteMetadata` object:
  ```js
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton!`,
  }
  ```
- Now go to your terminal and run your local server using: `npm start`
  If you already have the server running you will need to restart your server so the changes can be avilable
- Now go to the [graphQL page](http://localhost:8000/___graphql)
- On the middle window delete everything that it have
- Add an object call `query`
  `query {}`
- Inside of the object add `site`
  ```js
  query {
    site {}
  }
  ```
- Inside of `site` add the `siteMetadata`
  ```js
  query {
    site {
      siteMetadata {}
    }
  }
  ```
- Then add the same names that you add on the `gatsby-config.js` file inside of the `siteMetadata` object
  ```js
  query {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
  ```
- Click on the play button at the top
- You should see the information that you add in the third window

### Sourcing Sanity data and GraphQL introduction

In this section we are going to use`plugins` that make working with other packages; libraries or services easy to work with `gatsby` in this case `Sanity` to get all data that we need on the page. On `gatsby` we define the plugin on the `gatsby-config.js` file. Here are the steps to do it:

- First; on your editor go to the `gatsby-config.js` file on the root of the `gatsby` directory
- Then; bellow the `siteMetadata` property add another one call `plugins` that will have an array
  ```js
  export default {
    siteMetadata: {...},
    plugins: [],
  };
  ```
- Now we are going to add some plugins. There are 2 different ways to define a `plugin`; one is to specify the name of the `plugin` and accept all the default options that it have like the next one:
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-styled-components',
    ],
  };
  ```
  This is a style component `plugin` that surfaces the `CSS` to `gatsby` so it can figure out what is the critical `CSS` is and do everything that it needs to do
- The other way to specify a `plugin` that have some configuration that you need to send; you will define an object with a `resolve` property that is the name of the `plugin` then you need to add an `options` property that will have all the configuration that you need. In this case, we will add the `gatsby-source-sanity` that will help us to get the data from `Sanity`
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-sanity',
        options: {},
      },
    ],
  };
  ```
- On the `options` object we will add a `projectId` property
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'your_project_id',
        },
      },
    ],
  };
  ```
  To get the `projectId` need to follow the next steps:
  - Go to https://manage.sanity.io/ (log in if you don't have an active session)
  - Select the project that you create before on the `sanity` running process
  - Copy the `project ID` bellow the tittle of the project
  - Paste it on the `gatsby-config.js` file
- Now we need to add the dataset property:
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'your_project_id',
          dataset: 'your_dataset_name',
        },
      },
    ],
  };
  ```
  To check the name you can follow the next steps:
  - On the https://manage.sanity.io/ site and after you choose a project the is a `Datasets` option bellow the project name
  - Click on that option
  - Copy the name of your `dataset` in this example we have `production` as `dataset` name
  - Paste if on the `dataset` property on the `gatsby-config.js` file
- Add the `watchMode` as true
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'your_project_id',
          dataset: 'your_dataset_name',
          watchMode: true,
        },
      },
    ],
  };
  ```
  When you are on `development` mode and you make a change on your `Sanity` cms you won't need to rebuild your app again
- Now we will add a `token` but this `token` should be `secret` so we don't want to commit to any version controller this so we will need to add some things before. First; on your root of the `gatsby` directory add a file called `.env`
- Inside of this file add the following
  ```bash
  SANITY_TOKEN =
  ```
- Then go to https://manage.sanity.io/
- Click the `settings` options
- Click on `API`
- Then click on the `ADD NEW TOKEN` button
- On the modal add the name of the `token` on the input
- The `Rights` should be just `read`
- Click on the `ADD NEW TOKEN` button
- Copy the `token` (This will show you the `token` just once so make sure to copy a temporally store somewhere)
- Now get back to your editor and go to the `.env` file that you created
- Paste your `token` after the equal sign of the `SANITY_TOKEN` environment variable
- Then import `dotenv` on the `gatsby-config.js`
  `import dotenv from 'dotenv';`
- Now use the `dotenv` function
  `dotenv.config({ path: '.env' });`

  By default `Gatsby` will add to your surface any environment variable that starts with `GATSBY_` but it will not surface the other ones. In this case, we want that this secret will not surface and be on the browser so we will use `dotenv` to use this value

- Then add the `token` to the `options` object in the `gatsby-config.js` file using the token that you add before in the environment variable
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-styled-components',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'your_project_id',
          dataset: 'your_dataset_name',
          watchMode: true,
          token: process.env.SANITY_TOKEN,
        },
      },
    ],
  };
  ```
- Finally, we need to deploy our `graphQL` API on `Sanity` because by default it has a [grok api](https://www.sanity.io/docs/groq) that needs to be enabled to actually work with `graphQL` and `Sanity`. Now on your terminal go to the `sanity` directory
- Use the following command: `sanity graphql deploy your_dataset_name`
- Write `y` to active the playground and hit enter (When it finish the process you will see a link to the playground)
- Now on your terminal go to the `gatsby` directory and restart your local server
- Go to the `graphQL` explore and you should see the `sanity` data

#### Notes:

- The plugins that we add to this section are previously installed. You can check the `package.json`
- Another thing that we should add is the `CORS Origins` in the `settings` options if you are accessing from the browser; for now we don't need this when we are local because the browser will not be talking with `Sanity` actually this will happen on build time on the `node` server and `CORS` will not apply but on a later section we will add this

#### Practice some queries on graphQL

Now as you see on your `graphQL` playground's explorer you got a bunch of new options that you could use to grab some data from `Sanity` here are some examples:

- First on the explorer click the `allSanityPizza`. This will make a `query` that bring all `pizzas`
- Click on `nodes` (this will bring an individual `pizza`)
- Now on the `nodes` options choose the `name` and `price`. You should end up with a `query` like this:
  ```js
  {
    allSanityPizza {
      nodes {
        name
        price
    }
  }
  ```
- Click on the `play` button
- You should see an object like this with the `Sanity` data
  ```js
  {
  "data": {
    "allSanityPizza": {
      "nodes": [
        {
          "name": "Master pizza",
          "price": 1034,
        },
        {
          "name": "Veggie Deligth",
          "price": 2256,
        }
      ]
    },
  }
  ```
- You can continue adding properties like the `slug` so click on the `slug` option and click on `current` to have the actual `slug` string
- You should end up with a `query` like this
  ```js
  {
    allSanityPizza {
      nodes {
        name
        price
        slug {
          current
        }
      }
    }
  }
  ```
- Click on the play button and you should see an object like this:
  ```js
  {
  "data": {
    "allSanityPizza": {
      "nodes": [
        {
          "name": "Master pizza",
          "price": 1034,
          "slug": {
            "current": "i-love-pizza"
          },
        {
          "name": "Veggie Deligth",
          "price": 2256,
          "slug": {
            "current": "veggie-deligth"
          },
        },
      },
    }
  }
  ```
- One of the benefits of `graphQL` is that you can `query` as much data as you want so you can `query` all `pizza` but in the same `query` you can also `query` for the `person`. So on the `explorer` click on `allSanityPerson`
- Then click on `nodes`
- Choose the `name` option
- You should see a `query` like this
  ```js
  {
    allSanityPizza {
      nodes {
        name
        id
        price
        slug {
          current
        }
      }
    }
    allSanityPerson {
      nodes {
        name
      }
    }
  }
  ```
- Click on the `play` button
- You should see an object like this:
  ```js
  {
    "data": {
      "allSanityPizza": {
        "nodes": [
          {
            "name": "Master pizza",
            "price": 1034,
            "slug": {
              "current": "i-love-pizza"
            },
          },
          {
            "name": "Veggie Deligth",
            "price": 2256,
            "slug": {
              "current": "veggie-deligth"
            },
          }
        ]
      },
      "allSanityPerson": {
        "nodes": [
          {
            "name": "Slick"
          }
        ]
      }
    },
  }
  ```
- Also we can go for `nested` datatypes. As you remember each `pizza` have `toppings` and we can call then clicking on the `toppings` options of the `allSanityPizza`
- Then click on the `name` option
- You should end up with a `query` like this:
  ```js
  {
    allSanityPizza {
      nodes {
        name
        id
        price
        slug {
          current
        }
        toppings {
          name
        }
      }
    }
    allSanityPerson {
      nodes {
        name
      }
    }
  }
  ```
- Click on the `play` button
- You should end up with a `query` like this
  ```js
  {
    "data": {
      "allSanityPizza": {
        "nodes": [
          {
            "name": "Master pizza",
            "id": "-cdbc37fe-833f-5ab6-857a-9e60f98396fb",
            "price": 1034,
            "slug": {
              "current": "i-love-pizza"
            },
            "toppings": [
              {
                "name": "Pepperoni"
              },
              {
                "name": "Mushrooms"
              },
              {
                "name": "Onions"
              },
              {
                "name": "Bacon"
              }
            ]
          },
          {
            "name": "Veggie Deligth",
            "id": "-0bfa6678-2690-51df-b791-c4e2edd22241",
            "price": 2256,
            "slug": {
              "current": "veggie-deligth"
            },
            "toppings": [
              {
                "name": "Mushrooms"
              },
              {
                "name": "Onions"
              }
            ]
          }
        ]
      },
      "allSanityPerson": {
        "nodes": [
          {
            "name": "Slick"
          }
        ]
      }
    },
  }
  ```
- Now on the `allSanityPizza` click on the `id` option
- Click on the `play` button
- Copy one of the `pizza's` ids
- Go to space where the `query` is written
- Clean your `query` space
- Add the following `query` pasting the `id` of the `pizza` that you just copy
  ```js
  {
    sanityPizza(id: {eq: "your_pizza_id"}) {
      name
    }
  }
  ```
  We sent to the `sanityPizza` a `stringQueryObject` with a property called `eq` that means `equal` so we are writing a `query` that grad the `pizza` with a specific `id`(Do not confuse with `_id` that is an internal database `id`)
- Click on the `play` button and you should end with an object like this
  ```js
  {
    "data": {
      "sanityPizza": {
        "name": "Veggie Deligth"
      }
    },
  }
  ```
- Here is the same example with a `regex`
  ```JS
  {
    sanityPizza(name: {regex: "/veggie/i"}) {
      name
      toppings {
        name
        vegetarian
      }
    }
  }
  ```
- Click on the `play` button
- You should end up with an object like this
  ```js
  {
    "data": {
      "sanityPizza": {
        "name": "Veggie Deligth",
        "toppings": [
          {
            "name": "Mushrooms",
            "vegetarian": true
          },
          {
            "name": "Onions",
            "vegetarian": true
          }
        ]
      }
    },
  }
  ```

### Learning Gatsby queries

Now that we have access to the data of `sanity` in `Gatsby` we need to learn how to use it on the parts of our website that we need.

On `Gatsby` we have 2 types of `queries`; a `page query` and a `static query`.

- `page query`: Is that `query` that can accept variables and can only be done on a `page`
- `static query`: Is that `query` that can be anywhere you want and can not be dynamic so it can not accept variables

To begin to work using `queries` on `Gatsby` we will be working on the `pizza` page that will `fetch` all `pizzas` or all `pizzas` depending on a `topping` so we will need to use a `query` that fetch all `pizzas` if we don't have any `topping` choose or filter the `pizzas` by `toppings`. Let begin with the process

- First; go to the `pizza` page component on the `page` directory
- Now import `graphql` from `gatsby`
  `import { graphql } from 'gatsby';`
- The way to specify a `page query` on `Gatsby` is exporting a `query` from the `page` and `Gatsby` is smart enough to see that there is a `query`; it gets the data past it to your `page component`. So add an export statement after the `Pizza page` component like this:
  ```js
  export const query = graphql``;
  ```
  The actual name of the variable is not important you only thing that matters is that you are exporting a `graphQL` query and will turn it into data. Remember that you need to use `backticks`
- Now let begin to write the `page query`. Create a `query` object name `PizzaQuery`
  ```js
  export const query = graphql`
    query PizzaQuery {}
  `;
  ```
  The name is not required but we can use it
- Then we need to begin with the `query`. For all `pizza` we will get the `names`; `id`; `slug` and `toppings`
  ```js
  export const query = graphql`
    query PizzaQuery {
      allSanityPizza {
        nodes {
          name
          id
          slug {
            current
          }
          toppings {
            id
            name
          }
        }
      }
    }
  `;
  ```
  Is almost the same that we already saw on the `graphQL` playground so will be easier to go there make the `query` and paste it here
- Now we want the `pizza` image on the `query`
  ```js
  export const query = graphql`
    query PizzaQuery {
      allSanityPizza {
        nodes {
          name
          id
          slug {
            current
          }
          toppings {
            id
            name
          }
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `;
  ```
  The `fluid` part will be covert on a later section but on the nested inside we use what is called `fragment` that is a collection of fields that we want so we can prevent to write the complete `query` because when you are writing a `graphQL` query you need to specify everything that you need but in our case, we need every field so we can stick it into a fragment. The `fragment` comes from the `Sanity` plugin that we use before. Another thing is when you add a `fragment` it will not work on the `graphQL` playground
- Now you save your work and run your local server
- On the browser open the inspector
- Search for the `components` tap(we assume that you have the `react` extension on your browser)
- Go to the `pizza` page
- On the inspector search for the `pizza` page component
- On the `props` you should see a `prop` call `data` with your `query`
- Now that we see the `query` we want to rename the `allSanity query` for a much easier word like `pizzas` and we just do the following to achieve that
  ````js
  ```js
  export const query = graphql`
    query PizzaQuery {
      pizza: allSanityPizza {...}
    }
  `
  ````
- Now is you check on your browser again you should see a `pizzas` property on the `data` prop

#### Display the data on the page

As you see we got the `data` that we need on the `pops` object so we just need to use it on our page.

- On your editor; in the `pizza.js` file destructure the `props` object to recive the `data` prop
  `export default function PizzasPage({ data }) {...}`
- Now extract the `pizzas` from data
  ```js
  export default function PizzasPage({ data }) {
    const pizzas = data.pizzas.nodes;
    ...
  }
  ```
  If you notice we don't add any loading state to wait for the data because all is pre-build so this means that before the page render all the data will be there. On build time; we build it the data will be there then we send it to the server
- Now we will create another component to display the actual data. On the `components` folder create a new file call `PizzaList.js`
- On this newly created file import `react`
  `import React from 'react';`
- Then import the `Link` component from `gatsby`
  `import { Link } from 'gatsby';`
- Now create a function call `PizzaLIst` and export that
  `export default function PizzaList() {}`
- Now we will reciving a `prop` call `pizzas`
  `export default function PizzaList({ pizzas }) {}`
- Before we loop over from the `pizzas` I like to create a component for the single `pizza` to matain it separate from the `grid`; so on before the `PizzaList` function create a component call `SinglePizza` that recive as a prop `pizza`
  `function SinglePizza({ pizza }) {}`
- Now on the return statement we add a `div` as container
  ```js
  function SinglePizza({ pizza }) {
    return <div></div>;
  }
  ```
- Now use the `Link` component to use the `/pizza/slug` to redirect the user
  ```js
  function SinglePizza({ pizza }) {
    return (
      <div>
        <Link to={`/pizza/${pizza.slug.current}`}></Link>
      </div>
    );
  }
  ```
  We will be creating the page related to a single `pizza` on another section
- Then inside of the `Link` component add a `h2` tag with the following structure(follow this stucture to have the same styles)
  ```js
  function SinglePizza({ pizza }) {
    return (
      <div>
        <Link to={`/pizza/${pizza.slug.current}`}>
          <h2>
            <span className="mark">{pizza.name}</span>
          </h2>
        </Link>
      </div>
    );
  }
  ```
- Add a `p` tag bellow the `Link` component add the `toppings`. Since the `toppings` are an array of `toppings` we need to loop throw it. Since the `map` function returns an array we need to use the `join` function to have an string separate by comma and a space
  ```js
  function SinglePizza({ pizza }) {
    return (
      <div>
        <Link to={`/pizza/${pizza.slug.current}`}>
          <h2>
            <span className="mark">{pizza.name}</span>
          </h2>
        </Link>
        <p>{pizza.toppings.map((topping) => topping.name).join(", ")}</p>
      </div>
    );
  }
  ```
- Now we loop over the `pizzas` object using `map` using the `SinglePizza` component that we did before and add the `pizza` id as a key of the component
  ```js
  export default function PizzaList({ pizzas }) {
    return (
      <div>
      key={pizza.id}
        {pizzas.map((pizza) => (
          <SinglePizza key={pizza.id} pizza={pizza} />
        )}
      </div>
    );
  }
  ```
- Import `PizzaList` from `components`
  `import PizzaList from '../components/PizzaList';`
- Remove the example text from the return statement and use the `PizzaList` component sending `pizzas` as it prop
  ```js
  export default function PizzasPage({ data }) {
    const pizzas = data.pizzas.nodes;
    return (
      <>
        <PizzaList pizzas={pizzas} />
      </>
    );
  }
  ```
- Run your local server
- On the `pizzas` page on your browser you should see the information of the `pizzas` that you add on `Sanity`

#### Notes:

- Later we will modify the `query` to take variables

## Module 6: Puttin' in work

In this module, we will be addressing a couple of topics that will help us to begin to give form to our example website.

### Gatsby images

One of the topics that always comes when you are working on a website is `images` because they can be an issue on your website if you don't handle it but like we mentioned before here is were `Gatsby` comes to the rescue because it makes the progressive loading, different resizing and compression much easier.

#### Some issues with images

- Some times the `image` are too big like when your site receives an 8MG and you need to resize it
- Sometimes they are not compressed so the size file could be right but it could be smaller because you can compress it with an algorithm; these algorithms can be `lossless` and `lossy` algorithms. The `lossless` compression will make the `image` the small as possible without giving any quality and the `lossy` compression make the `image` the small as possible without giving any quality.
- Some times we receive `images` with different `with/height` and you will need to resize then to be on the sizes that you want for your website
- You could have poor loading because when you try to load the `image` on the page and you have a slow internet connection will take more time to show the `image` to the user
- You can have the incorrect format; some browser could need a specific version of an `image` so you will need more than one `image` so the browser load the correct one

#### How Gatsby can help

It will add all the things that we need to solve the issues that we mention in the title of the preview and you don't need to worry about it. For example:

- It will handle the `radios` for you
- It will give us a `data image` that will be shown in the moments that the actual `image` is loading
- Add a `picture` tag with a couple of `sources` tag so the browser can choose the `image` version that it wants depending on the size of the browser

All these advantages are handle under the hook by `Gatsby` but first, you need to be aware that you can't upload your `image` directly to the site so you will need a service or a computer that manually process all those versions of the `images`.

With `gatsby` we have 2 ways of doing this process:

- You can `source` your `images`; it's you have your `images` in a directory of your project you can `source` then and pipe to `gatsby-plugin-sharp` as you see [here](https://www.gatsbyjs.com/plugins/gatsby-image/) on the official documentation. `Sharp` is something that will run on your computer or on your build process to resize and generate all `images` for you. The downside of this approach is that `image` processing is very expensive so your build process will take a lot of time.

- The other way is to `source` your `images` via a service. On those services, you can directly upload your `images` or you can feed then your `image` to generate all the `images` on-demand as the client requested

Here is a couple of services that can help us with images:

- [Sanity Image Pipeline](https://www.sanity.io/docs/presenting-images)(This is our choose service for this example)
- [Cloudinary](https://cloudinary.com/)
- [Imgix](https://www.imgix.com/)

#### Render an image with Gatsby

- First; on your editor go to the `PizzaList` component on the `gatsby/components` directory
- Import `Img` from `gatsby-image`
  `import Img from 'gatsby-image';`
- Bellow the `pizza toppings` use the `Img` component like this
  `<Img fluid={pizza.image.asset.fluid} alt={pizza.name} />`

  Here we use the `Img` component sending the `fluid` prop and send the `fluid` object that we have available on each `pizza` and for accessibility, we add an `alt` text using the `pizza` name

- Now run your local server and go to the `pizzas` page
- You should see that each pizza have it `images`

Now if you want a different size of the `image` that you receive; you only need to change the value of the `fluid` on the `query` that we did on the `pizza` component also you can get a `fix` value of the image like this:

```js
export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      ...
      image {
        asset {
          fixed(width: 200, height: 200) {
            ...GatsbySanityImageFluid
          }
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}
`;
```

Then on the `PizzaList` component on the `Img` component change the `fluid` prop for a `fixed` prop
`<Img fixed={pizza.image.asset.fluid} alt={pizza.name} />`

You should see the change on your browser if you still have the local server running. The difference is that `fixed image` won't be responsive like the `fluid` one. We are going to choose the `fluid` version so delete all the `fixed image` content.

### Importing data to sanity

Instead of writing all the `pizzas`,`toppings`, etc.. on the `Sanity` dashboard; we will import all the data to `Sanity` using a `gz` file that we put on the `sample-data` directory.

- On your terminal go to the `sanity` directory
- Type the following command:
  `sanity dataset import path_of_your_gz_file name_of_your_dataset`

  If you add `--replace` it will override all data of your `dataset` with the importing one

- Now run your local `sanity` server using: `npm start`
- You should see that your dashboard have a lot more data than before
- Now on another tab of your terminal run your `gatsby` local server using: `npm start`
- On your browser go to the `pizzas` page
- You should see a lot more `pizzas` than before

### Styling our pizza grid with CSS subgrid

Now we are going to work with `CSS` a little bit on the `pizza` page.

- On your editor go to the `PizzaList` component in the `gatsby/components` directory
- Then import `styled` from `styled-components`
- Before the `SinglePizza` component; create a constant call `PizzaGridStyles` as a `div` using the `styled` object
  ```js
  const PizzaGridStyles = styled.div``;
  ```
- Then replace the `div` on the `return` statement of the `PizzaList` component to `PizzaGridStyles`
  ```js
  export default function PizzaList({ pizzas }) {
    return <PizzaGridStyles>...</PizzaGridStyles>;
  }
  ```
- Now on the `PizzaGridStyles` add the following style:

  ```js
  const PizzaGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
  `;
  ```

  - `display: grid;`: We gonna continue using the [css grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
  - `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));`: Here we define the `columns` that we will have with the [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns). Normally you will need to put a size of each column that you want like this:
    `grid-template-columns: 1fr 1fr 1fr 1fr;`

  We don't want to repeat the value all those times so we use the [repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) function that will help us to avoid that repetition telling the value of the repetition and the size that will be repeated. In this case, we tell an `auto-fill`(If the grid container have a define or max size; this will get to you a positive integer that doesn't cause an overflow) value then we tell the variable part of the `repeat` function using the `minmax` function that receives a min and max value where the min will be `300px` and the max will be the entire width of the `grid`

  - `gap: 4rem;`: Define the space between columns
  - `grid-auto-rows: auto auto 500px;`: Here we use the [grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows) that specify the size of the implicit created `grid rows`. At this time we set the `title` of the item to have a value depending on its content and the `toppings` in the next line will have this auto-generated value but the `images` will be `500px` height. But this property will not do anything just yet because we are putting it on the container of all items instead and the actual items are not a direct child of the container

- Now create a new constant call `PizzaStyles`
  ```js
  const PizzaStyles = styled.div``;
  ```
- Then on the return statement of the `SinglePizza` component replace the `div` container to `PizzaStyles`
  ```js
  function SinglePizza({ pizza }) {
    return <PizzaStyles>...</PizzaStyles>;
  }
  ```
- Now add the following style on the `PizzaStyles`
  ```js
  const PizzaStyles = styled.div`
    display: grid;
    /* Take your row sizing not from your pizzaStyles div, but from the PizzaGridStyles grid */
    @supports not (grid-template-rows: subgrid) {
      --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 3;
    grid-gap: 1rem;
    h2,
    p {
      margin: 0;
    }
  `;
  ```
  - `display: grid;`: We gonna continue using the [css grd layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
  - `@supports not (grid-template-rows: subgrid)`: Ask the browser to run the `CSS` rule and if it doesn't work run the rule on that is between the square brackets
  - `--rows: auto auto 1fr;`: Define the `row` variable
  - `grid-template-rows: var(--rows, subgrid);`: We use the [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) to define the actual size of the rows but we don't actually send a value we use the [var](https://developer.mozilla.org/en-US/docs/Web/CSS/var) function that set the value to the variable `rows` it if exists; if not use the `subgrid` property. The [subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) value that will give the value set by `PizzaGridStyles` in the `grid-auto-rows` property(The `subgrid` value for the moment only work on `firefox` that is why is only a fallback value of the property)
  - `grid-row: span 3;`: We use the [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) property to tell the actual size of the row and expand 3 rows
  - `grid-gap: 1rem;`: Add a `gap` between rows
  - Finally, eliminate the `margin` of the `p` and `h2` tag
- Now run your local server and go to the `pizzas` page
- You should see the `pizza` items align and will be responsive

### Statics queries and building the Toppings filter

At this stage of the example, we want to create a `topping` filter that has all the `toppings` names and the count of the `pizzas` that have this `topping` and each `topping` will be a clickable link that will redirect you to a `topping` specific page.

- First, create a new file on the `gatsby/component` directory call `ToppingFilter.js`
- Import `React` from `react`: `import React from 'react';`
- Export a function call `ToppingFilter` with the following content:
  ```js
  export default function ToppingFilter() {
    return <p>Toppings</p>;
  }
  ```
- Go to the `pizza` page component
- Import `ToppingFilter`: `import ToppingFilter from '../components/ToppinsFilter';`
- Add the `ToppingFilter` component before the `PizzaList` component
  ```js
  export default function PizzasPage({ data }) {
    const pizzas = data.pizzas.nodes;
    return (
      <>
        <ToppingFilter />
        <PizzaList pizzas={pizzas} />
      </>
    );
  }
  ```
- Run your local server using: `npm start`
- Go to the `pizzas` page
- You should see the word `Toppings` at the top of all `pizzas`
- Now we need to add a `static` query. If you remember we did a `query` on the `pizza` page component and that is a `page` query that is a `dynamic` query; this means that you can send variables that affect the result of the query but if you want to do a query anywhere else that is not a page you will need to use a `static` query that is a query that doesn't receive variables and your run it wherever you want using a `react` hook. Now on the `ToppingFilter` file import the `useStaticQuery` from `gatsby`
- Then inside of the `ToppingFilter` function use the `useStaticQuery` storing the resolve on a constant call `toppings` result of a destructuring of the value of the query that we are going to add
  ```js
  export default function ToppingFilter() {
    const { toppings } = useStaticQuery();
  }
  ```
- Import `graphql` from `gatsby`: `import { graphql, useStaticQuery } from 'gatsby';`
- Use `graphql` on the `useStaticQuery` hook
  ```js
  export default function ToppingFilter() {
    const { toppings ] = useStaticQuery(graphql``);
  }
  ```
- Now inside of the `graphql` backtick add a query that bring all `toppings` with their `name`, `id` and the `vegetarian` value and call that query `toppings` instead of `allSanityTopping`
  ```js
  export default function ToppingFilter() {
    const { toppings } = useStaticQuery(graphql`
      query {
        toppings: allSanityTopping {
          nodes {
            name
            id
            vegetarian
          }
        }
      }
    `);
  }
  ```
- In the same query bring all `pizzas` and destructure the value to have a constant call `pizzas`
  ```js
  export default function ToppingFilter() {
    const { toppings, pizzas } = useStaticQuery(graphql`
      query {
        toppings: allSanityTopping {
          nodes {
            name
            id
            vegetarian
          }
        }
        pizzas: allSanityPizza {
          nodes {
            toppings {
              name
              id
            }
          }
        }
      }
    `);
  }
  ```
- Now we need to count how many `pizzas` have each `topping`. Before the `ToppingFilter` function create a function call `countPizzasInToppings` that recive the `pizzas` as a parameter
  `function countPizzasInToppings(pizzas) {}`
- After the query create a constant call `toppingsWithCounts` and use the `countPizzasInToppings` function as it value sending the result of the `pizzas` (Need to send `pizzas.nodes`)

  ```js
  export default function ToppingFilter() {
    const { toppings, pizzas } = useStaticQuery(graphql`...`);

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  }
  ```

- Then on the `countPizzasInToppings` return a `map` of each `pizza topping`
  ```js
  function countPizzasInToppings(pizzas) {
    return pizzas.map((pizza) => pizza.toppings);
  }
  ```
- Since a `pizza` can have more than one `topping` the `map` will return to us an `array` of `arrays` but we just want just a big `array` so we will use the [flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) function that will help us to exatcly that
  ```js
  function countPizzasInToppings(pizzas) {
    return pizzas.map((pizza) => pizza.toppings).flat();
  }
  ```
- Now we need to count how many times each `topping` repeat and for this we are going to use a `reduce` function. A `reduce` function recive 2 arguments a function and a initial value for a `acumulator`
  ```js
  function countPizzasInToppings(pizzas) {
    return pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {}, {});
  }
  ```
  The `acc` parameter is short for `accumulator` that is the value that we are going to return in each iteration and on each iteration will have the same value that you return on the previews iteration except for the first time that will have the value that you send as a second parameter to the `reduce` function The `accumulator` will have the following structure
  ```js
  {
    id: topping.id,
    name: topping.name,
    count: 0,
  }
  ```
- Now create a constant call `existingTopping` that will be equal to `acc[topping.id]`

```js
function countPizzasInToppings(pizzas) {
  return pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      const existingTopping = acc[topping.id];
    }, {});
}
```

This will add the value of a existing topping in the `acumulator` and if it doesn't exist will be `undefined`

- Now create a condition that ask if the `acc` have a value and add one to the `count` property of the `acc` if it have a value
  ```js
  function countPizzasInToppings(pizzas) {
    return pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {
        const existingTopping = acc[topping.id];
        if (existingTopping) {
          existingTopping.count += 1;
        }
      }, {});
  }
  ```
  This will sum one to the `count` property because we match a existing `topping` on the accumulator
- Now create an `else` statement for the other cases where you create the structure of the `topping` inside of the `acc`
  ```js
  function countPizzasInToppings(pizzas) {
    return pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {
        const existingTopping = acc[topping.id];
        if (existingTopping) {
          existingTopping.count += 1;
        } else {
          acc[topping.id] = {
            id: topping.id,
            name: topping.name,
            count: 1,
          };
        }
      }, {});
  }
  ```
- Now return the `acc`
  ```js
  function countPizzasInToppings(pizzas) {
    return pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {
        const existingTopping = acc[topping.id];
        if (existingTopping) {
          existingTopping.count += 1;
        } else {
          acc[topping.id] = {
            id: topping.id,
            name: topping.name,
            count: 1,
          };
        }
        return acc;
      }, {});
  }
  ```
- Then we want to `sort` the `toppings` from the `topping` that have more `pizzas` to the `topping` that have less so instead of return the `pizzas` we are going to create a constant call `count`

  ```js
  function countPizzasInToppings(pizzas) {
    const counts = pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {
        const existingTopping = acc[topping.id];
        if (existingTopping) {
          existingTopping.count += 1;
        } else {
          acc[topping.id] = {
            id: topping.id,
            name: topping.name,
            count: 1,
          };
        }

        return acc;
      }, {});
  }
  ```

- Bellow the `counts` constant create another constant call `sortedToppings` and make it value an `array` of values to use the `sort` function

  ```js
  function countPizzasInToppings(pizzas) {
    const counts = pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {...}, {});

    const sortedToppings = Object.values(counts).sort(
      (a, b) => b.count - a.count
    );
  }
  ```

- Return the `sortedToppings`

  ```js
  function countPizzasInToppings(pizzas) {
    const counts = pizzas
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {...}, {});

    const sortedToppings = Object.values(counts).sort(
      (a, b) => b.count - a.count
    );
  }

  return sortedToppings;
  ```

- Now add the following block to the `return` statement

  ```js
  export default function ToppingFilter() {
    const { toppings, pizzas } = useStaticQuery(graphql`
    query {...}
  `);

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

    return (
      <>
        {toppingsWithCounts.map((topping) => (
          <Link to={`/topping/${topping.name}`} key={topping.id}>
            <span className="name">{topping.name}</span>
            <span className="count">{topping.count}</span>
          </Link>
        ))}
      </>
    );
  }
  ```

  It will loop over the `toppingsWithCounts` then for each `topping` will have a `link` that encloses the `name` and the `pizza count`. We use the `pizza` name on the URL of the individual `topping` instead of the `slug` but for the moment this URL will not work; in another section, we will create the `single topping` page. Make sure to use the same `classeName` as the example

- Import `styled` from from `styled-components`
  `import styled from 'styled-components';`
- Before the `countPizzasInToppings` function create a constant call `ToppingsStyles` and use a `div` as it value

```js
const ToppingsStyles = styled.div``;
```

- Add the `ToppingsStyles` on the return statement

  ```js
  export default function ToppingFilter() {
    const { toppings, pizzas } = useStaticQuery(graphql`
    query {...}
  `);

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

    return (
      <>
        {toppingsWithCounts.map((topping) => (
          <Link to={`/topping/${topping.name}`} key={topping.id}>
            <span className="name">{topping.name}</span>
            <span className="count">{topping.count}</span>
          </Link>
        ))}
      </>
    );
  }
  ```

  It will loop over the `toppingsWithCounts` then for each `topping` will have a `link` that encloses the `name` and the `pizza count`. We use the `pizza` name on the URL of the individual `topping` instead of the `slug` but for the moment this URL will not work; in another section, we will create the `single topping` page. Make sure to use the same `classeName` as the example

- Import `styled` from from `styled-components`
  `import styled from 'styled-components';`
- Before the `countPizzasInToppings` function create a constant call `ToppingsStyles` and use a `div` as it value

```js
const ToppingsStyles = styled.div``;
```

- Add the `ToppingsStyles` on the return statement

  ```js
  export default function ToppingFilter() {
    const { toppings, pizzas } = useStaticQuery(graphql`
    query {...}
  `);

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

    return (
      <>
        {toppingsWithCounts.map((topping) => (
          <Link to={`/topping/${topping.name}`} key={topping.id}>
            <span className="name">{topping.name}</span>
            <span className="count">{topping.count}</span>
          </Link>
        ))}
      </>
    );
  }
  ```

  It will loop over the `toppingsWithCounts` then for each `topping` will have a `link` that encloses the `name` and the `pizza count`. We use the `pizza` name on the URL of the individual `topping` instead of the `slug` but for the moment this URL will not work; in another section, we will create the `single topping` page. Make sure to use the same `classeName` as the example

- Import `styled` from from `styled-components`
  `import styled from 'styled-components';`
- Before the `countPizzasInToppings` function create a constant call `ToppingsStyles` and use a `div` as it value

```js
const ToppingsStyles = styled.div``;
```

- Add the `ToppingsStyles` on the return statement

  ```js
  export default function ToppingFilter() {
    const { toppings, pizzas } = useStaticQuery(graphql`
    query {...}
  `);

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

    return (
      <ToppingsStyles>
        {toppingsWithCounts.map((topping) => (
          <Link to={`/topping/${topping.name}`} key={topping.id}>
            <span className="name">{topping.name}</span>
            <span className="count">{topping.count}</span>
          </Link>
        ))}
      </ToppingsStyles>
    );
  }
  ```

- Now add the following:
  ```js
  const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
  `;
  ```
  We are going to use (flex-box)[https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox] in this case instead of `grid`. To `wrap` the element on the with of the container it use [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) then we add a `gap` between elements and a little space on the button to separate each line
- Then add the following style for the links
  ```js
  const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 0 1rem;
      align-items: center;
      padding: 5px;
      background: var(--grey);
      border-radius: 2px;
    }
  `;
  ```
  So inside of the `anchor`, we need to use `grid` because we need elements side by side. Then we create the columns where the first `column` will `auto` adjust to the with the size of the `topping` name and the `pizza` count will adjust with the space that left on the `anchor`. We need some space at the side of the elements and not on the bottom or top. We use a `padding` for the elements surrounding and background to the `anchor`. From `flex` we align the element to the `center` thing that will be helpful when the size of the `fonts` get smaller and a `border-radius`
- Now to the `count` class add the following
  ```js
  const ToppingsStyles = styled.div`
    ...
    a {...}
    .count {
      background: white;
      padding: 2px 5px;
    }
  `;
  ```
  - `background: white;`: Add a `background` to the `pizza` count number
  - `padding: 2px 5px;`: Add some spaces on the surrounding of the number inside of the `count` container. This is why we add previously the `align-items` so even having these spaces the elements will be aligned to the center
- Finally add some style to the `active` state of the `anchor`
  ```js
  const ToppingsStyles = styled.div`
    ...
    a {...}
    .count {...}
    .active {
      background: var(--yellow);
    }
  `;
  ```
  We just add a `yellow` background when an `anchor` is on the `active` state

## Module 7: Making Gatsby Dynamic

In this module, we will be working with the dynamic parts of the site such as the single pizza and toppings pages that will need a dynamic page generation so we don't need to create a file for every single page that we have.

### Dynamically creating pages with gatsby-node

We will be working on the `pizzas` page and as you may notice on each title you have a link that goes to an URL that at this moment doesn't work. These URLs are what we call a single page that is a page that will contain the information of a single item in this case one `pizza`.

To do this we will be using another `gatsby` specific file call [gatsby-node](https://www.gatsbyjs.com/docs/node-apis/); like the other `gatsby-` files we hook to a certain moment of the build cycle to do some things like dynamically create pages. We will be using the `createPages` extension point(can be called a hook) that is called after the initial sourcing of data(After all our `sanity` data is pull to our `graphQL` API) so you can `query` data to create pages.

- First; on the root of the `gatsby` directory create a file called `gatsby-node.js`
- Now on the newly created file export a function call `createPages`(`gatsby` specific function) that will be an `async` function
  `export async function createPages() {}`
- Now add a `console.log` with a message inside of the `createPages` function
- Go to your terminal a start you local server using: `npm start`
- You should see the message that you add on the `createPages` function on your local server logs
- Now delete the `console.log`
- Add `params` as a param of the `createPages` function
  `export async function createPages(params) {}`

  `Gatsby` will send to you a set of params by default that are `graphql` and `actions` inside of `params`

  - `graphql`: Help us to `query` data
  - `actions`: Help us to create `pages`

- Now at the top of the file import `path` from `path`
  `import path from 'path';`
- Now before the `createPages` function; create a function call `turnPizzasIntoPages` that will also be an `async` function
  `async function turnPizzasIntoPages() {}`

  Since we are going to create dynamically `pizzas`, `toppings` and `slidemasters` pages we are going to separate in functions each of then so will be easy to see and debug if is an issue

- The `turnPizzasIntoPages` will recive `params` but we will destructuring to `graphql` and `actions`
  `async function turnPizzasIntoPages({ graphql, actions }) {}`
- Now that we have a function for the `pizzas` we need to create a `template` that we will render all the `pizza` information. On the `gatsby/templates` directory create a file call `Pizzas.js`(Since this is a `template` and can be used multiple times we put the uppercase on the name). You can store this file in the `components` directory but it will be easier to search the `templates` if we got then in it own directory
- Inside of the newly created file import `React`
  `import React from 'react';`
- Then export a function call `SinglePizzaPage` with some content
  ```js
  export default function SinglePizzaPage() {
    return <p>Single Pizza</p>;
  }
  ```
- Now go back to the `gatsby-node` file and inside of the `turnPizzasIntoPages` function create a constant call `pizzaTemplate` that will have the `template` that we just created. To resolve the `template` file we need to use a `node` module call `path` that we already import before
  ```js
  async function turnPizzasIntoPages({ graphql, actions }) {
    const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
  }
  ```
  The `path` module comes directly from `node` no need to install any extra module
- Then on the `createPages` function use the `turnPizzasIntoPages` function sending `params` to it(remember that `turnPizzasIntoPages` is an `async` function)
  ```js
  export async function createPages(params) {
    await turnPizzasIntoPages(params);
  }
  ```
  The `turnPizzasIntoPages` will `query` data and create the `pages` and that will take a couple os seconds that is why is an `async` function.
- Inside of the `turnPizzasIntoPages` function add the following `graphQL` query
  ```js
  async function turnPizzasIntoPages({ graphql, actions }) {
    const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
    const { data } = await graphql(`
      query {
        pizzas: allSanityPizza {
          nodes {
            name
            slug {
              current
            }
          }
        }
      }
    `);
  }
  ```
  Since we are on the `node` API we need to put `await` before the `graphql` function; then we add the `query` to get all `pizzas`
- Now we need to loop on every `pizza` using the `forEach` function to create the page

  ```js
  async function turnPizzasIntoPages({ graphql, actions }) {
    const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
    const { data } = await graphql(`...`);

    data.pizzas.nodes.forEach((pizza) => {});
  }
  ```

- Then use `createPage` function of the `actions` param

  ```js
  async function turnPizzasIntoPages({ graphql, actions }) {
    const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
    const { data } = await graphql(`...`);

    data.pizzas.nodes.forEach((pizza) => {
      actions.createPage();
    });
  }
  ```

- Inside of the `createPage` function add the following configuration object

  ```js
  async function turnPizzasIntoPages({ graphql, actions }) {
    const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
    const { data } = await graphql(`...`);

    data.pizzas.nodes.forEach((pizza) => {
      actions.createPage({
        path: `pizza/${pizza.slug.current}`,
        component: pizzaTemplate,
      });
    });
  }
  ```

  - `path`: The URL of the new page(This is what we defined on the links)
  - `component`: This will be the component that will be called when you got a URL match

- Restart your local server(Every time you make an update in the `gatsby-node` file; you will need to restart your server)
- Go to the `pizzas` page on your browser
- Click on one of the `pizza` titles
- You should see the message that you put on the `Pizza` template
- Now we are going to pass data to the template from the `gatsby-node` file and for this we use the `context` property
  Inside of the `createPage` function add the following configuration object

  ```js
  async function turnPizzasIntoPages({ graphql, actions }) {
    const pizzaTemplate = path.resolve("./src/templates/Pizza.js");
    const { data } = await graphql(`...`);

    data.pizzas.nodes.forEach((pizza) => {
      actions.createPage({
        path: `pizza/${pizza.slug.current}`,
        component: pizzaTemplate,
        context: {
          slug: pizza.slug.current,
        },
      });
    });
  }
  ```

- Restart your local server
- Go to one of the single `pizza` pages
- Open the browser inspector
- Go to the `components` tap
- Search for the `SinglePizzaPage` component and click on it
- On the `props` side you will see a `pageContext` prop with the information that you put on the `context` property before(The is a `pathContext` also but this is deprecated)
- Now on the `Pizza.js` template import `graphql` from `gatsby`
  `import { graphql } from 'gatsby';`
- Add a regular a `graphQL` query that use `sanityPizza` instead of all `allSanityPizza` that bring the `name`, `id`, `image` and `toppings` from a `pizza`

  ```js
  export default function SinglePizzaPage() {
    return <p>Single Pizza</p>;
  }

  export const query = graphql`
    query {
      pizza: sanityPizza {
        name
        id
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        toppings {
          name
          id
          vegetarian
        }
      }
    }
  `;
  ```

  But actually, this won't work because we need to specify the `pizza` that we need the information and we have the `slug` available to help us to make the `query` dynamic

- Add the following on the `query`

  ```js
  export default function SinglePizzaPage() {
    return <p>Single Pizza</p>;
  }

  export const query = graphql`
    query($slug: String!) {
      pizza: sanityPizza(slug: { current: { eq: $slug } }) {...}
  `;
  ```

  - `($slug: String!)`: The `query` will expect that a `slug` will be pass; the `slug` will be a `string` and it will be `required`(The `!` at the en make it `required`)
  - `(slug: { current: { eq: $slug } })`: We tell the `query` that we want a `single pizza` that inside of the `slug` property have an object with a `current` property that will be `equal` to the `slug` that we pass

- Now go to your browser to one of the `single pizza` pages
- Open the browser inspector
- Go to the `component` tab
- Search the `SinglePizza` component
- You should see on the `props` the resolve of the `pizza` query

#### Notes:

- We can have the `pizza` query of the `Pizza` template together with the `gatsby-node` template and pass it via `context` but we intend to maintain it separate to be easier to see and debug

### Templating and styling the single pizza page

Now we are going to use and style the `single pizza` page.

- First on the `Pizza.js` file in the `gatsby/templates` directory; add `data: pizza` as a prop of the `SinglePizzaPage` component
  `export default function SinglePizzaPage({ data: { pizza } }) {...}`
- Now eliminate the current content that we `return` and add a `react` fragment
  ```js
  export default function SinglePizzaPage({ data: { pizza } }) {
    return <></>;
  }
  ```
- Then import `Img` from `gatsby-image`
  `import Img from 'gatsby-image';`
- Add the `Img` component to the return content sending the `pizza` image as a `fluid` prop
  ```js
  export default function SinglePizzaPage({ data: { pizza } }) {
    return (
      <>
        <Img fluid={pizza.image.asset.fluid} />
      </>
    );
  }
  ```
- Now add another container `div` with an `h2` with the class `mark`(make sure you use this class) for the `pizza` name
  ```js
  export default function SinglePizzaPage({ data: { pizza } }) {
    return (
      <>
        <Img fluid={pizza.image.asset.fluid} />
        <div>
          <h2 className="mark">{pizza.name}</h2>
        </div>
      </>
    );
  }
  ```
- Now loop throw the `toppings` using a `li` tag for each `topping` name
  ```js
  export default function SinglePizzaPage({ data: { pizza } }) {
    return (
      <>
        <Img fluid={pizza.image.asset.fluid} />
        <div>
          <h2 className="mark">{pizza.name}</h2>
          {pizza.toppings.map((topping) => (
            <li key={topping.id}>{topping.name}</li>
          ))}
        </div>
      </>
    );
  }
  ```
- Import `styled` from `styled-components`
  `import styled from 'styled-components';`
- Create a constant call `PizzaGrid` using a `div` from the `styled` object
  ```js
  const PizzaGrid = styled.div``;
  ```
- Add the following style to the `PizzaGrid` constant
  ```js
  const PizzaGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  `;
  ```
  - `display: grid;`: Use `css grid layout`
  - `grid-gap: 2rem;`: Add a `gap` between elements
  - `grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));`: Add columns for the content that will automaclly take sizes depending the space of the container with a minimum sizes of `400px` and maximum `1fr`
- Add `PizzaGrid` as a container of the returning content
  ```js
  export default function SinglePizzaPage({ data: { pizza } }) {
    return (
      <PizzaGrid>
        <Img fluid={pizza.image.asset.fluid} />
        <div>
          <h2 className="mark">{pizza.name}</h2>
          {pizza.toppings.map((topping) => (
            <li key={topping.id}>{topping.name}</li>
          ))}
        </div>
      </PizzaGrid>
    );
  }
  ```

### Dynamically create Toppings Pages

Just like we did with the `single pizza` page; we need to create a `single page` for each `topping` so when we click on a `topping` in the filter on the `pizza` page will only show the `pizzas` that have that specific `topping`.

- First; on the `gatsby-node` file in the root of the `gatsby` directory; create a function call `turnToppingsIntoPages` that will be an `async` function that destructure it parameter to recive `graphql` and `actions`
  `async function turnToppingsIntoPages({ graphql, actions }) {}`
- Now on the `createPages` function use the `turnToppingsIntoPages` function but need to use a `Promise.all` to run both of the functions part of the `createPages` function
  ```js
  export async function createPages(params) {
    await Promise.all([
      turnPizzasIntoPages(params),
      turnToppingsIntoPages(params),
    ]);
  }
  ```
  We need to use `Promise.all` because is we do it separately we will have to wait for the first function that you define to do the other but this thing is not related so we can run at the same time so we use this function that receive an array of `promises` and run it all; then wait to all promises to be resolve
- Get back to the `turnToppingsIntoPages` function and create a constant call `toppingTemplate` and add the `path` of the template but we don't need to create a new file we will use the `pizza.js` file on the `pages` directory
  `const toppingTemplate = path.resolve('./src/pages/pizzas.js');`
- Now add a `query` to get all `toppings` using the `graphql` parameter
  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve("./src/pages/pizzas.js");
    const { data } = await graphql(`
      query {
        toppings: allSanityTopping {
          nodes {
            name
            id
          }
        }
      }
    `);
  }
  ```
- Then using the `data` constant we loop throw each `topping node` using the `forEach` function

  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve("./src/pages/pizzas.js");
    const { data } = await graphql(`...`);

    data.toppings.nodes.forEach((topping) => {});
  }
  ```

- Now add use the `createPage` function from the `action` parameter

  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve("./src/pages/pizzas.js");
    const { data } = await graphql(`...`);

    data.toppings.nodes.forEach((topping) => {
      actions.createPage();
    });
  }
  ```

- Send the configuration object of the `createPage` function beginning with the `path` with the url that we define before on our `topping` filter in the `pizza` page(`topping/topping_name`)

  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve("./src/pages/pizzas.js");
    const { data } = await graphql(`...`);

    data.toppings.nodes.forEach((topping) => {
      actions.createPage({
        path: `topping/${topping.name}`,
      });
    });
  }
  ```

- Now we add the `component` that will use the `page` i n this case we already have it in the `toppingTemplate` constant

  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve('./src/pages/pizzas.js');
    const { data } = await graphql(`...`);

    data.toppings.nodes.forEach((topping) => {
       actions.createPage({
         path: `topping/${topping.name}`
         component: toppingTemplate,
       });
    });
  }
  ```

- Then we need to send the `topping` name to the page so we have available that information. We achieve this using the `context` property

  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve('./src/pages/pizzas.js');
    const { data } = await graphql(`...`);

    data.toppings.nodes.forEach((topping) => {
       actions.createPage({
         path: `topping/${topping.name}`
         component: toppingTemplate,
         context: {
            topping: topping.name,
          }
       });
    });
  }
  ```

- Now we need that the `query` of the `pizza` page filter the `pizzas` depending the `topping` that we click. On the `pizza.js` file in the `pages` directory update the `query` as is show here:
  ```js
  export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {...}
  `;
  ```
  - `($topping: [String])`: Receive a variable call `topping` that is an `array` of `strings` and is not require.
  - `filter`: Filter the data depending on a condition
  - `toppings: { elemMatch: { name: { in: $topping } } }`: On the `toppings` bring all the elements that match on it `name` property with the `topping` variable
- Now start your local server
- Go to the `pizza` page
- Click on one of the `toppings` that are on the filter
- You should see that the amount of `pizza` that shows bellow change depending on the `topping` that you click
- If you need more case sensitive filter you can use a [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). But you can't directly write it into the `query` or use a template string to add the `regex` on the `query` since this is part de `graphQL`; you will need to send it via `context`. On the `gatsby-node` file in the `context` property of the `turnToppingsIntoPages` function add a property call `toppingRegex` with the following rule(case insensitive of the `topping` name)

  ```js
  async function turnToppingsIntoPages({ graphql, actions }) {
    const toppingTemplate = path.resolve('./src/pages/pizzas.js');
    const { data } = await graphql(`...`);

    data.toppings.nodes.forEach((topping) => {
       actions.createPage({
         path: `topping/${topping.name}`
         component: toppingTemplate,
         context: {
            topping: topping.name,
            toppingRegex: `/${topping.name}/i`,
          }
       });
    });
  }
  ```

- Now modify the `query` on the `pizza.js` file
  ```js
  export const query = graphql`
  query PizzaQuery($toppingRegex: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {...}
  `;
  ```
  - `($toppingRegex: String)`: Receive a `toppingRegex` variable that is a `string` and is not required
  - ` filter`: Filter the data depending on a condition
  - `{ toppings: { elemMatch: { name: { regex: $toppingRegex } } } }`: On the `toppings` bring all the elements that match on it `name` property with the `regex` that we send
- Restart your local server
- Go to the `pizzas` page
- Click on one of the `toppings`
- The `pizzas` should change depending on the `topping` that you choose
- We need to highlight the `link` of the current page. So on the `ToppingsFilter` component update the `ToppingsStyles` rule regarding to the `.active` class to `&[aria-current='page']` page
  ```js
  const ToppingsStyles = styled.div`
    ...
    a {...}
      &[aria-current='page'] {
        background: var(--yellow);
      }
    }
  `;
  ```
  `Gatsby` by default put an `aria-current` property to the `link` that match with the current page and we take advantage of that
- Finally we need to add a `All` link that represent that is going to show all the `pizza` so on the return content before the `topping map` add the following
  ```js
  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping) => (...))}
    </ToppingsStyles>
  );
  ```
- Now go to the `pizzas` page
- You should have an `All` option and when you click on it; will be highlight and will show all `pizzas`

### Sourcing data form an external API

So far all the data of the website live on `sanity` but if we need to get data from an external API and still have all the benefits of `gatsby`; we can do this first by bringing the data to our ` gatsby graphQL` API so we do the `query` and the `gatsby-node` file can help us with these.

We are going to be `sourcing nodes`. `Sourcing` is to put data on the `gatsby` API and `nodes` are the piece of data.

- First; on your editor go to the `gatsby-node` file
- Export a `async` function call [sourceNodes](https://www.gatsbyjs.com/docs/node-apis/#sourceNodes) before the `createPages` function that recive a `params` value
  `export async function sourceNodes(params) {}`

  This function will run before the `createPages` function because we need to have all `nodes` available before the `pages` are created

- Create another `async` function call `fetchBeersAndTurnIntoNodes` that recive `actions`, `createNodeId` and `createContentDigest` as destructure values
  `async function fetchBeersAndTurnIntoNodes({actions, createNodeId, createContentDigest}) {}`
- On the `sourceNodes` function add a `Promise.all` that recive the `fetchBeersAndTurnIntoNodes` sending `params` as it parameter
  ```js
  export async function sourceNodes(params) {
    await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
  }
  ```
  We added to the `Promise.all` because if we want to add something on the future will be a lot ease for us
- Since we need the `fetch` function and this function doesn't exist on `node`; we need the `isomorphic-fetch` package so at the top of the file import `fetch` from `isomorphic-fetch`
  `import fetch from 'isomorphic-fetch';`
- Now inside of the `fetchBeersAndTurnIntoNodes` function create a constant call `res` that will recive the `response` of the `fetch` function
  ```js
  async function fetchBeersAndTurnIntoNodes({
    actions,
    createNodeId,
    createContentDigest,
  }) {
    const res = await fetch();
  }
  ```
- We are going to be using the data from an `API` from https://sampleapis.com/
- On this page; search for `beers` and click on `API`
- Choose the `ale` beers(we are going to use this in this example)
- You will be redirected to a `JSON` with hundreds of `beers`(We are not particularly worried about the number of `beers` because this will be `fetch` on build time)
- Copy the URL and put it on the `fetch` function inside of the `fetchBeersAndTurnIntoNodes` function
  ```js
  async function fetchBeersAndTurnIntoNodes({
    actions,
    createNodeId,
    createContentDigest,
  }) {
    const res = await fetch("https://sampleapis.com/beers/api/ale");
  }
  ```
- Now create a constant call `beers` that recive the transformation to a `JSON` of `res`
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
  }
  ```
- Then we need to loop throw each `beer` using a `for of`
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {}
  }
  ```
- We need to create a `node` for each `beer` so first create a variable call `nodeMeta` that will recive an object
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {}
    }
  }
  ```
  We need to set some `metadata` about the data that we will turn into a `node`
- We need to set an `id` of the `node` but if you check the `beer` data we don't have an `id` so we need to create it but we have the `createNodeId` helper that we recive as a parameter. We will use `beer-name_of_beer` as `id`
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
   const res = await fetch('https://sampleapis.com/beers/api/ale');
   const beers = await res.json();
   for (const beer of beers) {
     const nodeMeta = {
       id: createNodeId(`beer-${beer.name}`),
     }
   }
  }
  ```
- If this was a relational data like if the `beer` have a parent `beer` you can linked to another `node` using the `parent` property but in this case we don't have such thing as parent `beer`
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {
        id: createNodeId(`beer-${beer.name}`),
        parent: null,
      }
    }
  }
  ```
- A lot like the `parent` property we have a `children` property to relate the `nodes` but in this case, we also don't have any
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {
        id: createNodeId(`beer-${beer.name}`),
        parent: null,
        children: [],
      }
    }
  }
  ```
- Also we have an `internal` property that recive an object
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {
        id: createNodeId(`beer-${beer.name}`),
        parent: null,
        children: [],
        internal: {}
      }
    }
  }
  ```
- Inside of the `internal` object we define the `type` of the `node`. At this case we will put the `type` as `Beer`
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {
        id: createNodeId(`beer-${beer.name}`),
        parent: null,
        children: [],
        internal: {
          type: 'Beer',
        }
      }
    }
  }
  ```
  This will define our `query` name
- Then add the `mediaType` property that will help other `plugins` that are looking for specific type of media this will be help then to find it. In this case is a `JSON`
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {
        id: createNodeId(`beer-${beer.name}`),
        parent: null,
        children: [],
        internal: {
          type: 'Beer',
          mediaType: 'application/json',
        }
      }
    }
  }
  ```
- We need to specify the `contentDigest` that internally `gatsby` know that the data change
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    const res = await fetch('https://sampleapis.com/beers/api/ale');
    const beers = await res.json();
    for (const beer of beers) {
      const nodeMeta = {
        id: createNodeId(`beer-${beer.name}`),
        parent: null,
        children: [],
        internal: {
          type: 'Beer',
          mediaType: 'application/json',
          contentDigest: createContentDigest(beer)
        }
      }
    }
  }
  ```
- Finally use the `createNode` of the `actions` object with the data of the `beer` and the `metadata` object as part of the same object as a parameter
  ```js
  async function fetchBeersAndTurnIntoNodes({...}) {
    ...
    for (const beer of beers) {...}
    actions.createNode({
      ...beer,
      ...nodeMeta,
    });
  }
  ```
- Now restart your local server and go to the `graphQL` playground
- You should see that you have an `AllBeer` and `beer` queries on the explorer

### Query, displaying and styling the beers page

Now we are going to be working with the `beers` page since we already have the information available on the application.

- First; we need to `query` the data on the page so go to the `beer.js` file and import `graphql` from `gatsby`
  `import { graphql } from 'gatsby';`
- Bellow of the `BeersPage` component export a constant call `query` that its value will be the `query` result
  ```js
  export const query = graphql``;
  ```
- Now make a `query` and called `beers` that bring the `id`, `name`, `price`, `rating`: { `average`, `reviews` }, `image`
  ```js
  export const query = graphql`
    query BeerQuery {
      beers: allBeer {
        nodes {
          id
          name
          price
          rating {
            average
            reviews
          }
          image
        }
      }
    }
  `;
  ```
- Now add the `data` prop to the `BeersPage` component
  `export default function BeersPage({ data }) {}`
- Extract the `nodes` from the data prop
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (..);
  }
  ```
- Delete the current value with of the return statement
- Add an `h2` with the `className` of `center` and add the following title
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
      </>
    );
  }
  ```
- Now we need to `loop` throw each `beer`; so make a `div` and add the `map` function inside of it
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>{beers.map((beer) => {})}</div>
      </>
    );
  }
  ```
- Inside of the `map` function return a `div` with a `key` that will be the `beers` id
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            return <div key={beer.id}></div>;
          })}
        </div>
      </>
    );
  }
  ```
- Add `image` tag that the `src` will be the `image` property of the `beer` and the `alt` will be the `beer` name
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
  Since this `images` are hosted outside of `gatsby` we won't use the `gatsby-images` component but fi you want to use it you have to download the `images` then `source` then to `gatsby`
- Bellow the `image` tag; add an `h3` tag with the `beer` name
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- Bellow the `h3` we need to add the `price` of the `beer`
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {beer.price}
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- We need to add the `rating` but first we need to know what is the actual `rating` out of five. If you see we have a decimal value on the `beers` object so we will `round` that value to the closest integer value. Before the return statement inside of the `map` function use the `round` function from `Math` to find the `rating`
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            const rating = Math.round(beer.rating.average);
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {beer.price}
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- Then we use a `p` tag and inside of it `repeat` the start emoji using the `rating` value
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            const rating = Math.round(beer.rating.average);
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {beer.price}
                <p>{`⭐`.repeat(rating)}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- Now we need to show the rest of the starts that are not part of the actual `rating`. Bellow the start rating add a `span` tag and inside repeat the start emoji 5 minus the `rating` value times and add some inline style to give those starts a `gray` color
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            const rating = Math.round(beer.rating.average);
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {beer.price}
                <p>
                  {`⭐`.repeat(rating)}
                  <span style={{ filter: `grayscale(100%)` }}>
                    {`⭐`.repeat(5 - rating)}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- Put a `title` on the `p` tag to make this block more accessible telling the user the `rating`
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            const rating = Math.round(beer.rating.average);
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {beer.price}
                <p title={`${rating} out of 5 stars`}>
                  {`⭐`.repeat(rating)}
                  <span style={{ filter: `grayscale(100%)` }}>
                    {`⭐`.repeat(5 - rating)}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- Inside of the `p` that we will give the number of people that actually review the `beer` so add a `span` with the `reviews` property as it content
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <div>
          {beers.map((beer) => {
            const rating = Math.round(beer.rating.average);
            return (
              <div key={beer.id}>
                <img src={beer.image} alt={beer.name} />
                <h3>{beer.name}</h3>
                {beer.price}
                <p title={`${rating} out of 5 stars`}>
                  {`⭐`.repeat(rating)}
                  <span style={{ filter: `grayscale(100%)` }}>
                    {`⭐`.repeat(5 - rating)}
                  </span>
                  <span>({beer.rating.reviews})</span>
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  ```
- Now we can add some styling to the page. Import `styled` from `styled-components`
  `import styled from 'styled-components';`
- Then create a constant call `BeerGridStyle` that is a `styled.div`
  ```js
  const BeerGridStyle = styled.div``;
  ```
- Replace the `div` that enclose the `map` function with `BeerGridStyle`
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <BeerGridStyle>
          {beers.map((beer) => {...})}
        </BeerGridStyle>
      </>
    );
  }
  ```
- Then add the folloing style to the `BeerGridStyle`
  ```js
  const BeerGridStyle = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `;
  ```
  As we see before this will use the `grid` add a space between columns and define the columns depending on the sizes of the container
- Create another constant call `SingleBeerStyles` that is a `styled.div`
  ```js
  const SingleBeerStyles = styled.div``;
  ```
- Replace the `div` inside of the return statement of the `map` function with `SingleBeerStyles`
  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <h2 className="center">
          We have {beers.length} Beers available. Dine in only!
        </h2>
        <BeerGridStyle>
          {beers.map((beer) => {
            return <SingleBeerStyles key={beer.id}>...</SingleBeerStyles>;
          })}
        </BeerGridStyle>
      </>
    );
  }
  ```
- Add the following style to `SingleBeerStyles`
  ```js
  const SingleBeerStyles = styled.div`
    border: 1px solid var(--grey);
    padding: 2rem;
    text-align: center;
  `;
  ```
  This will put a gray border to each element and give some space between the elements inside of the container of each beer and the borders and align everything to the center
- Then add the following style for the `images` inside of `SingleBeerStyles`
  ```js
  const SingleBeerStyles = styled.div`
    border: 1px solid var(--grey);
    padding: 2rem;
    text-align: center;
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
      display: grid;
      align-items: center;
      font-size: 10px;
    }
  `;
  ```
  We define the actual size of the `image` but in some cases that image will be stretch so, we use the `object-fit` with `contain` so the `image` will always fit the container regardless of its size. Sometimes some of the `images` will not show up and only will be the name of the `image` so will need to give the size of the letters; along to the center and us `grid`.

## Module 8: Page and filtering

On this module we will be working with `pagination` so instead of bring all the information from `sanity` and just displaying all the data; we will have some number items(not all of then) and can move between the number of different items that we will bring from `sanity`

### Query and displaying slicemasters data

Now we will use the `slicemasters` page to add the `pagination`. So bellow is the steps to build the page:

- First; go to the `slicemasters.js` file on the `pages` directory
- Export `graphql` from `gatsby`
  `import graphql from 'gatsby';`
- Now bellow the `SlicemastersPage` component; export a constant call `query` that will store the `graphQL` query
  ```js
  export const query = graphql`
    query {}
  `;
  ```
- Now `query` for the `persons`(remember thant on the `schema` in `sanity` we call `person` instead of `slicemasters`) and call it `slicemasters` that bring the `name`; `id`, `slug: {current}`; `description` and `image`
  ```js
  export const query = graphql`
    query {
      slicemasters: allSanityPerson {
        nodes {
          name
          id
          slug {
            current
          }
          description
          image {
            asset {
              fluid(maxWidth: 410) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `;
  ```
- Now we need to know the actual `count` of items that are in the `query` for the `pagination`. So use the `totalCount` before `slicemasters`
  ```js
  export const query = graphql`
    query {
      slicemasters: allSanityPerson {
        totalCount
        nodes {...}
      }
    }
  `;
  ```
- Go to the `SlicemastersPage` component and call the `data` prop then extract the `nodes` on a constant call `slicemasters`
  ```js
  export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    return (..);
  }
  ```
- Remove all content of the return statement
- Now loop throw every `slicemaster` with the `map` function
  ```js
  export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <div>
          {slicemasters.map((person) => ()}
        </div>
      </>
    );
  }
  ```
- Import the `Link` component from `gatsby`
  `import { graphql, Link } from 'gatsby';`
- Inside of the `map` add another `div`(remember to add the `key` property to the `div`) with a `Link` to `/slicemaster/person_slug` and inside of it add a `h2` tag with the `person` name(put a class name call `mark` in the `h2`)

```js
  export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <div>
          {slicemasters.map((person) => (
            <div key={person.id}>
              <Link to={`/slicemasters/${person.slug.current}`}>
                <h2>
                  <span className="mark">{person.name}</span>
                </h2>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }
```

- Import `Img` from `gatsby-image`
  `import Img from 'gatsby-image';`
- Bellow the `Link` component add the `image`

```js
  export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <div>
          {slicemasters.map((person) => (
            <div key={person.id}>
              <Link to={`/slicemasters/${person.slug.current}`}>
                ...
              </Link>
              <Img fluid={person.image.asset.fluid} />
            </div>
          )}
        </div>
      </>
    );
  }
```

- Bellow of the `image` add a `p` that with the class name `description` and inside add the `description` of the `person` object
  ```js
  export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <div>
          {slicemasters.map((person) => (
            <div key={person.id}>
              <Link to={`/slicemasters/${person.slug.current}`}>
                ...
              </Link>
              <Img fluid={person.image.asset.fluid} />
              <p className="description">{person.description}</p>
            </div>
          )}
        </div>
      </>
    );
  }
  ```
- Now import `styled` from `styled-components`
  `import styled from 'styled-components';`
- Create a constant call `SlicemasterGrid` that will be equal to the `styled.div`
  ```js
  const SlicemasterGrid = styled.div``;
  ```
- Add the following style to `SlicemasterGrid`
  ```js
  const SlicemasterGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `;
  ```
  This will create columns for the `slicemasters`
- Replace the `div` above the `map` function with `SlicemasterGrid`
  ```js
  export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <SlicemasterStyles>
          {slicemasters.map((person) => (...)}
        </SlicemasterStyles>
      </>
    );
  }
  ```
- Now create a constant call `SlicemasterStyles` to styling each individual item
  ```js
  const SlicemasterStyles = styled.div``;
  ```
- Then add the following style:

```js
const SlicemasterStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;
```

- First; we remove some style from the `anchor`
- Since not all `images` have the same size we need to establish the same size value for all `images`. The `images` are wrap in a `div` this is why we use the `.gatsby-image-wrapper` class
- Then we add styles for the title
- Finally, add style for the description

### Paginating data in Gatsby

At this moment we have the `slicemasters` page with the `sanity` data on it so we can begin to work on the `pagination` on the page that will allow us to show a number of `slicemasters` items that we define.

- First; go to your `.env` file and add the following environment variable that will allow us to define the number of items per page; in this case two
  `GATSBY_PAGE_SIZE=2`
  In order to `gatsby` recognize the environment variable you need to use the `GATSBY` prefix(Before we did one without this prefix but to use it we need to use an external package like `dotenv`). Remember that if you do this way it will be exposed in your frontend
- Go to the `gatsby-node` file and create a `async` function call `turnSlicemasterIntoPages` that recive an object with the `graphQL` and `action` objects
  ```js
  export async function turnSlicemasterIntoPages({ graphql, actions }) {}
  ```
  We will create pages for each page of the `pagination` so if we got 10 items and we want 2 items per page; we will have 5 pages of 2 items
- Use the `turnSlicemasterIntoPages` in the `createPages` function

```js
export async function createPages(params) {
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
    turnSlicemasterIntoPages(params),
  ]);
}
```

- Now we need to `query` all the `slicemasters` on the `turnSlicemasterIntoPages`
  ```js
  export async function turnSlicemasterIntoPages({ graphql, actions }) {
    const { data } = await graphql(`
      query {
        slicemaster: allSanityPerson {
          totalCount
          nodes {
            name
            id
            slug {
              current
            }
          }
        }
      }
    `);
  }
  ```
- Then we need to figure out how many pages there are based on how many `slicemasters` there are and how many per page we want. To create a variable that store the `page` size that we defined before(No matter that you put a number the environment variable will be return as a `string` and you need to convert it again to a number if you need)
  ```js
  export async function turnSlicemasterIntoPages({ graphql, actions }) {
    const { data } = await graphql(`...`);
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  }
  ```
- Then we calculate the items per `page` using the total size of items that we have divided by the `page` size but some time the division will be decimal like `9/2 = 4.5` so we will have `4` and half items to store but such thing call half of `page` doesn't exist so we use the `ceil` function to round the number to `5` and create the `5` pages(Remember that we add the total count of the slicemasters as part of the `query`)
  ```js
  export async function turnSlicemasterIntoPages({ graphql, actions }) {
    const { data } = await graphql(`...`);
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.slicemaster.totalCount / pageSize);
  }
  ```
- Now we need to create a loop that create a page depending how many `pages` we calculated before. We are going to use the `from` method of that depending a property with a numeric value will return an `array` with items equal to the value that you sent then we need to loop throw it
  ```js
  export async function turnSlicemasterIntoPages({ graphql, actions }) {
    const { data } = await graphql(`...`);
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.slicemaster.totalCount / pageSize);
    Array.from({ length: pageCount }).forEach((_, i) => {}
  }
  ```
  We put `_` because we need the `index` but not the other value
- We need to create each page using the `actions` object
  ```js
  export async function turnSlicemasterIntoPages({ graphql, actions }) {
    const { data } = await graphql(`...`);
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.slicemaster.totalCount / pageSize);
    Array.from({ length: pageCount }).forEach((_, i) => {
      actions.createPage({
        path: `/slicemasters/${i + 1}`,
        component: path.resolve('./src/pages/slicemasters.js'),
        context: {
          skip: i * pageSize,
          currentPage: i + 1,
          pageSize,
        },
      });
    }
  }
  ```
  - `path`: The path will be `slicemasters/number_of_page`
  - `component`: We use the same `slicemasters` page component
  - `context`: We will send the amount of the people that should be `skip` for example if we are on `page` 2 you need 4 `slicemasters` but need to `skip` the first 4 also we send the current `page` that we are and the `page` size
- Now restart your local server
- On your browser go to the `slicemasters` page
- You should have the same result as before
- Go to the `/slicemasters/2`
- You should see the same result as the `slicemasters` page that you see before(We still miss the filter for the data on each page)

### Filtering data depending on the pagination

Now will working with the `query` of the `slicemasters` page so it can filter the data depending on the values that we send via the `context` that we defined before in the `gatsby-node` file

- First; go to the `slicemasters` page component
- Add the `skip` and the `pageSize` as varibles that the `query` will recive
  ```js
  export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 2) {
      slicemasters: allSanityPerson {...}
  `;
  ```
  We will recive the `skip` variable that is an `integer` that have a default value of `0` and is not required also we recive the `pageSize` variable that is an `integer` that have a default value of two.
- Then we use the `skip` function to let know `graphQL` which pieces of data we will show and the `limit` function to `limit` the items that we will show
  ```js
  export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 2) {
      slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {...}
  `;
  ```
- Now start your local server
- Go to the `slicemasters` page
- You should see a limited number of persons

### Creating a reusable pagination component

Now that we create the pages for each chunk of `slicemasters` we can add a `pagination` component that will help users to navigate easily between those pages.

- First; on the `gatsby/component` directory create a new file call `Pagination.js`
- Import `React` from `react` in the newly created file
  `import React from 'react';`
- Export a function call `Pagination` with some content
  ```js
  export default function Pagination() {
    return <p>Pagination</p>;
  }
  ```
- Go to the `slicemasters` page component and import the `Pagination` component
  `import Pagination from '../components/Pagination';`
- Now use the `Pagination` component before `SlicemasterGrid`
  ```js
  export default function SlicemastersPage({ data, pageContext }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <Pagination />
        <SlicemasterGrid>...</SlicemasterGrid>
    );
  }
  ```
- Go back to the `Pagination` component and add the following props on the `Pagination` component
  ```js
  export default function Pagination({pageSize, totalCount, currentPage, base) {
    return (
      <p>Pagination</p>
    );
  }
  ```
- Delete the `p` and import `Link` from `gatsby`
  `import { Link } from 'gatsby';`
- Make another constant call `prevPage` that will be the `currentPage - 1` and a another one call `nextPage` that will be the `currentPage + 1`
  ```js
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  ```
- Now we are going to add the `Prev` and `Next` links that will help us to move throw the pages
  ```js
    export default function Pagination({pageSize, totalCount, currentPage, base) {
      const prevPage = currentPage - 1;
      const nextPage = currentPage + 1;
      return (
        <>
          <Link to={`${base}/${prevPage}`}>
            ← Prev
          </Link>
          <Link to={`${base}/${nextPage}`}>
            Next →
          </Link>
        </>
      );
    }
  ```
  We use the `base` prop so we can reuse the `Pagination` component for different components not just the `slicemasters` page component
- Then pass the props to the `Pagination` component from the `slicemasters` component
  ```js
  export default function SlicemastersPage({ data, pageContext }) {
    const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <Pagination
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.slicemasters.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base="/slicemasters"
        />
        <SlicemasterGrid>...</SlicemasterGrid>
    );
  }
  ```
  When we are on the first page the `currentPage` will no exists
- Now create another 2 constant to know that we have a previews page or a next page
  ```js
  export default function Pagination({pageSize, totalCount, currentPage, base) {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
      <>
        <Link to={`${base}/${prevPage}`}>
          ← Prev
        </Link>
        <Link to={`${base}/${nextPage}`}>
          Next →
        </Link>
      </>
    );
  }
  ```
- Now add the `disabled` property using the `hasNextPage` for the `Next` link and the `hasPrevPage` for the `Prev` link
  ```js
  export default function Pagination({pageSize, totalCount, currentPage, base) {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
      <>
        <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
          ← Prev
        </Link>
        <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
          Next →
        </Link>
      </>
    );
  }
  ```
  This will add the `disabled` property to the links when we got to the first or the last `page` but this by itself doesn't do the disable process that will be address later on this module
- Now we need a link that for each page between the `Prev` and `Next` links
  ```js
  export default function Pagination({pageSize, totalCount, currentPage, base) {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
      <>
        <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
          ← Prev
        </Link>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link to={`${base}/${i > 0 ? i + 1 : ''}`}>
            {i + 1}
          </Link>
        ))}
        <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
          Next →
        </Link>
      </>
    );
  }
  ```
- At this moment we need to add some style on the `pagination` so import `styled` from `styled-components`
  `import styled from 'styled-components';`
- Create a constant call `PaginationStyles` before the `Pagination` component
  ```js
  const PaginationStyles = styled.div``;
  ```
- Now add the following style:
  ```js
  const PaginationStyles = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
    border: 1px solid var(--grey);
    margin: 2rem 0;
    border-radius: 5px;
    text-align: center;
  `;
  ```
  Center all the items; then add a `border` on the container that will be a little round on the corners
- Replace the `react` fragment with `PaginationStyles`
  ```js
  export default function Pagination({pageSize, totalCount, currentPage, base) {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    return (
      <PaginationStyles>
        <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
          ← Prev
        </Link>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link to={`${base}/${i > 0 ? i + 1 : ''}`}>
            {i + 1}
          </Link>
        ))}
        <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
          Next →
        </Link>
      </PaginationStyles>
    );
  }
  ```
- Now go back to `PaginationStyles` and add the following
  ```js
  const PaginationStyles = styled.div`
    ... & > * {
      padding: 1rem;
      flex: 1;
      border-radius: 1px solid var(--grey);
      text-decoration: none;
    }
  `;
  ```
  Target each `flex` item that is a direct descendent and add some space in it surrounding; distribute the space of those items; a little border to the right and eliminate some style from the links
- Then add the following:
  ```js
  const PaginationStyles = styled.div`
    ... & > * {
      padding: 1rem;
      flex: 1;
      border-radius: 1px solid var(--grey);
      text-decoration: none;
      &[aria-current],
      &.current {
        color: var(--red);
      }
    }
  `;
  ```
  On the `flex` items that are direct descendant and have an `aria-current` attribute or a class called, `current` will add red color to it. This will highlight the link that represents the current page but if you click on the `slicemasters` menu link you will be redirected to the `slicemasters/` and the current link will not highlight
- To fix the highlight issue we add a `current` class on the link that represents the first page
  ```js
  export default function Pagination({pageSize, totalCount, currentPage, base) {
    ...
    return (
      <PaginationStyles>
        <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
          ← Prev
        </Link>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            className={currentPage === 1 && i === 0 ? 'current' : ''}
            to={`${base}/${i > 0 ? i + 1 : ''}`}
          >
            {i + 1}
          </Link>
        ))}
        <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
          Next →
        </Link>
      </PaginationStyles>
    );
  }
  ```
- Finally we `disable` the links that have a `disabled` property on it and put a `grey` color
  ```js
  const PaginationStyles = styled.div`
    ... & > * {
      padding: 1rem;
      flex: 1;
      border-radius: 1px solid var(--grey);
      text-decoration: none;
      &[aria-current],
      &.current {
        color: var(--red);
      }
      &[disabled] {
        pointer-events: none;
        color: var(--grey);
      }
    }
  `;
  ```
- Now start your local server
- Go to the `slicemasters` page and use the `pagination`
- You should see the current page number highlight on the `pagination` and doesn't allow you to get beyond the first or last pages

## Module #9: Custom Pages and SEO

At this moment we can continue working with the `slicemasters` in this case the single pages for each `person`. This process is almost the same that the one covert on the previews section so we are not going to give a lot of new details here.

- First; on your `template` directory create a new file call `Slicemaster.js`
- Now go to the `gatsby-node` file and on the `turnSlicemasterIntoPages` function use the `createPages` function to create all pages for each `person`(Remember that we use the `slug` on the url)
  ```js
  data.slicemasters.nodes.forEach((slicemaster) => {
    actions.createPage({
      path: `slicemasters/${slicemaster.slug.current}`,
      component: path.resolve("./src/templates/Slicemaster.js"),
      context: {
        slug: slicemaster.slug.current,
      },
    });
  });
  ```
- Then go to the `SLicemaster.js` file on the `template` directory and import `react`; `graphql` and the `Img` component
  ```js
  import React from "react";
  import { graphql } from "gatsby";
  import Img from "gatsby-image";
  ```
- Now export a function call `SingleSlicemaster` and destructure the `data` value to get the `person` query
  `export default function SingleSlicemaster({ data: { person } }) {}`
- Bellow the `SingleSlicemaster` function export a `query` and call it `person` that bring a `sanityPerson` with it `name`; `id`; `description` and `image` with a `with` of `1000` and a `height` of `750`
  ```js
  export const query = graphql`
    query($slug: String!) {
      person: sanityPerson(slug: { current: { eq: $slug } }) {
        name
        id
        description
        image {
          asset {
            fluid(maxWidth: 1000, maxHeight: 750) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `;
  ```
- Now go back to the `SingleSlicemaster` and use the data of the `query` with the following structure
  ```js
  export default function SingleSlicemaster({ data: { person } }) {
    return (
      <div className="center">
        <Img fluid={person.image.asset.fluid} />
        <h2>
          <span className="mark">{person.name}</span>
        </h2>
        <p>{person.description}</p>
      </div>
    );
  }
  ```
- Now start your local server
- Go to the `slicemasters` page
- Click on one of the `person` names
- You should be redirected to the `person` page with all it information

### Gatsby SEO and head tags

Now we are going to be working with [SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO) and all `meta` tags that we need to put in the `head` of the application. Are you see our site and ask yourself what is the highest level that we can get on our page? The answer is the `Layout` component and you can see that we don't have any access to the `head` or `HTML` tag in there. To work with this we use a package call [react-helmet](https://www.npmjs.com/package/react-helmet) that will allow us to put tags on a place and transport them into our page `head`. When we use `react-helmet` in a component it will because of a `side effect` that is when we update something outside of the component itself. In our case, we going to use a custom component that uses `helmet` with some default values that we can override it if we need to. Here are the steps to work with `react-helmet`:

- First; go to the `gatsby-config.js` file on the root of the `gatsby` directory
- Add `gatsby-plugin-react-helmet` plugin on the `plugin` section
  ```js
  export default {
    siteMetadata: {...},
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      {...},
    ],
  };
  ```
  We need to add this `plugin` because when we get to server rendering or per building doesn't work as expected
- Now on the `component` folder create a file called `SEO.js`
- Inside of the newly create the file; import `react` and `Helmet`
  ```js
  import React from "react";
  import { Helmet } from "react-helmet";
  ```
- Export a function call `SEO` that recive: `children`, `location`, `description`, `title`, `image`
  `export default function SEO({ children, location, description, title, image }) {}`
- Now inside of the `SEO` function return a `Helmet` tag
  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    return <Helmet></Helmet>;
  }
  ```
- Inside of the `Helmet` component put the following:
  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    return (
      <Helmet>
        <html lang="en" />
      </Helmet>
    );
  }
  ```
  We add this so the browser will know which language are our `hmtl`
- `Helmet` can recive a `title` template that will allow use to override the value of the `title` tag in this case we will add the site name after each `title` that we send
  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    return (
      <Helmet titleTemplate={`%s - Slick Slices`}>
        <html lang="en" />
      </Helmet>
    );
  }
  ```
  You can see in the `attributes` that `react-helmet` add the `data-react-helmet` that have the `attribute` that you added as value
- But we actually should not be hardcoding the name of the site in the `titleTemplate` because we actually have that information as a part of the configuration file so we can `query` that data. To `query` this data we will need an `static` query so first import `graphql` and `useStaticQuery` from `gatsby`
  `import { graphql, useStaticQuery } from 'gatsby';`
- Before the return statement do a `query` to `site` that get the `siteMetadata`: `title`; `description`; `twitter`

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            twitter
          }
        }
      }
    `);

    return (
      <Helmet titleTemplate={`%s - Slick Slices`}>
        <html lang="en" />
      </Helmet>
    );
  }
  ```

- Now update the `titleTemplate` to use the `title` that you obtain from the `query`

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
      </Helmet>
    );
  }
  ```

- Now add a `tittle` tag and use the `title` of the props as it content

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
    );
  }
  ```

  Now you will have your custom title and will add the `titleTemplate` with it

- Then we need to add our `fav` icon using a `link` that and will be an `SVG`. We can use the `fav` icon that is on the static folder

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
    );
  }
  ```

  By default, the browser search for `favicon.ico` and we have it on the `static` folder too; so that is why we already have an icon on our site

- We will add a fallback for browsers that doesn't support `svg`

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.io" />
      </Helmet>
    );
  }
  ```

  Now we have 3 ways to have an icon in our page depending the browser

- Now we are going to add some `meta` tags

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
    );
  }
  ```

  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: This will give us a better resposive desing
  - `<meta charSet="utf-8" />`: That will specify the character encoding of our `html`
  - `<meta name="description" content={site.siteMetadata.description} />`: Use the `query` description value to add the `meta` tag that give a the site the `description`

- Then we will need to add some `meta` tags for the `open graph`; that is an specification for those other sites that want to share your website information

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        {location && <meta property="og:url" content={location.href} />}
        <meta property="og:image" content={image || "/logo.svg"} />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:site_name"
          content={site.siteMetadata.title}
          key="og:sitename"
        />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
      </Helmet>
    );
  }
  ```

  - `{location && <meta property="og:url" content={location.href} />}`: This will set the `url` that the other sites will use when they share the site and will be avilable if the `location` prop exist
  - `<meta property="og:image" content={image || '/logo.svg'} />`: This will set the image that those sites will use when they share the page and if we don't send any image via prop it will fallback to the `logo` svg on the `static` folder
  - `<meta property="og:title" content={title} key="og:title" />`: The `title` that will present
  - `<meta property="og:site_name" content={site.siteMetadata.title} key="og:sitename" />`: This will set the name of our stie
  - `<meta property="og:description" content={description} key="og:description" />`: Set the description that will be share

- Finally; we need to add the `children` prop in case you want to override any of the default values or put another tag on the `header`

  ```js
  export default function SEO({
    children,
    location,
    description,
    title,
    image,
  }) {
    const { site } = useStaticQuery(graphql`...`);

    return (
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        {location && <meta property="og:url" content={location.href} />}
        <meta property="og:image" content={image || "/logo.svg"} />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:site_name"
          content={site.siteMetadata.title}
          key="og:sitename"
        />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        {children}
      </Helmet>
    );
  }
  ```

- Now go to every single page and templates and add the `SEO` components
  `templates/Pizza.js`

  ```js
  export default function SinglePizzaPage({ data: { pizza } }) {
    return (
      <>
        <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
        <PizzaGrid>...</PizzaGrid>
      </>
    );
  }
  ```

  To prevent errors in the case that we don't send an image we use what is called `nested changing`(The `?` in the image value) that will ask first if the property exists and that will help users to prevent that the page renders even when isn't an image

  `template/Slicemaster.js`

  ```js
  export default function SingleSlicemaster({ data: { person } }) {
    return (
      <>
        <SEO title={person.name} image={person.image.asset.src} />
        <div className="center">...</div>
      </>
    );
  }
  ```

  `pages/pizzas.js`

  ```js
  export default function PizzasPage({ data, pageContext }) {
    const pizzas = data.pizzas.nodes;
    return (
      <>
        <SEO
          title={
            pageContext.topping
              ? `Pizza with ${pageContext.topping}`
              : `All pizzas`
          }
        />
        <ToppingsFilter />
        <PizzaList pizzas={pizzas} />
      </>
    );
  }
  ```

  This will give us a `title` depending on the `topping`

  `pages/slicemasters.js`

  ```js
  export default function SlicemastersPage({ data, pageContext }) {
  const slicemasters = data.slicemasters.nodes;
    return (
      <>
        <SEO title={`Slicemasters - Page ${pageContext.currentPage || 1}`} />
        <Pagination ... />
        <SlicemasterGrid>...</SlicemasterGrid>
      </>
    );
  }
  ```

  This will give us a `title` with the current number of the page that we are at the moment or 1 if you are on the first one

  `pages/order.js`

  ```js
  export default function OrderPage() {
    return (
      <>
        <SEO title="Order Pizza!" />
        <p>Hey! I'm order page page</p>
      </>
    );
  }
  ```

  `pages/beers.js`

  ```js
  export default function BeersPage({ data }) {
    const beers = data.beers.nodes;
    return (
      <>
        <SEO title={`Beers! We have ${beers.length}`} />
        <h2 className="center">
          We have {beers.length} Beers available. Dine-in only!
        </h2>
        <BeerGridStyle>...</BeerGridStyle>
      </>
    );
  }
  ```

  This will give us a `title` with the number of `beers` that we fetch from the API

- Now start your local server
- Each page checking if you have the value that you add using `helmet` on the `HTML` or `title` of the tab for the current page

## Module 10: Order form, custon hooks and state manangement

At this point we can begin to work with the `order` page that will be in charge of get information about the user; take the `pizzas` that the user want; calculate the amount that the user will be charge and send an email to the user's mail with the details of the `order`.

### Creating the order page with custom hooks

- First; go to the `order.js` file in the `gatsby/order` directory
- Delete the message on the return statement
- Add a `form` tag in the return statement
  ```js
  export default function OrderPage() {
    return (
      <>
        <SEO title="Order Pizza!" />
        <form></form>
    );
  }
  ```
- Add a `fielset` tag wit a `legend` that said `Your info` and 2 `labels` with their respective `inputs` for the `name` and `email` of the client
  ```js
  export default function OrderPage() {
    return (
      <>
        <SEO title="Order Pizza!" />
        <form>
          <fieldset>
            <legend>Your info</legend>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
            />
          </fieldset>
        </form>
    );
  }
  ```
- With this alone, your `inputs` won't work because we need to have a `state` associate with your `input` that represent its value and a function that change that `state` every time the user type on the `input`; but we actually don't want to create a `state` for every `input` so we will create a custom `hook` that will give us the advantage of reusing the same `state` for all `inputs`. So go to the `utils` directory and create a file call `useForm.js`
- Import `useState` from `react`
  `import { useState } from 'react';`
- Now export a function call `useForm` that recive a parameter call `default`
  `export default function useForm(defaults) {}`
- Inside of the `useForm` function create an `state` using `useState` that recive the `default parameter` and return a `state` call `value` and a function call `setValue`
  ```js
  export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);
  }
  ```
- Then create a function call `updateValue` that recive the `event` object of the `input` as a parameter

  ```js
  export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(e) {}
  }
  ```

- Inside of the `updateValue` function; use the `setValues` function to update the `values` state like the following:

  ```js
  export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(e) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  }
  ```

  This will use the `name` propety of the `event` object to have the exact property `name` so an `input` with `name="email"` will be associate with a `state` call `email` and will update only this property when the `input` change also we use destructuring to have all other `input` information in the `values` state

- Sometimes the `input` can be a `number` and the `event` object retrun to us the `value` as a `string` so we need to check if this happne and convert it back to a `number`

  ```js
  export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(e) {
      let { value } = e.target;
      if (e.target.type === "number") {
        value = parseInt(value);
      }

      setValues({
        ...values,
        [e.target.name]: value,
      });
    }
  }
  ```

- Now on the `useForm` function return the `values` state and the `updateValue` function

  ```js
  export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(e) {
      let { value } = e.target;
      if (e.target.type === "number") {
        value = parseInt(value);
      }
      setValues({
        ...values,
        [e.target.name]: value,
      });
    }

    return { values, updateValue };
  }
  ```

- Then go back to the `order.js` file and impor the `useForm` hook
  `import useForm from '../utils/useForm';`
- Use the `useForm` hook inside of the `OrderPage` function with a `default` value that will be an object with the `name` and `email` property set to empty `string`

  ```js
  export default function OrderPage() {
    const { values, updateValue } = useForm({
      name: '',
      email: '',
    });

    return (...);
  }
  ```

- Now add the `value` property with the respective `state` for the `input` and an `onChange` property that will use the `updateValue` function

  ```js
  export default function OrderPage() {
    const { values, updateValue } = useForm({
      name: '',
      email: '',
    });

    return (
      <>
        <SEO title="Order Pizza!" />
        <form>
          <fieldset>
            <legend>Your info</legend>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={updateValue}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={updateValue}
            />
          </fieldset>
        </form>
    );
  }
  ```

- Now for the next part of the `order` page we need to get all `pizzas` so the `user` can choose what it wants to `order`. For this, we will make a page `query` to get all the `pizza` data from `sanity` so import `graphql` from `gatsby`
  `import { graphql } from 'gatsby';`
- Bellow the `OrderPage` function export a constant call `query` that it value will be the result of the `query`

  ```js
  export default function OrderPage() {...}

  export const query = graphql``;
  ```

- Now add a `query` that bring all `pizzas` from `sanity` and call it `pizzas` with it `id`, `name`, `slug`, `price`, `image`

  ```js
  export default function OrderPage() {...}

  export const query = graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          id
          slug {
            current
          }
          price
          image {
            asset {
              fluid(maxWidth: 100) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `;
  ```

- Now add the `data` parameter to the `OrderPage` props

  ```js
  export default function OrderPage({ data }) {...}

  export const query = graphql`...`;
  ```

- Then use use the `data` value to get all `pizzas`

  ```js
  export default function OrderPage({ data }) {
    const { values, updateValue } = useForm({
      name: "",
      email: "",
    });

    const pizzas = data.pizzas.nodes;

    return (
      <>
        <SEO title="Order Pizza!" />
        <form>
          <fieldset>...</fieldset>
        </form>
      </>
    );
  }

  export const query = graphql`...`;
  ```

- Use another `fieldset` tag using the following content

  ```js
  export default function OrderPage({ data }) {
    const { values, updateValue } = useForm({
      name: "",
      email: "",
    });

    const pizzas = data.pizzas.nodes;

    return (
      <>
        <SEO title="Order Pizza!" />
        <form>
          <fieldset>...</fieldset>
          <fieldset>
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <div key={pizza.id}>
                <Img
                  width="50"
                  heigth="50"
                  fluid={pizza.image.asset.fluid}
                  alt={pizza.name}
                />
                <div>
                  <h2>{pizza.name}</h2>
                </div>
              </div>
            ))}
          </fieldset>
        </form>
      </>
    );
  }

  export const query = graphql`...`;
  ```

- Now we need to put the `price` of each `pizza` for different sizes; in this case `small`; `mideum` and `large`. So bellow of the previews content that we add a `div` that have a loop for the sizes that create a button for each of them

  ```js
  export default function OrderPage({ data }) {
    const { values, updateValue } = useForm({
      name: "",
      email: "",
    });

    const pizzas = data.pizzas.nodes;

    return (
      <>
        <SEO title="Order Pizza!" />
        <form>
          <fieldset>...</fieldset>
          <fieldset>
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <div key={pizza.id}>
                <Img... />
                <div>...</div>
                <div>
                  {["S", "M", "L"].map((size) => (
                    <button type="button">{size}</button>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>
        </form>
      </>
    );
  }
  ```

- But we need the actual `price` of the `pizza` and we go it on the `query` that we did but is not properly formatted so we are going to create a function for this. Go to the `utils` directory and create a file call `calculatePizzaPrice.js`
- Create a constant call `sizes` in this newly created file that is and object that have the following
  ```js
  const sizes = {
    S: 0.75,
    M: 1,
    L: 1.25,
  };
  ```
- Export a function call `calculatePizzaPrice` bellow the `sizes` constant that recive the `size` and a `cents` property
  `export default function calculatePizzaPrice(cents, size) {}`
- In the `calculatePizzaPrice` fuction `return` the `cents` multiply by the `sizes`
  ```js
  export default function calculatePizzaPrice(cents, size) {
    return cents * sizes[size];
  }
  ```
  We did this because the `price` that we put on `sanity` represents the `medium` size so we need to calculate the others
- Now create another file on the `utils` directory that will be call `formatMoney.js`
- In this file create a constant call `formatter` that use the `NumberFormat` function from `Intl` and send an object to configure the `currency` for `US` dollars
  ```js
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  ```
- Then export a function call `formatMoney` that recive `cents`
  `export default function formatMoney(cents) {}`
- Inside of the `formatMoney` return the `formatter` cosntant like this
  ```js
  export default function formatMoney(cents) {
    return formatter.format(cents / 100);
  }
  ```
  As you may recall the `price` that we put on `sanity` is on `cents` so we need to divide to get the actual value of the `pizza`
- Go back to the `order.js` file and import the `formatMoney` and `calculatePizzaPrice` functions
  ```js
  import calculatePizzaPrice from "../utils/calculatePizzaPrice";
  import formatMoney from "../utils/formatMoney";
  ```
- Use both function on each `price` button that we created before

  ```js
  export default function OrderPage({ data }) {
    const { values, updateValue } = useForm({
      name: "",
      email: "",
    });

    const pizzas = data.pizzas.nodes;

    return (
      <>
        <SEO title="Order Pizza!" />
        <form>
          <fieldset>...</fieldset>
          <fieldset>
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <div key={pizza.id}>
                <Img... />
                <div>...</div>
                <div>
                  {["S", "M", "L"].map((size) => (
                    <button type="button">
                      {size}{" "}
                      {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>
        </form>
      </>
    );
  }
  ```

- Start your local server
- Go to the `order` page
- Check that everything is where is suppose to and it doesn't have errors

### Styling our Order form

Now that we got the `inputs that we need on the `from`; we will take a moment to add some `styles`to it. Since the`order`page file is getting too big we will separate the`styles`for this page and put then in a new file in the`styles` directory

- First; go to the `styles` directory and create a new file call `OrderStyles.js`
- On this newly created file import `styled` from `styled-components`
  `import styled from 'styled-components';`
- Now create and export a constant call `OrderStyles` for the `form` tag

  ```js
  const OrderStyles = styled.form``;

  export default OrderStyles;
  ```

- Go to the `order.js` file in the `form` directory and import the `OrderStyles` file
  `import OrderStyles from '../styles/orderStyles';`
- Replace the `form` tag with `OrderStyles`
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>...</OrderStyles>
      </>
    );
  }
  ```
- Go back to the `OrderStyles` and add the following:
  ```js
  const OrderStyles = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `;
  ```
  This will create 2 colums for all elements inside the `form` and apply a space betwen then of `20px`. The size of the columns will be determine distributing the size of the container father betwen the 2 colums
- Now we will add some styling for the specific `fieldset` inside the form
  ```js
  const OrderStyles = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    fieldset {
      grid-column: span 2;
      max-height: 600px;
      overflow: auto;
      display: grid;
      gap: 1rem;
      align-content: start;
    }
  `;
  ```
  We already have 2 columns but now in every `fieldset`, we make every column `span` the 2 columns so that means that every column will have a 100% the sizes of the container. We add a `max-height` so when we have more content than the size of the `fieldset` we can add a `scroll` bar then a `gap` between elements and finally all the elements will be aligned to the start.
- Now we need to add some specific style to the `order` and `menu` so those `fieldset` is side by side. So add a class of `order` and `menu` to their respective `fieldset`
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            ...
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
- Go back to the `OrderStyles` and add the following
  ```js
  const OrderStyles = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    fieldset {
      grid-column: span 2;
      max-height: 600px;
      overflow: auto;
      display: grid;
      gap: 1rem;
      align-content: start;
      &.order,
      &.menu {
        grid-column: span 1;
      }
    }
  `;
  ```
  Just `span` the column to take only one of the previously defined columns at the start of the `MenuItemsStyles`
- Now we need to style the specific `pizza` item for this so on the `styles` directory create a file call `MenuItemsStyles.js`
- In this new file import `styled` from `styled-components`
  `import styled from 'styled-components';`
- Now create and export a constant call `MenuItemsStyles`

  ```js
  const MenuItemsStyles = styled.div``;

  export default MenuItemsStyles;
  ```

- Go to the `order` page file import `MenuItemsStyles`
  `import MenuItemsStyles from '../styles/MenuStyles';`
- Use `MenuItemsStyles` on the `div` that have the `key` propety in the `menu` fieldset
  ```js
  export default function OrderPage({ data }) {
  ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <MenuItemsStyles key={pizza.id}>
              ...
              </MenuItemsStyles>
            ))}
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
- Go back to the `MenuItemsStyles` file and add the following style
  ```js
  const MenuItemsStyles = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.3rem;
    align-content: center;
    align-items: center;
  `;
  ```
  First, we define 2 columns where the `image` will be taken `100px` and the others will be to the right regardless of how much space is there then we add 2 rows that will distribute it space with a some `gap` between then and align all content to the `center`
- Now we need that the `image` select 2 `rows` so the buttons will be bellow the title
  ```js
  const MenuItemsStyles = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.3rem;
    align-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      grid-row: span 2;
      height: 100%;
    }
  `;
  ```
  We use the `gatsby-image-wrapper` to target the `images` and `span` then 2 rows. We add the `100%` height for the `image` to strech itself regarding how hight is the container; `gatsby-image` use `object-fit-covert` that is why the `image` stretch itself
- Some more additional styles for the elements
  ```js
  const MenuItemsStyles = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.3rem;
    align-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      grid-row: span 2;
      height: 100%;
    }
    p {
      margin: 0;
    }
    button {
      font-size: 1.5rem;
    }
    button + button {
      margin-left: 1rem;
    }
  `;
  ```
  Remove all spaces of the `p` tags; add the sizes of the button letters and when we have a `button` next to a `button` we add some space between then
- Finally, start your local server and go to the `order` page, and test

### Custom hook for our order form

At this moment we have everything we need to get information about the `order` except the actual `order` display on the page so we are going to we using a `custom hook` that will help us to display; remove the item and calculate the valor of an order. So let's begin with the process.

- First; go to the `utils` directory and create a file call `usePizza.js`
- Export a function call `usePizza` and recive an object with a `pizza` and `inputs` property
  `export default function usePizza({ pizzas, inputs }) {}`
  We will use this parameters on the future
- Now import `useState` from `react`
  `import { useState } from 'react';`
- Add an `state` call `order` using `useState`
  ```js
  export default function usePizza({ pizzas, inputs }) {
    const [order, setOrder] = useState([]);
  }
  ```
- Now create another function call `addToOrder` that recive a `orderedPizza` as a parameter and set the `order` state to the same value that the `order`state has plus the new `orderedPizza`

  ```js
  export default function usePizza({ pizzas, inputs }) {
    const [order, setOrder] = useState([]);

    function addToOrder(orderedPizza) {
      setOrder([...order, orderedPizza]);
    }
  }
  ```

- Now create another function call `removeFromOrder` that recive an `index` as a parameter and set the `order` state removing the value in the `array` on which position match with the `index`

  ```js
  export default function usePizza({ pizzas, inputs }) {
    const [order, setOrder] = useState([]);

    function addToOrder(orderedPizza) {
      setOrder([...order, orderedPizza]);
    }

    function removeFromOrder(index) {
      setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
    }
  }
  ```

- Then return the `order` state, the `addOrder` and the `removeOrder` functions

  ```js
  export default function usePizza({ pizzas, inputs }) {
    const [order, setOrder] = useState([]);

    function addToOrder(orderedPizza) {
      setOrder([...order, orderedPizza]);
    }

    function removeFromOrder(index) {
      setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
    }

    return { order, addToOrder, removeFromOrder };
  }
  ```

- Go to the `order` page file and import the `usePizza` hook
  `import usePizza from '../utils/usePizza';`
- Bellow the `useForm` definition; use the `usePizza` hook and use `pizza` and `values` on an object to send it as a `default` value to the hook

  ```js
  export default function OrderPage({ data }) {
    const pizzas = data.pizzas.nodes;
    const { values, updateValue } = useForm({
      name: '',
      email: '',
    });
    const { order, addToOrder, removeFromOrder } = usePizza({
      pizzas,
      input: values,
    });

    return (...)
  }
  ```

- Then go to the `sizes` button and add a `onClick` property that recive a function that returns the `addOrder` function sending an object with the `id` and a `size`
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <MenuItemsStyles key={pizza.id}>
                ...
                <div>
                  {['S', 'M', 'L'].map((size) => (
                    <button
                      type="button"
                      onClick={() => addToOrder({ id: pizza.id, size })}
                    >
                      {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  ))}
                </div>
              </MenuItemsStyles>
            ))}
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
- Now we need a new component that displays our order so go to the `components` directory and create a file call `PizzaOrder.js`
- In this new file import `react`
  `import React from 'react';`
- Create a function call `PizzaOrder` that recive `order`, `pizzas` and `removeFromOrder` as a prop
  `export default function PizzaOrder({ order, pizzas, removeFromOrder }) {}`
- Go back to the `order` page file and import the `PizzaOrder` component
  `import PizzaOrder from '../components/PizzaOrder';`
- Use the `PizzaOrder` component below the `order` legend and send all corresponding parameters
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            ...
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
            <PizzaOrder
              order={order}
              removeFromOrder={removeFromOrder}
              pizzas={pizzas}
            />
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
  We need to sent the `removeFromOrder` function from here because this is bound to the actual `order` state that we have on the `order` page component; if we grad the function direclty on the `PizzaOrder` component importing the hook this will not update the actual `order` state in the `order` page component
- Go back to the `PizzaOrder` component and return a `map` function of the `order` and use single `order` and `index` as a parameter on the callback function
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          return ()
        }
      </>
    )};
  }
  ```
- Now we need to have the each `pizza` information that are in the `order` so we will use a `filter` function on the `pizzas` object where the `pizza` id are equal to the `singleOrder` id
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return ()
        }
      </>
    )};
  }
  ```
- Import `MenuItemsStyles`, `Img`, `calculatePizzaPrice` and `formatMoney`
  ```js
  import MenuItemsStyles from "../styles/MenuStyles";
  import calculatePizzaPrice from "../utils/calculatePizzaPrice";
  import formatMoney from "../utils/formatMoney";
  ```
- Use `MenuItemsStyles` in the return statement inside of the `order` map
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return (
            <MenuItemsStyles key={singleOrder.id}></MenuItemsStyles>
          );
        }
      </>
    )};
  }
  ```
- Use the `Img` component as a content of `MenuItemsStyles`
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return (
            <MenuItemsStyles key={singleOrder.id}>
              <Img fluid={pizza.image.asset.fluid} />
            </MenuItemsStyles>
          );
        }
      </>
    )};
  }
  ```
- Put an `h2` tag with the `pizza` title below the `Img` component
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return (
            <MenuItemsStyles key={singleOrder.id}>
              <Img fluid={pizza.image.asset.fluid} />
              <h2>{pizza.name}</h2>
            </MenuItemsStyles>
          );
        }
      </>
    )};
  }
  ```
- Then add a `p` tag to add the `price` of the `pizza` using the format functions
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return (
            <MenuItemsStyles key={singleOrder.id}>
              <Img fluid={pizza.image.asset.fluid} />
              <h2>{pizza.name}</h2>
              <p>
                {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              </p>
            </MenuItemsStyles>
          );
        }
      </>
    )};
  }
  ```
- Now bellow the `price` add the following `button`
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return (
            <MenuItemsStyles key={singleOrder.id}>
              <Img fluid={pizza.image.asset.fluid} />
              <h2>{pizza.name}</h2>
              <p>
                {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
                <button
                  type="button"
                  className="remove"
                  title={`Remove ${singleOrder.size} ${pizza.name} from order`}
                  onClick={() => removeFromOrder(index)}
                >
                  &times;
                </button>
              </p>
            </MenuItemsStyles>
          );
        }
      </>
    )};
  }
  ```
  The `title`is for accesibilyty purposes and the `&times;` is the encode value of an `x` also we use the `removeFromOrder` function sending the actual `index` of the `order`
- Go to the `MenuStyles` file in the `styles` directory and add the follwoing

  ```js
  const MenuItemsStyles = styled.div`
    ...
    position: relative;
    .gatsby-image-wrapper {... }
    p {...}
    button {..}
  
    button + button {..}
    .remove {
      background: none;
      color: var(--red);
      font-size: 3rem;
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: none;
      line-height: 1rem;
    }
  `;
  ```

  This will put the `remove` button at the size of the `order` information

- Finally; start your local server
- Go to the `order` page
- Click on one of the buttons on the `pizza` and it should be added to the order section without errors

### Calculating the order total

At this moment we can create our order but we still need 2 things the `total amount` of the `order` and the `submit` button that will send the `order` via `email`. At this time we will calculate the `order` amount and put the button without functionality(we will work on this in the next section).

- First; go to the `order` file in the `page` directory and add a new `fieldset` with the following content
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            ...
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
            ...
          </fieldset>
          <fieldset>
            <h3>
              Your total is
            </h3>
            <button type="submit">Order Ahead</button>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
- Now on the `utils` directory create a file call `calculateOrderTotal`
- In this newly created file export a funtion call `calculateOrderTotal` that recive the `order` and the `pizzas`
  `export default function calculateOrderTotal(order, pizzas) {}`
- Go back to the `order` file and import the `calculateOrderTotal` funtion
  `import calculateOrderTotal from '../utils/calculateOrderTotal';`
- On the`fieldset` that you create before in the `h3` tag use the `calculateOrderTotal` function sending the parameters that it need
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            ...
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
            ...
          </fieldset>
          <fieldset>
            <h3>
              Your total is {calculateOrderTotal(order, pizzas)}
            </h3>
            <button type="submit">Order Ahead</button>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
- Go back to the `calculateOrderTotal` file and use a `reduce` function on the `order` to create a `total` amount of the `order`. The initial value will be `0`
  ```js
  export default function calculateOrderTotal(order, pizzas) {
    return order.reduce((runningTotal, singleOrder) => {}, 0);
  }
  ```
- Now we need to get the actual `pizza` information that is on the `order`
  ```js
  export default function calculateOrderTotal(order, pizzas) {
    return order.reduce((runningTotal, singleOrder) => {
      const pizza = pizzas.find(
        (SinglePizza) => SinglePizza.id === singleOrder.id
      );
    }, 0);
  }
  ```
- Then we need to return the `accumulator` plus the current `price` that we get from the `pizza` and to have the actual `price` we need to use the `calculatePizzaPrice` function that we create before so import it at the top of the file
  `import calculatePizzaPrice from './calculatePizzaPrice';`
- Return the `acumulator` plus the `price` of the `pizza` in the `calculateOrderTotal` function

  ```js
  export default function calculateOrderTotal(order, pizzas) {
    return order.reduce((runningTotal, singleOrder) => {
      const pizza = pizzas.find(
        (SinglePizza) => SinglePizza.id === singleOrder.id
      );

      return runningTotal   calculatePizzaPrice(pizza.price, singleOrder.size);
    }, 0);
  }
  ```

- Go back to the `order` file and use the `formatMoney` function to wrap the `calculateOrderTotal`
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            ...
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
            ...
          </fieldset>
          <fieldset>
            <h3>
              Your total is {formatMoney(calculateOrderTotal(order, pizzas))}
            </h3>
            <button type="submit">Order Ahead</button>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```
- Finally, start your local server
- Go to the `order` page
- Click on one of the `pizza` buttons
- The result `price` should be updated each time you add a `pizza` to the `order` and have the correct format

## Module 11: Serverless functions

If you notice when you add a `pizza` to the `order` and change the page using for example the `nav` at the top of the file; the `order` will disappear when you get back to the `order` page because `gatsby` will `umount` the component when you change the page and the `state` will be lost so we need to handle the `order` state differently than other states. We will need to put the `order` state to the highest level that we can so when we `unmount` the `order` page component the state will not be affected.

If you take a look at the `react` dev tool at the top of the components you will see a `Root` component that doesn't change when you navigate between pages and with a hook that `gatsby` allows to use it we manipulate that `Root` component. We also will be using the [context API](https://reactjs.org/docs/context.html) that will help us to stick the state to a higher level.

- First; on the `components` directory create a new file call `OrderContext.js`
- In this newly created file import `React` and `useState`
  `import React, { useState } from 'react';`
- Then use `React.createContext` to create a `context` for the `order`
  `const OrderContext = React.createContext();`
- Now we need a `Provider`(Is a component that live on a higther level)
  `export function OrderProvider({ children }) {}`
- Inside of the `OrderProvider` create a state for the `order`
  ```js
  export function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);
  }
  ```
- Return a tag of `OrderContext.Provider` that wrap the `children` property
  ```js
  export function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);
    return (
      <OrderContext.Provider value={[order, setOrder]}>
        {children}
      </OrderContext.Provider>
    );
  }
  ```
  We need to explicit send the `state` and the `setState` function via the `value` property to be avilable to the `cosumer` childrens
- Then export the `OrderContext` after the `OrderProvider` component
  `export default OrderContext;`
- Go to your `gatsby-browser` and import the `OrderProvider` component
  `import { OrderProvider } from './src/components/OrderContext';`
- Export a function call `wrapRootElement`(Need to use this exact name) that recive an object with an `element` property as a parameter
  `export function wrapRootElement({ element }) {}`
- Return the `OrderProvider` component wrapping the `element` parameter
  ```js
  export function wrapRootElement({ element }) {
    return <OrderProvider>{element}</OrderProvider>;
  }
  ```
- Go to the `gatsby-ssr.js` and follow the same steps that you just did on the `gatsby-browser` file
- Now go to your `usePizza` hook in the `utils` directory and import `useContext` from `react` and remove `useState`
  `import { useContext } from 'react';`
- Import `OrderContext`
  `import OrderContext from '../components/OrderContext';`
- Replace the `useState` that was use to create the `order` state with the `useContext` hook using the `OrderContext` as a default value
  `const [order, setOrder] = useContext(OrderContext);`
- Finally; start your local server
- Go to the `order` page
- Add a `pizza` to your `order`
- Click on another page in the `nav`
- Go back to the `order` page clicking on the `order` option in the `nav`
- You should see that you still have the `pizza` that you add to your `order`

#### Note:

- If you refresh the page the data will be gone

### Clean up console warnings

- Go to the `PizzaOrder` file on the component directory
- Go to the `MenuItemsStyles` tag and update the `key`
  ```js
  export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
    return (
      <>
        {order.map((singleOrder, index) => {
          const pizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
          return (
            <MenuItemsStyles key={`${singleOrder.id}-${index}`}>
              ...
            </MenuItemsStyles>
          );
        })}
      </>
    );
  }
  ```
  This will allow us to add more than one time a `pizza` to the `order` and still have a `unique` id and the `react` warning will not be shown on the `console`
- Then go to the `order` page component
- On the button of the different `size` prices; add a `unique` key
  ```js
  export default function OrderPage({ data }) {
    ...
    return (
      <>
        <SEO title="Order Pizza!" />
        <OrderStyles>
          <fieldset>
            <legend>Your info</legend>
            ...
          </fieldset>
          <fieldset className="menu">
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <MenuItemsStyles key={pizza.id}>
                ...
                <div>
                  {['S', 'M', 'L'].map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => addToOrder({ id: pizza.id, size })}
                    >
                      {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  ))}
                </div>
              </MenuItemsStyles>
            ))}
          </fieldset>
          <fieldset className="order">
            <legend>Order</legend>
            ...
          </fieldset>
          <fieldset>
            <h3>
              Your total is {formatMoney(calculateOrderTotal(order, pizzas))}
            </h3>
            <button type="submit">Order Ahead</button>
          </fieldset>
        </OrderStyles>
      </>
    );
  }
  ```

### Intro to serverless functions

When you build with `gatsby` it will take out the `HTML`; `CSS` and `js` in order to handle all the functionality but if you need to do something that needs to happen at the `server` side this will not be possible in `gatsby` unless you work with `serverless functions` that are very similar to running a function in a `server` but instead of having a configure `server` is just a function that runs then shuts itself down after the fact. You can use `serverless` functions with a lot of frameworks just need an URL that you can ping. We are going to be using are [netlify functions](https://docs.netlify.com/functions/overview/) because `Netlify` is very good at hosting `gatsby` apps and offers to host `serverless` functions(Everything that we are going to write are just `Nodejs` functions so you can host on the service of your choosing)

- First; on the `root` of your `gatsby` directory create a file called ` netlify.toml`
- Now on the `root` of the `gatsby` directory create a folder called `functions`
- Then inside of the `netlify.toml` you need to tell `netlify` where your `functions` are
  ```bash
  [build]
    functions = "functions/"
  ```
- To `start` your local server we use the command `npm start` but know we need another script to run our local server(Is already defined on the `package.json` on the root of the `gatsby` directory) that will run the `start` command and set everything so you can run your `serverless` functions. On your terminal use the `npm run netlify`
- Now we are going to create our first function; go to the `functions` directory create a folder call `hello`
- Inside of the `hello` folder create a file with the same name as the folder: `hello.js`
- Inside of the `hello` file we are going to create a `handler`(That are `Amazon` serverless functions under de hook; `AWS lambda` is the official name).
  ```js
  exports.handler = async (event, context) => {
    console.log(event);
    return {
      statusCode: 200,
      body: "Hello!!",
    };
  };
  ```
  Here you will return an object that represents the `success` status and a body that will have `hello` as part of the response. You can check what the `event` have on the console
- Restart your local server
- Go to this URL: `http://localhost:8888/.netlify/functions/hello`
- You should see the `hello` message
- Now that we see the basics we can continue with our main task; that is to create a `serverless` function that sends us an email; so go to the `functions` directory and create a folder call `placeOrder`
- Inside of this directory create a file called `placeOrder.js`
- Sometimes the `serverless` functions are so big or you want to encapsulate all logic related to the function in its own directory that you will choose to use a `package.json` in the function directory and you can do this. On your console go to the `functions` directory
- Use the `init` command to create the `package.json`: `npm init`
- Then install the [nodemailer](https://nodemailer.com/about/) dependency: `npm install nodemailer`
- Now go to the `placeOrder.js`
- Require `nodemailer`: `const nodemailer = require('nodemailer');`
  At this moment we can't use the `ES6` import sintax
- Now we need to create what is call [transport](https://nodemailer.com/smtp/)
  ```js
  const transporter = nodemailer.createTransport({});
  ```
- Then we need to put the credentials to connect with transactional email services(Service that its main purpose is to send emails for you).

  Examples: [Postmark](https://postmarkapp.com/) and [Sengrid](https://sendgrid.com/)

  But for this example, we will use [Ethereal](https://ethereal.email/) which is a service created by the `nodemailer` team to test a temporary email account. So go to the `Ethereal` site and click on the create an account button

- Copy the `nodemailer` configuration
- Paste it on the `trasporter`
  ```js
  const transporter = nodemailer.createTransport({
    host: "your_etherial_host",
    port: 587,
    auth: {
      user: "your_ethereal_user",
      pass: "your_ethereal_password",
    },
  });
  ```
- Since we are going to update this configuration depending the enviroment we need to add some variable to our `.env` file
  ```bash
  MAIL_HOST="your_etherial_host"
  MAIL_USER="your_ethereal_user"
  MAIL_PASS="your_ethereal_password"
  ```
  Remember not to add the `GATSBY_` prefix because it will expose the variables to the client site browser if you put it
- Go back to the `placeOrder` file and update the `transporter` configuration object to use these variables
  ```js
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  ```
- Now let's create our `handler`
  ```js
  exports.handler = async (event, context) => {};
  ```
- Inside of our `handler` use the `transporter sendMail` function with the following configuration(Remenber to put `await` before) and the respose store it in a constant
  ```js
  exports.handler = async (event, context) => {
    const info = await transporter.sendMail({
      from: "Slick's Slices <slick@example.com>",
      to: "orders@example.com",
      subject: "New order!",
      html: `<p>Yor new pizza order is here!</p>`,
    });
  };
  ```
- Finally; return the `status` code and the respose on the email `request` as a `body`property

  ```js
  exports.handler = async (event, context) => {
    const info = await transporter.sendMail({
      from: "Slick's Slices <slick@example.com>",
      to: "orders@example.com",
      subject: "New order!",
      html: `<p>Yor new pizza order is here!</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(info),
    };
  };
  ```

  We need to `stringify` to actually see the request information on the browser

- Restart your local server
- On your browser go to `http://localhost:8888/.netlify/functions/placeOrder`
- You should see the response on your browser
- Check the inbox of your [Ethereal](https://ethereal.email/messages) account and you should see the email with the content that we send

### Modifying our custom jook to send the order data

At this moment we have a `serverless` function that sends us an ʻemail` but only have an example content and we want to have the actual order information in the` body` of that ʻemail` so we need to prepare the `client `side of the application to send this data to our` serverless` function and that will be the main focus of this section.

- First; go to the ʻusePizza`hook
- Import ʻuseState`from`react`ʻImport {useContext, useState} from 'react';`
- Now add the following `states` inside of the ʻusePizza` function and return it ``  `js
  export default function usePizza ({pizzas, values}) {
  const [order, setOrder] = useContext (OrderContext);
  const [error, setError] = useState ();
  const [loading, setLoading] = useState (false);
  const [message, setMessage] = useState ('');
  ...

  return {
  order,
  addToOrder,
  removeFromOrder,
  error,
  loading,
  message,
  }
  }
  ``'' This will be`states` that will handle:

  - Errors submitting the data (ʻerror` state)
  - Time that we have a response from our `serverless` function (` loading` state)
  - Message on successful submit (`message` state)

- Go to the ʻorder`page component and add the new`states` on the ʻusePizza` hook definition
  `` `js export default function OrderPage ({data}) { const pizzas = data.pizzas.nodes; const {values, updateValue} = useForm ({ name: '', email: '', }); const { order, addToOrder, removeFromOrder, error, message, loading, } = usePizza ({ pizzas, values, }); ... } `` ''
- Then we can begin to work with the `loading` state. First; we need to add the `disabled` property when the ʻorder` is processing to the` submit` button `` `js
  <button type = "submit" disabled = {loading}>
  'Order Ahead'
  </button>
  `` ''
- Change the message of the button to `Place order ...` when we processing the ʻorder` `` `js
  <button type = "submit" disabled = {loading}>
  {loading? 'Place Order ...': 'Order Ahead'}
  </button>
  `` ''
- Now we need to add a `handler` to control when someone clicks on the` submit` button. Go to the ʻusePizza` hook and inside of the ʻusePizza` function creates a function call `submitOrder` that receive the ʻevent` as a parameter and return it `` `js
  export default function usePizza ({pizzas, values}) {
  ...
  async function submitOrder (e) {}

  return {
  ...
  submitOrder,
  };
  }
  ``'' Since we are going to target our`serverless` function from here we will need the ʻasync` keyword

- Go back to the ʻorder`page component and add the`submitOrder` function to the ʻusePizza` hook definition
  `` `js export default function OrderPage ({data}) { const pizzas = data.pizzas.nodes; const {values, updateValue} = useForm ({ name: '', email: '', }); const { order, addToOrder, removeFromOrder, error, message, loading, submitOrder, } = usePizza ({ pizzas, values, }); ... } `` ''
- Now add the `submit` property to ʻOrderStyles` (That represent our` form`tag) and use the`submitOrder` as it value `` `js
  export default function OrderPage ({data}) {
  ...
  return (
  <>
  <SEO title = "Order Pizza!" />
  <OrderStyles onSubmit = {submitOrder}>
  ...
  </OrderStyles>
  </>
  );
  }
  `` ''
- Now start your local server and go to the ʻorder` page
- Click on the submit button
- You should see that some parameters are added to the URL and we want to prevent this
- Go to the ʻusePizza`hook and inside of the`submitOrder` function add the following: `` `js
  async function submitOrder (e) {
  e.preventDefault ();
  }
  `` ''
- Now add the set the `loading` state to` true`; this means that the process of sending the data to our `serverless` function begins and we need to clear any ʻerror` or` messages`that are present on the moment that you`submit` the data `` `js
  async function submitOrder (e) {
  e.preventDefault ();
  setLoading (true);
  setError (null);
  setMessage (null);
  }
  `` ''
- Then we need to gather all the data that we need to create the `body` of our ʻemail` but first; rename the ʻinputs` prop to `values`
  ʻExport default function usePizza ({pizzas, values}) {...} `
- Go to the ʻorder`page component and use`values` instead of ʻinputs` in the default of the ʻusePizza`hook`const {...} = usePizza ({pizzas, values,});`
- Import the `formatMoney` and` calculateOrderTotal` functions
  `` `js import calculateOrderTotal from './calculateOrderTotal'; import formatMoney from './formatMoney'; `` ''
- Go back to the `usePizza` file and on the `submitOrder` function create a constant call` body` that will have the following structure and print that data to the console

  ```js
    async function submitOrder(e) {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setMessage(null);

      const body = {
        order
        total: formatMoney(calculateOrderTotal(order, pizzas)),
        name: values.name,
        email: values.email,
      };

      console.log(body);
    }
  ```

- Go to the `order` page
- Fill the `form` and submit the data
- You should see that the `submit` button changes the message
- Check your browser console
- You should see the data that you `submit` on the `form` but check the `order` array of objects; we actually need a little more information about the `order` itself so we need to apply some formating to get what we want
- Create a new file on the `utils` directory call `attachNameAndPrices.js`
- Import the `calculatePizzaPrice` and `formatMoney` functions
  ```js
  import calculatePizzaPrice from "./calculatePizzaPrice";
  import formatMoney from "./formatMoney";
  ```
- Export a function call `attachNameAndPrices` that recive the `order` and `pizzas`
  `export default function attachNameAndPrices(order, pizzas) {}`
- Return the result of a `map` function of the `order`
  ```js
  export default function attachNameAndPrices(order, pizzas) {
    return order.map((item) => {});
  }
  ```
- Then find the `pizza` that match with the current `item.id`
  ```js
  export default function attachNameAndPrices(order, pizzas) {
    return order.map((item) => {
      const pizza = pizzas.find((singlePizza) => singlePizza.id === item.id);
    });
  }
  ```
- Now return the following object
  ```js
  export default function attachNameAndPrices(order, pizzas) {
    return order.map((item) => {
      const pizza = pizzas.find((singlePizza) => singlePizza.id === item.id);
      return {
        ...item,
        name: pizza.name,
        thumbnail: pizza.image.asset.fluid.src,
        price: formatMoney(calculatePizzaPrice(pizza.price, item.size)),
      };
    });
  }
  ```
  This will give use more information about the current `order`
- Go back to your `usePizza` and import the `attachNameAndPrices` function
- Use on the `body` constant the `attachNameAndPrices` function

  ```js
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNameAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
    };

    console.log(body);
  }
  ```

- Go to the `order` page
- Fill the `form` and `submit` the data
- Check on your browser console
- The `order` data should be updated to the new structure
- Now we need to send the data to our `serverless` function and to do this we need to make a request that will have our `serverless` function's URL but we don't want to hardcode the base of this URL because in the future we might need to change from `netlify` so we are going to create an `environment variable` to do it. Go to your `.env` file
- Create the following variable
  `GATSBY_SERVERLESS_BASE=http://localhost:8888/netlify/functions`
- Go back to the `usePizza` hook
- Now we need to send the data to the `serverless` function and use a `fetch` function to make a `post` request and we will send a `JSON` and send the `body` constant as the `body`(Need to send it as a `string`) of the `request`. Remember to use the `await` keyword

  ```js
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNameAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  }
  ```

- Now we need to have the actual content of the `response` so we need to wait for it and turn it into a `JSON`

  ```js
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNameAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = JSON.parse(await res.text());
  }
  ```

- Now we need to check if everything goes as expected with the request and if not we will set the `error` and in both cases, the `loading` should be stopped

  ```js
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNameAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
    };

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage("Success! Come on down for your pizza");
    }
  }
  ```

  All status `errors` of response above `400`(including `400`) and less of `600` means that something when wrong

- Now go back to the `order` page component and above the `submit` button; add a `div` that show an `error` if it exists
  ```js
  <fieldset>
    <h3>...</h3>
    <div>{error ? <p>Error: {error}</p> : ""}</div>
    <button type="submit" disabled={loading}>
      ...
    </button>
  </fieldset>
  ```
- Then before the `return` statement add a condition that `return` a `p` tag if there is a `message`

  ```js
  export default function OrderPage({ data }) {
    ...
    if (message) {
      return <p>{message}</p>;
    }

    return (...);
  }
  ```

This is the `client` side part so this means that it actually doesn't work because we need to prepare the `serverless` function to receive this data and send the `email` and that will be handle in the next section.
