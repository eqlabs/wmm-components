/**
 * Updates docs package docs from source code to docusaurus.
 *
 * Execute with:
 * npm run updateDocs
 *
 * With bigger refactoring some manual work may be required:
 * - make sure `srcCodeFolders` includes all folders with documented code.
 * - update docs/sidebar.js if module filenames chage (or new ones are added)
 * - in class modules the filename should alway be the same as the name of the class.
 *
 * To test with one file, run:
 * node updateDocs.js ./path/to/module/with/documentations.js
 */

const srcCodeFolders = [
  'wmm-utils/backend', 'wmm-utils/client',
  'wmm-web-components'
]

const mdDocsPath = './docs/docs/'
const jsDocsPath = './docs/static/jsdoc/'

const { execSync } = require("child_process")
const fs = require('fs').promises

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
execSilent("rm -r docs/static/packages/")
execSilent("rm -r docs/static/examples/")
execSilent("rm -r docs/static/jsdoc/")

// copy packages and example to docs/static
execute("cp -r ./packages docs/static")
execute("cp -r ./examples docs/static")

;(async () => {
  if (process.argv[2])
    executeSingle(process.argv[2])
  else
    await createJsdocs()
})()

async function createJsdocs() {
  for (const folder of srcCodeFolders) {
    const files = await fs.readdir('./packages/'+folder)
    var t = Date.now()
    for (const file of files) {
      if (!file.match(/\w+\.js$/)) continue
      await executeSingle(`packages/${folder}/${file}`)
    }
  }
}

async function executeSingle(modulePath) {
  execSilent("rm docs/static/jsdoc/global.html")
  execute(`./node_modules/.bin/jsdoc ${modulePath} -d ${jsDocsPath}`)
  return await singeDocToMarkdown(modulePath.split('/').pop())
}

async function singeDocToMarkdown(jsFile) {
  console.log('jsFile', jsFile)
  const docsFiles = await fs.readdir(jsDocsPath)
  const moduleName = jsFile.split('.')[0],
        docFile = moduleName+'.html'

  if (docsFiles.includes(docFile)) {
    await jsdocToMarkdown(jsDocsPath+docFile, moduleName)
  } else if (docsFiles.includes('global.html')) {
    await jsdocToMarkdown(jsDocsPath+'global.html', moduleName)
  } else {
    console.log(jsFile + ' - no jsdocs found')
  }
}

async function jsdocToMarkdown(htmlDocPath, moduleName) {
  const filePath = mdDocsPath+moduleName+'.md'
  var docStr = (await fs.readFile(htmlDocPath)).toString()
  docStr = `---
id: ${moduleName}
title: ${moduleName}.js
---

<!-- DO NOT EDIT - this is generated from source code using updateDocs.js -->

${parseJsDocHtml(docStr)}
`
  console.log('about to write', filePath)
  return fs.writeFile(filePath, docStr)
}

function parseJsDocHtml(str) {
  // condense
  str = str.split('\n').map(l => l.trim()).join('\n').replace(/\n+/g, "\n")
  // close open tags
  str = str.replace(/<br class="clear">/g, '<br class="clear" />')
  // remove head and footer
  str = str.substring(str.search('<div id="main">'), str.search("<nav>"))
  // Remove "Global" header
  str = str.replace(`<h1 class="page-title">Global</h1>`, '')
  // modify link paths
  str = str.replace(/<a href\="/g, '<a href="pathname:///jsdoc/')
  // cleanup comments to not trigger markdown parsing
  str = str.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
  // class => className (to not cause jsx error)
  str = str.replace(/ class="/g, ' className="')
  return str
}