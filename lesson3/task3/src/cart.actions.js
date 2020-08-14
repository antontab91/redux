export const ADD_PRODUCT = 'TRASH/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'TRASH/REMOVE_PRODUCT';


export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    }
  }
}


export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id,
    }
  }
}
