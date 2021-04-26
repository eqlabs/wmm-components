const categoriesObj = {
  "Web Monetized Media": ['intro', 'wallet', 'wallet-sending'],
  Examples: [
    'examples-without-backend',
    'examples-video', 'examples-audio', 'examples-streaming',
    'examples-text', 'monetizationDemos'
  ],
  'wmm-web-components': [
    'web-components-readme',
    'WmmAudio', 'WmmVideo', 'videoAndAudio',
    'WmmText',
    'common', 'WmmNotification'
  ],
  'wmm-utils': [
    'utils-readme',
    'accounts', 'receipt',
    'streamingFileMeta', 'pipeStream',
    'text',
    'client', 'monetize', 'user'
  ],
//   { type: 'link',
//     label: 'Web Monetization events',
//     href: 'http://127.0.0.1:8080/src/demos/monetizationEvents.html' }
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