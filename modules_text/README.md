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


