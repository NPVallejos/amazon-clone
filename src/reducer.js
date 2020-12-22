// reducer solves how data is dispatched to the data layer
export const initialState = {
    basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);

// state contains our basket & action contains the dispatched item to be added to data layer
const reducer = (state, action) => {
    const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
    );

    let basketCopy;

    switch(action.type) {
        case 'ADD_TO_BASKET':
            
            if (index >= 0) {
                basketCopy = [...state.basket];
                basketCopy[index].quantity = action.quantity;

                return { ...state, basket: basketCopy };
            }

            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'MODIFY_QUANTITY':

            if (index >= 0) {
                basketCopy = [...state.basket];

                let itemCopy = basketCopy[index];
                itemCopy.quantity = action.quantity;
                
                basketCopy.splice(index, 1); // , itemCopy);
                basketCopy.splice(index, 0, itemCopy);
            } else {
                console.warn(
                    `Cant modify product (id: ${action.id}) as its not in basket!`
                );
                return;
            }

            return {
                ...state,
                basket: basketCopy,
            };
        case 'REMOVE_FROM_BASKET':
            
            if (index >= 0) {
                basketCopy = [...state.basket];
                basketCopy.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
                return;
            }
            
            return {
                ...state,
                basket: basketCopy,
            };
        default:
            return state;

    }
    
};

export default reducer;