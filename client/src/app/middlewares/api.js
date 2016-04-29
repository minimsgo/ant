const API_ROOT = 'http://localhost:3000/api/'
//
async function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  const response = await fetch(fullUrl)
  return await response.json()
}
//
// export const CALL_API = Symbol('Call API')

export default store => next => action => {
  if (action.type === 'REQUEST') {
    const {endpoint} = action.request

    callApi(endpoint).then(data => next({
        type: 'RECEIVED',
        payload: data,
      })
    )
  } else {
    next(action)
  }
}
