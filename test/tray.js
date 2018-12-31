const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: "C:\\workspace\\bat-host\\dist\\win-unpacked\\BatHost.exe",
      args: [path.join(__dirname, '..')]
    })
    return this.app.start();
  })

  afterEach(function () {
    console.log('teste1');
  })

  it('shows an initial window', function () {
    console.log('teste2');
  })
})