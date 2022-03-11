# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](/_material/flap-app.png)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styling
- [Countries Rest API](https://restcountries.com/) - API for Country Information
- [React Router](https://reactrouter.com/docs/en/v6) - React Router
- Tailwind Custom Colors
- Tailwind Custom Classes

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I extensively learned how to use new state management methods with the useContext hooks and how to implement these in a React Router environment. My previous project would've been so much easier if I knew about it :) In React Router I learned more about the useParams hook and how to generate sites off the params and the API.
Also I worked way more with Tailwind than before. I love how you never have to leave the .js files and React + Tailwind enables you to combbine logic, document elements and styling in one document.
Additionally this is the first time I implemented a filter on rendered elements on the home page by filtering the API objects that were returned.
This was also the first time I implemented a dark theme switch with tailwind and a useDarkTheme hook.

The javascript filter I used below:

```js
countriesData
        // Filter for region filter
        .filter((country) => {
          if (!filter) return true;
          if (filter === "All") return true;
          let region = country.region;
          return region === filter ? true : false;
        })
        // Filter for search field
        .filter((country) => {
          if (!query) return true;
          let name = country.name.toLowerCase();
          return name.startsWith(query.toLowerCase());
        })
        // Map all/filtered countries to page
        .map((country) => (
          /* Country Card */
          <Link to={`/${country.alpha3Code}`} key={`card-${country.name}`}>
            <div>All country information here</div>
          </Link>
```

### Continued development

I still need to finish the design of the detail pages and the layout of the country cards on the home page. They're still too far apart when only 2-3 countries are displayed in a row because of "flex justify-between".

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Author - [Christian Graumann](https://www.christiangraumann.de/)
- LinkedIn - [@LinkedIn](https://www.linkedin.com/in/christian-graumann-0a3637158/)
