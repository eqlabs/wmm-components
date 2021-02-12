// import fs from 'fs'

const process = require('process')
const { execSync } = require("child_process")
const fs = require('fs').promises;
const { fips } = require('crypto');

function execute(command) {
  console.log(command)
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

// copy packages and example to docs/static
execute("cp -r ./packages docs/static")
execute("cp -r ./examples docs/static")

// create documentation from code

const mdDocsPath = './docs/docs/'
const jsDocsPath = './docs/static/jsdoc/'

;(async () => {
  await createJsdocs()
  jsdocsToMarkdown()
})()


// TODO wmm-utils/backend & wmm-utils/client

async function createJsdocs() {

  for (const folder of ['wmm-utils', 'wmm-utils/backend', 'wmm-web-components']) {
    const files = await fs.readdir('./packages/'+folder)
    var t = Date.now()
    files.forEach(file => {
      if (!file.match(/\w+\.js$/)) return
      execute(`./node_modules/.bin/jsdoc packages/${folder}/${file} -d ${jsDocsPath}`)
    })
  }
}

const skipFiles = new Set(['global.html', 'index.html'])

async function jsdocsToMarkdown() {
  const docsFiles = await fs.readdir(jsDocsPath)
  for (const fName of docsFiles) {
    const correct = fName.match(/\w+\.html$/)
    if (!correct || correct[0] != fName) continue
    if (skipFiles.has(fName)) continue
    jsdocToMarkdown(jsDocsPath + fName)
  }
}

async function jsdocToMarkdown(htmlDocPath) {
  const fileName = htmlDocPath.match(/(\w+)\./)[1],
        filePath = mdDocsPath+fileName+'.md'
  var docStr = (await fs.readFile(htmlDocPath)).toString()
  docStr = `---
id: ${fileName}
---
<link type="text/css" rel="stylesheet" href="/jsDoc.css"></link>
${parseJsDocHtml(docStr)}
`
  console.log('about to write', filePath)
  fs.writeFile(filePath, docStr)
}

function parseJsDocHtml(str) {
  // condense
  str = str.split('\n').map(l => l.trim()).join('\n').replace(/\n+/g, "\n")
  // close open tags
  str = str.replace(/<br class="clear">/g, '<br class="clear" />')
  // remove head and footer
  str = str.substring(str.search('<div id="main">'), str.search("<nav>"))
  // modify link paths
  str = str.replace(/<a href\="/g, '<a href="pathname:///jsdoc/')
  return str
}