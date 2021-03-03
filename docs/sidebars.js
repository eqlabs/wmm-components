const categoriesObj = {
  "Web Monetized Media": ['intro', 'wallet'],
  Examples: [
    'examples-video', 'examples-audio', 'examples-streaming'
  ],
  'wmm-utils': [
    'accounts', 'receipt',
    'streamingFileMeta', 'pipeStream',
    'text',
    'client', 'monetize', 'user'
  ],
  'wmm-web-components': ['WmmAudio', 'WmmVideo', 'videoAndAudio', 'WmmText'],
  Misc: [
    'styleguide', 'components', 'mdx',
    {
      type: 'link',
      label: 'Web Monetization events',
      href: 'http://127.0.0.1:8080/src/demos/monetizationEvents.html'
    },
  ]
}

const categories = []
for (const [key, value] of Object.entries(categoriesObj)) {
  categories.push({
    type: 'category',
    label: key,
    items: value,
    collapsed: false
  })
}

module.exports = {
  someSidebar: categories
}