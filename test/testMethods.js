import chai from 'chai'
import request from 'request'

const assert = chai.assert
const apiUrl = 'http://localhost:3000/api'

describe('methods', () => {
  describe('get', () => {
    it('get should return an array', (done) => {
      request(`${apiUrl}/orders`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          assert.equal(true, Array.isArray(JSON.parse(body))) 
        }
        done()
      })
    })
  })
})


