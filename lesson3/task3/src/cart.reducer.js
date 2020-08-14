import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

export const initialTrash = {
  trashProducts: [],
}

const cartReducer = (state = initialTrash, action) => {
  switch (action.type) {

    case ADD_PRODUCT: {
      return {
        ...state,
        trashProducts: state.trashProducts.concat(action.payload.product),
      }
    }

    case REMOVE_PRODUCT: {
      const newTrashProducts = state.trashProducts.filter((product) => {
        return product.id !== action.payload.id
      })
      return {
        ...state,
        trashProducts: newTrashProducts,
      }
    }
    default:

      return state;
  }
}

export default cartReducer;