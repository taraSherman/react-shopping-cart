import React, { useContext } from 'react';

// Contexts
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';

// `CartContext` passed to the `useContext` hook and assigned to `cart` variable.
function ShoppingCart() {
	const { cart, removeItem } = useContext(CartContext);

	// `props` removed
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item
					key={item.id}
					removeItem={removeItem}
					{...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
