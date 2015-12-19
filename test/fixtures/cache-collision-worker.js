
var assert = require('assert')

var start = [
  parseInt(process.argv[2], 10),
  parseInt(process.argv[3], 10)
]

var offset = parseInt(process.argv[4], 10)

var diff = process.hrtime(start)

while (diff[0] * 1e9 + diff[1] < 5e9 + offset) {
  diff = process.hrtime(start)
}


var exports = require('./cache-collision-target');
// assert.strictEqual(exports(message), message === 'nada' ? undefined :  'this is a ' + message)

//assert.strictEqual(process.env.NYC_CWD, __dirname)
