# This is a Gatsby course repository

## Requiretments

- [Nodejs](https://nodejs.org/en/)
- [Sanity](https://www.sanity.io/) account

## Tools and modules on use in the application

- [React](https://reactjs.org/) on the `client` of the application
- [Gatsby](https://www.gatsbyjs.com/) for the `client` of the application
- [Styled-components](https://styled-components.com/) for the `client` styles
- [Sanity](https://www.sanity.io/) for the `CMS` of the application
- [GraphQL](https://graphql.org/) to `query` the data

## Pages

- [Home page](http://localhost:8000/)
- [Custom 404 page](http://localhost:8000/anything_that_does_not_exists)
- [Beers page](http://localhost:8000/beers)
- [Order page](http://localhost:8000/order)
- [Pizza page](http://localhost:8000/pizzas)
- [Pizza by topping page](http://localhost:8000/topping/Hot%20Peppers)(This URL is for a `Hot peppers` page. At the end of the URL alway will have `/topping/topping_name`)
- [Single Pizza page](http://localhost:8000/pizza/cluck-norris)(This URL is for the `Cluck Norris` pizza. At the end of the URL alway will have `/pizza/pizza_slug`)
- [Slicemaster page](http://localhost:8000/slicemaster)(This page has `pagination` so the `URL` will begin with `/` for the first page and will add a number for the other page at the end of the `URL`)
- [Single Slicemaster page](http://localhost:8000/slicemasters/august)(This URL is for `August`. At the end of the URL alway will have `/slicemasters/slug_of_a_person`)

## Step to run the example

### Frontend side of the application

- On your terminal go to the `gatsby` directory
- Create a file called `.env`
- Add the following information to the following `env` variables
  ```bash
  SANITY_TOKEN = your_sanity_token
  SANITY_PROJECT_ID = 'your_sanity_project_id'
  GATSBY_PAGE_SIZE=2
  ```
- Install all dependencies using: `npm install`
- Run your local server using: `npm start`

### CMS of the application

- On another tab of your terminal go to the `sanity` directory
- Install all dependencies using: `npm install`
- If it is the first time; follow the steps on the `Create your sanity project and deploy graphQL API` section bellow then back on here if not continue with the next step
- If you need example data for `sanity` follow the steps on the `Import sample date to sanity` section bellow; you can skip this step if you want
- Start your local server using: `npm start`

#### Create your sanity project and deploy graphQL API

- Now configure your project using: `sanity init --reconfigure`
- Choose `create a new project` and put a name for it
- Add your `dataset`(You can use the default `production` dataset)
- Deploy the `graphQL` API on `Sanity` using:
  `sanity graphql deploy name_of_your_dataset`

#### Import sample date to sanity

- On your terminal use the following command on the `sanity` directory
  `sanity dataset import ./sample-data/all-sample-data.gz name_of_your_dataset`
