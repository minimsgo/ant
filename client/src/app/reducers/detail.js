export default function detail(state = {}, action) {
  switch (action.type) {
    case 'DETAIL':
      state = action.product
      return state
    default:
      return state
  }
}
