export default function products(state = [], action) {
  switch (action.type) {
    case 'RECEIVED':
      return action.payload
    default:
      return state
  }
}
