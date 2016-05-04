const API_ROOT = 'http://localhost:3000/api/'

async function callApi(endpoint, method, body) {
  // const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  const url = API_ROOT + endpoint

  let init = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  }
  
  init = body ?
    Object.assign(init, { body: JSON.stringify(body) }) :
    init
  
  const request = new Request(url, init)
  const response = await fetch(request)
  return await response.json()
}

export default callApi
// export default store => next => action => {
//   if (action.type === 'CALL_API') {
//     const request = action.request
//     callApi(request.endpoint, request.method, request.body).then(data => next({
//       type: 'CALL_API_SUCCEED',
//       payload: data,
//     }))
//   } else {
//     return next(action)
//   }
// }
