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

Finally, go to your browser and add a `slicemaster`; you can use the `data` on the `sample-data` directory. In the `text-data.md` are the user's information and on the `nice-pizza-pics` directory have some people images.
