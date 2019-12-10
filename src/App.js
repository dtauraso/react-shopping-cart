import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// import { remove } from 'jest-util/build/preRunMessage';

function App() {
	const [products] = useState(data);
	// {id : cartItem}
	const [cart, setCart] = useLocalStorage('cart', [])//useState([]);

	const addItem = item => {
		// if(key not in cart) its a new item
		
		// add the given item to the cart
		setCart([...cart, item])
		
	};

	// apparently this was a stretch goal
	const removeItem = item => {
		// console.log(item)
		// setCart(cart[0: item.i], cart[item.i + 1:])
		// mutate cart
		// console.log(cart[item.i])

		// replacing the item with "delete" for filter to look for
		// cart.splice(item.i, 1, "delete")
		// console.log(cart[item.i])

		// forces react to refresh
		setCart(cart.filter((cartItem, i) => i !== item.i))
		// console.log(cart)
	}

	return (
		<div className="App">

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
				<Navigation/>

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
						component={ShoppingCart}
						// render={() => <ShoppingCart cart={cart} removeItem={removeItem}/>}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
