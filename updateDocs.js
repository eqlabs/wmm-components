
const { execSync } = require("child_process")

function execute(command) {
  execSync(command, (error, stdout, stderr) => {
    if (error)  return console.log(`error: ${error.message}`)
    if (stderr) return console.log(`stderr: ${stderr}`)
    console.log(`\n\n${command}\n${stdout}`)
  });
}

function execSilent(command) {
  try {
    execSync(command, (error, stdout, stderr) => {})
  } catch (err) {}
}

// remove old docs/static folders
execSilent("rm -r docs/static/jsdoc/")
execSilent("rm -r docs/static/packages/")
execSilent("rm -r docs/static/examples/")
// create documentation from code
execute("./node_modules/.bin/jsdoc packages/wmm-web-components/videoComponent.js -d ./docs/static/jsdoc")
// copy packages and example to docs/static
execute("cp -r ./packages docs/static")
execute("cp -r ./examples docs/static")
