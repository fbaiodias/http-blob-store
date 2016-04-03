# http-blob-store

[blob store](https://github.com/maxogden/abstract-blob-store) that stores blobs on the browser's localStorage

```
npm install http-blob-store
```

[![blob-store-compatible](https://raw.githubusercontent.com/maxogden/abstract-blob-store/master/badge.png)](https://github.com/maxogden/abstract-blob-store)

## Usage

``` js
var store = require('http-blob-store')
var blob = store('https://github.com')

blob.createReadStream({ key: '/xicombd/http-blob-store' }).on('data', ondata)
function ondata (buf) {
  console.log(buf.toString())
}
```

## License

MIT
