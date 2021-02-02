
const { exec } = require("child_process")

function execute(command) {
  exec(command, (error, stdout, stderr) => {
    if (error)  return console.log(`error: ${error.message}`)
    if (stderr) return console.log(`stderr: ${stderr}`)
    console.log(`\n\n${command}\n${stdout}`)
  });
}


execute("./node_modules/.bin/jsdoc packages/wmm-web-components/videoComponent.js -d ./docs/static/jsdoc")
execute("cp -rf ./packages docs/static")
execute("cp -rf ./examples docs/static")
