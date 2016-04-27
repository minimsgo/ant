export default function selectedProduct(state = {}, action) {
  switch (action.type) {
    case 'SELECTED':
      state = action.product
      return state
    default:
      return state
  }
}
