import chai from 'chai'
import request from 'request'

const assert = chai.assert
const apiUrl = 'http://localhost:3000/api'

describe('Endpoints', () => {
  // describe('get', () => {
  //   it('get /:resource should return an array', (done) => {
  //     request(`${apiUrl}/wears`, (error, response, body) => {
  //       if (!error && response.statusCode === 200) {
  //         assert.equal(true, Array.isArray(JSON.parse(body)))
  //         done()
  //       } 
  //     })
  //   })
  // })
  // describe('post', () => {
  //   it('post /:resource should return new created resource', (done) => {
  //     request.post(`${apiUrl}/wears`,
  //       { json: { name: '衬衫' } },
  //       (err, res, body) => {
  //         console.log(body)
  //         done()
  //       })
  //   })
  // })
  // describe('put', () => {
  //   it('put /:resource should return updated resource', (done) => {
  //     request.put(`${apiUrl}/wears/11268219-fe48-4a0f-bf27-5f502870d8b0`,
  //       { json: { name: '男衬衫' } },
  //       (err, res, body) => {
  //         console.log(body)
  //         done()
  //       })
  //   })
  // })
  // describe('delete', () => {
  //   it('delete /:resource should delete resource', (done) => {
  //     request.delete(`${apiUrl}/wears/11268219-fe48-4a0f-bf27-5f502870d8b0`,
  //       (err, res, body) => {
  //         console.log(body)
  //         done()
  //       })
  //   })
  // })
  // describe('getById', () => {
  //   it('get /:resource/:id should return an object', (done) => {
  //     request(`${apiUrl}/orders/1`, (error, response, body) => {
  //       if (!error && response.statusCode === 200) {
  //         const resource = JSON.parse(body)
  //         assert.equal(
  //           true, 
  //           typeof resource === 'object' &&
  //           !Array.isArray(resource))
  //       }
  //       done()
  //     })
  //   })
  // })
})

