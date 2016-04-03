const test = require('tape')
const blob = require('./')
const concat = require('concat-stream')

test('reading a blob as a stream', (t) => {
  const store = blob('https://ipfs.io/ipfs/')

  const rs = store.createReadStream('QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u')

  rs.on('error', (e) => {
    t.false(e, 'no read stream err')
    t.end()
  })

  rs.pipe(concat((file) => {
    t.equal(file.length, 5034, 'file has correct length')
    t.end()
  }))
})
