export default function selection(state = {}, action) {
  switch (action.type) {
    case 'SELECTION':
      state = action.payload
      return state
    default:
      return state
  }
}
