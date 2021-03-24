import React from 'react';

class App extends React.Component {
  state = {
    pizzas: [
      {
        name: 'Margherita',
        imageUrl:
          'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg',
      },
      {
        name: 'Veggie',
        imageUrl:
          'https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg',
      },
      {
        name: 'Pepperoni',
        imageUrl:
          'https://cdn.pixabay.com/photo/2020/02/04/12/14/pepperoni-4818019_1280.jpg',
      },
    ],
    basket: {
      Margherita: 2,
      Veggie: 3,
      Pepperoni: 0,
    },
  };

  addToBasket = (pizzaName) => {
    this.setState((currState) => {
      const newBasket = { ...currState.basket };
      newBasket[pizzaName]++;
      return {
        basket: newBasket,
      };
    });
  };

  removeFromBasket = (pizzaName) => {
    this.setState(currState => {
      const newBasket = { ...currState.basket }
      console.log(newBasket)
      newBasket[pizzaName] = 0;
      return {
        basket: newBasket
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Header name="Hannah" />
        <Menu pizzas={this.state.pizzas} addToBasket={this.addToBasket} />
        <Basket basket={this.state.basket} removeFromBasket={this.removeFromBasket} />
        <Likes count="0" />
      </div>
    );
  }
}

// Components
const Menu = (props) => {
  return (
    <ul className="menu-list">
      {props.pizzas.map((pizza) => {
        return (
          <li className="menu-item" key={pizza.name}>
            <img
              className="menu-img"
              src={pizza.imageUrl}
              alt={pizza.name}
            ></img>
            <p>{pizza.name}</p>
            <button onClick={() => props.addToBasket(pizza.name)}>
              Order now
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const Basket = (props) => {
  let totalPizzas =
    props.basket.Margherita + props.basket.Veggie + props.basket.Pepperoni;

  return (
    <section>
      <h2>Basket</h2>
      <p>Margherita: {props.basket.Margherita}</p>
      <button onClick={() => props.removeFromBasket('Margherita')} > Remove from basket</button>
      <p>Veggie: {props.basket.Veggie}</p>
      <button onClick={() => props.removeFromBasket('Veggie')} > Remove from basket</button>
      <p>Pepperoni: {props.basket.Pepperoni}</p>
      <button onClick={() => props.removeFromBasket('Pepperoni')} > Remove from basket</button>
      <p>Total Pizzas : {totalPizzas}</p>
    </section>
  );
};

const Header = (props) => {
  return (
    <header>
      <h1>{props.name}'s Pizza Parlour</h1>
    </header>
  );
};

const Likes = (props) => {
  return (
    <header>
      <h2> {props.count} likes<button className="like-button">👍</button></h2>
    </header>
  )
}

export default App;
