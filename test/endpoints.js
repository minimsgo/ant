import chai from 'chai'
import request from 'request'

const assert = chai.assert
const apiUrl = 'http://localhost:3000/api'

describe('Endpoints', () => {
  describe('get', () => {
    it('get /resources should return an array', (done) => {
      request(`${apiUrl}/some-resource`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          assert.equal(true, Array.isArray(JSON.parse(body)))
        }
        done()
      })
    })
  })
})

