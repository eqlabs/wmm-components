
const plugin = require('ilp-plugin')()

async function run () {
  await plugin.connect()
  debugger
  await plugin.sendData(/* ... */)
  process.exit(0)
}

run()
