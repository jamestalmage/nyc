
var path = require('path')

var assert = require('assert')

var fork = require('child_process').spawn

var time = process.hrtime()

var workerPath = path.join(__dirname, './cache-collision-worker.js')

function doFork (offset) {
  fork(process.execPath, [workerPath, String(time[0]), String(time[1]), String(offset)], {stdio: 'inherit'})
    .on('close', function (err) {
      assert.ifError(err)
    })
}

doFork(0)
doFork(0)
doFork(0)
doFork(10000000)
doFork(10500000)
doFork(11000000)
doFork(11500000)
doFork(12000000)
doFork(12500000)
doFork(13000000)
doFork(13500000)
doFork(14000000)
doFork(14500000)
