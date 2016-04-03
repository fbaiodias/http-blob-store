const Wreck = require('wreck')
const Stream = require('stream')

module.exports = BlobStore

function BlobStore (opts) {
  if (!(this instanceof BlobStore)) return new BlobStore(opts)

  if (typeof opts === 'string') opts = { baseUrl: opts }
  this.baseUrl = opts && opts.baseUrl || ''
}

BlobStore.prototype.createReadStream = function (opts) {
  if (typeof opts === 'string') opts = { key: opts }

  const rs = new Stream()
  rs.readable = true

  Wreck.request('GET', this.baseUrl + opts.key, {}, (_, res) => {
    res.on('data', (data) => {
      rs.emit('data', data)
    })
    res.on('end', (data) => {
      rs.emit('end')
    })
  })

  return rs
}
