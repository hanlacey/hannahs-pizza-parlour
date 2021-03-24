# React Intro

## Getting started

Welcome to React and your very own pizza Parlour. To get up and running with this repo:

- Unzip to project to your usual sprints directory
- run `npm install` to install `react`, `react-dom`, `react-scripts` and their dependencies. (They are quite large and this may take a few minutes)
- run `npm start` to serve the app on `localhost:3000`

# Morning Tasks

- Change the name prop in the header component to your own name
- Extract the list of pizzas into it's own Menu component. The pizzas variable should remain in app however.
- Add a cost property to each pizza. Display this underneath each pizzas image.
- Uncomment the basket variable in `App` and create a new Basket component - This component should show a count of how many each each pizza has been added to the basket.
- Add a total of ordered Pizzas to the basket. Work this out from the information you already have.
- Add an order button to the basket that console.logs "Thanks for ordering" when clicked. Take a look at the React docs on [Handling Events](https://reactjs.org/docs/handling-events.html)

## Extras

- Update your basket component to use [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator). The basket should only render the count of pizzas that are above zero.
- Add an order total cost to the bottom of your basket. This should display the total cost of all pizzas in the basket in pounds and pence.

# Afternoon Tasks

- Add a remove button next to each type of pizza in the basket. When this button is clicked set the relevant pizzas basket count to 0.
- Add a Likes Component underneath the header. This should be a class component that renders the total number of likes your parlour has recieved, starting at 0.
- Add a like 👍 button to your Likes Component that adds one like to the total when clicked.

## Extras

- Add an Order Confirmation component that shows a message thanking the user for their order underneath your basket. This component should not be rendered until the user clicks the order button. (Hint: Your app may need extra information in it's state to track whether or not the user has placed an order yet)
- Once a user has ordered then they shouldn't be able to change their basket after the fact. Disable or remove the relevant buttons once the user has placed their order.
- Add an isVeggie boolean to each of your pizzas. Add some buttons to filter the list of pizzas to show either 'All' or 'Veggie only' pizzas.
- Add some buttons to sort the list of pizzas by price - Either ascending or descending.
