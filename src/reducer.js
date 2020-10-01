//  Creates the initialState variables => attached to index.js
export const initialState = {
	basket: [],
	user: null,
};

// This is a Selector
// this Selector - selects something within the state and manipulates
// it directly takes the basket and reduce which iterates through the
// basket and calculates the total based on the initial amount and the
// iteration of each item every time it iterates through the
// item.price is added to the amount which is initially set to 0
// Used in subtotal.jsx
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

//  Creates the reducer variables => attached to index.js
// Allow you to manipulate state
// state of the application, action is what you do with it
// reducers are always listening for dispatch
const reducer = (state, action) => {
	console.log(action, '<< action');
	// allows multiple actions to be defined and
	// called using switch
	switch (action.type) {
		// Allows you to add item to the shopping cart
		case 'ADD_TO_BASKET':
			return {
				// spread operator selects all of the state
				// so returing whatever the state originally was
				...state,
				// basket push all of the state
				// basket should now be whatever the basket currently was
				// and the action that action.item is defined where it is dispatched
				// dispatched in the product in this case
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);

			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id}) as it's not in the basket!`
				);
			}
			return { ...state, basket: newBasket };

		case 'SET_USER':
			return {
				// spread operator selects all of the state
				// so returing whatever the state originally was
				...state,
				// basket push all of the state
				// basket should now be whatever the basket currently was
				// and the action that action.item is defined where it is dispatched
				// dispatched in the product in this case
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
