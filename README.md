# Xarerp - Client

System to manage sales, inventory, employees, stores and more.

## Developed with

* [React](https://reactjs.org/)
* [Styled Components](https://styled-components.com/)
* [Recharts](https://recharts.org/en-US/)
* [Axios](https://axios-http.com/)

This is just the front-end of the application, to get the back-end (API created in Node), go to: [Xarerp - API](https://github.com/DanielMafra/xarerp-api)

You can view a demo of the front-end with the mocked back-end (using localStorage and with some limited functions) by [clicking here](https://danielmafra.github.io/xarerp/).

### Basic functionality example

![Xarerp](https://i.imgur.com/qvl8FZG.gif)

### Light and Dark theme

![Xarerp](https://i.imgur.com/5E34E2J.gif)

### Mobile breakpoint

![Xarerp](https://i.imgur.com/hdgFLyS.gif)

## Some features

* ✅ Persistence of user choices
* ✅ Login persistence (jsonwebtoken)
* ✅ State persistence with Context API and localStorage
* ✅ Protected routes
* ✅ Routes with access permissions based on the logged in user
* ✅ CRUD for each registration functionality
* ✅ Rules for not allowing duplicate entries
* ✅ Search and pagination filters
* ✅ Charts with metrics from the last 7, 15 and 30 days
* ✅ Choose between dark and light theme
* ✅ Responsive for mobile

## Running the application

After having cloned the repository and accessed its folder through the terminal, run the command below

```bash
  npm install
```

* Go to /src/services/axios.ts and change baseURL to your API URL

* Make sure you have configured the API and activated it, then run the command below

```bash
  npm start
```

## Author

- Website - [Daniel Mafra](https://danielmafra.github.io)
- LinkedIn - [@danielmafradev](https://linkedin.com/in/danielmafradev)
- Instagram - [@danielmafradev](https://instagram.com/danielmafradev)
