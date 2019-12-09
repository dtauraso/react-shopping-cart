import React from 'react';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{props.cart.map((item, i) => (
				<Item key={item.id} {...item}  removeItem={props.removeItem} i={i}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
