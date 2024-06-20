# React Search Engine Application

You are implementing search/filter functionalities for an online shop application for your client. A colleague of yours has already implemented some of the functionalities requested by the client, but he is currently on holidays. You have to help finish the remaining functionalities, so the team meets the deadline.

This task uses **React Hooks** and **React Testing Library (`@testing-library/react`)**.

## Introduction

The missing functionalities include:
* Checkbox fields that allow users to display or hide specific columns in the table of products.
* Filter fields that allow users to set a range on the items prices.
* Users should be able to see the filtered or searched products in the table.
* Filtering should work when only one filter is applied (partial filtering) or both:
    * If the user provides only the "minimum price", the product price should be within the [minPrice, infinity] range.
    * If the user provides the "maximum price" only, the product price should be within the [0, maxPrice] range.
    * If the user provides both prices (minimum and maximum), the product price should be within the [minPrice, maxPrice] range.
    * If the user provides negative price filters, then all rules above still apply - no products are expected to have negative price (e.g. minPrice:-50, maxPrice:-10 will return no results). The same applies to `0` filters - if the user applies [0, 0] filters, no products are expected to have price equal to zero (minPrice:0, maxPrice: 0).

## Problem Statement

Your task is to:

* Make sure that products are imported from the `products.json` inside `/src/assets/` folder, which will be used for the search/filter functionalities.
* Put the imported data in the `products` array in the `ProductSearch` component.
* Implement the toggle functionality by adding a handler to the checkbox change in the `ColumnToggle` component.
* Pass a columns object to the `ProductTable` and reflect the change in the checkbox appropriately (by displaying or hiding the column).
* Pass the filtered products to the `ProductTable` component, so they get displayed in the table.
* Show each item from the passed prop in the table inside the `ProductTable` component.
* Pass the `minPrice` and the `maxPrice` attributes to the `ProductFilters` component as props.
* Implement the change input and submit the form handlers to the `ProductFilters` component.
* Change the filtered products that are displayed in the `ProductTable`, so that it only contains the products with a price within the specified range.

Note that you're not allowed to change names or signatures of functions passed to components as properties.

For more details, please run the task on the Devskiller platform and see the failing tests.

## Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm run test:watch` – run all tests in _watch mode_ (alternative to `npm test` which you might find more convenient to use locally)
4. `npm start` – (optional) serve the application locally at [http://localhost:3000/](http://localhost:3000/) (it won't be used to evaluate your solutions)
5. `nvm install` - (optional) set up the expected _major_ version of Node.js locally ([`nvm`](https://github.com/nvm-sh/nvm) required; Node.js version defined in `.nvmrc` file)

This application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

**Good Luck!**
