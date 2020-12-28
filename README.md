# Purpose

The purpose of this application was to familiarize myself more with React and CSS. I deployed it using Firebase, check it out here: https://challenge-ec191.firebaseapp.com/.
<br>I followed along an 8-hour youtube stream, check it out: https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=18958s.

# Stack

I used React.js and CSS for frontend and Firebase for hosting and deploying the webpage. To create the project, I used create-react-app (this uses Babel for transpilation and Webpack for bundling resources).

# How to run it on your local machine

Make sure to have the following installed in cmd (Windows 10) or bash (Linux):

- git (for windows download at https://gitforwindows.org/, otherwise type 'sudo apt install git' into bash terminal)
- node >= 8.10
- npm >= 5.6

Then:

1. Open your terminal (cmd or bash)
2. Clone the repository onto your local machine (type 'git clone https://github.com/NPVallejos/amazon-clone.git-repo-http')
3. 'cd' into the repository on your local machine (type 'cd amazon-clone)
4. Type 'npm install' to get the necessary node_modules
5. Type 'npm start' - this should open the project in your browser after a few seconds
   - If nothing opens, open your browser and type 'localhost:3000/' into the address bar

# Important Tools

- Routing Component from 'react-router'
  - Read more here: https://reactrouter.com/
- Link Component from 'react-router-dom'
  - Read more here: https://reactrouter.com/web/guides/quick-start
- React Context API
  - See StateProvider.js
  - Read more here: https://reactjs.org/docs/context.html
- Array.prototype:
  - fill()
    - Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
  - map()
    - Creates a new array populated with the results of calling a provided function on every element in the calling array
    - Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - reduce()
    - Executes a reducer function that you provide on each element of the array resulting in a single output value
    - Used to calculate Subtotal of all items added to the basket (see Subtotal.js line 24 > getBasketTotal() > reducer.js line 7)
    - Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- material-ui and material-ui/icons
  - Provides UI Icons in the form of React Components (see line 61 in Header.js for an example)
  - Check it out here: https://material-ui.com/
  - Use this to search for material-icons: https://material-ui.com/components/material-icons/
- React 'useEffect'
  - React Hook for function components
  - This will tell React that your component needs to be updated after performing DOM updates
  - Similar to React class lifecycle methods 'componentDidMount', 'componentDidUpdate', and 'componentWillUnmount'
  - See App.js line 14
    - If the user has been authenticated (previously logged in), then the user will be logged back in automatically when refreshing or restarting the application
  - Read more here: https://reactjs.org/docs/hooks-effect.html
- Firebase (see firebase.js for configuration)

# Future of this project

- I haven't finished the entire tutorial (around 4 hours in)
- The next bonus part for the project is to implement a payment page and actually purchase a product using this application
- Maybe pulling actual amazon products and add searching functionality (currently the search bar is just an aesthetic touch)
- I also created a separate branch for a new feature: a drop-down menu for each product that allows you to choose a specific quantity to add to the cart
  - So far the dropdown menu works
  - In the Checkout page the subtotal calculation accounts for the quantity added per product
  - The only issue is that the calculated subtotal isn't updating immediately after removing a product from the basket
  - You can see the branch by selecting branch 'product-quantity-ui'
