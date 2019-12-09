import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from "./contexts/ProductContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// import { remove } from 'jest-util/build/preRunMessage';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
		
	};

	// apparently this was a stretch goal
	const removeItem = item => {
		// console.log(item)

		cart.splice(item.i, 1)
		// console.log(cart)
	}

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>

			<Route
				exact
				path="/"
				component={Products}
				// render={() => (
				// 	<Products
				// 		products={products}
				// 		addItem={addItem}
				// 	/>
				// )}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} removeItem={removeItem}/>}
			/>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
