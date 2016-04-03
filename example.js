var store = require('./')
var blob = store('https://raw.githubusercontent.com/xicombd/http-blob-store/master/')

blob.createReadStream({ key: 'README.md' }).on('data', ondata)

function ondata (buf) {
  console.log(buf.toString())
}
