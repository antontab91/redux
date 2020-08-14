import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

export const initialTrash = {
  products: [],
}

const cartReducer = (state = initialTrash, action) => {
  switch (action.type) {

    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      }
    }

    case REMOVE_PRODUCT: {
      const newProducts = state.products.filter((product) => {
        return product.id !== action.payload.id
      })
      return {
        ...state,
        products: newProducts,
      }
    }
    default:

      return state;
  }
}

export default cartReducer;