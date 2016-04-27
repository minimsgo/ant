export default function productsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_ALL':
      return state.concat(action.products)
    default:
      return state
  }
}
