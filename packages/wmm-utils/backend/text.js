import fs from 'fs'

/**
 * Text file content and word count as paragrapshs.
 * filename => {
 *   paragraphs: [paragraphs],
 *   wordCount: [words per paragraph]
 * }
 */
export const texts = {}

export async function initTexts(mediaPath) {
  console.log('ABOUT TO INIT')
  const dir = await fs.promises.readdir(mediaPath)
  for (const file of dir) {
    const cont = await fs.promises.readFile(mediaPath+file)
    parseTextFile(file, await cont.toString())
    parseWordCount(file)
  }
  return dir
}

function parseTextFile(file, text) {
  // could be markdown?
  texts[file] = {
    paragraphs: text.split(/\n\n+/g)
  }
}

function parseWordCount(file) {
  texts[file].wordCount = []
  texts[file].paragraphs.forEach((p, ind) => {
    texts[file].wordCount[ind] = p.split(/ +/).length
  })
}