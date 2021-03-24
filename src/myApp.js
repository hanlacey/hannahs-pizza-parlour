import React from 'react'

class App extends React.Component {
    state = {
        pizzas: [
            {
                name: 'Margerhita',
                imageUrl:
                    'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg',
                cost: '£5.50'
            },
            {
                name: 'Veggie',
                imageUrl:
                    'https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg',
                cost: '£6.00'
            },
            {
                name: 'Pepperoni',
                imageUrl:
                    'https://cdn.pixabay.com/photo/2020/02/04/12/14/pepperoni-4818019_1280.jpg',
                cost: "£6.50"
            }
        ],
        basket: [
            {
                Margerhita: 2,
                Veggie: 3,
                Pepperoni: 0,
            }
        ]
    }
    addtoBasket = (pizzaName) => {
        this.setState((currState) => {
            const newBasket = { ...currState.basket }
            newBasket[pizzaName]++
        })
    }
    render() {
        return (
            <div className='App'>
                <Header name="Hannah" />
                <Pizzas pizzas={this.state.pizzas} addToBasket={this.addtoBasket} />
                <Basket basket={this.state.basket} />
            </div>
        )
    }
}


// Components
const Header = (props) => {
    return (
        <header>
            <h1>{props.name}'s Pizza Parlour</h1>
        </header>
    );
};

const Pizzas = (props) => {
    return (
        <div className="App">
            <ul className="menu-list">
                {props.pizzas.map((pizza) => {
                    return (
                        < li key={pizza.name} className="menu-item" >
                            <img
                                src={pizza.imageUrl}
                                className="menu-img"
                                alt={`A freshly baked ${pizza.name}`}
                            ></img>
                            <p>{pizza.name}</p>
                            <p>{pizza.cost}</p>
                            <button onClick={() => props.addToBasket(pizza.name)}>Order</button>
                        </li>
                    );
                })}
            </ul>
        </div >
    );
}

const Basket = (props) => {
    console.log(props.basket)
    return (
        <div>
            <h2 className="basket-header">
                Basket
         <ul className="basket-body">
                    <li>'hey'</li>
                    <li>'hey'</li>
                    <li>'hey'</li>
                </ul>
            </h2>

        </div>
    )
}


// equivalent to module.exports = App
export default App;
