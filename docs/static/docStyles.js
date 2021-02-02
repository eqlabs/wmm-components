
// IFrame styles:

const mainContainerClass = "docMainContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-",
      colClass = "docItemCol_node_modules-@docusaurus-theme-classic-lib-theme-DocItem-",
      colContainerClass = "docItemContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocItem-"

var stylingAdded = false

export const runIframeStyles = () => {
  console.log('runIframeStyles runIframeStyles runIframeStyles')
  if (typeof window == 'undefined') return
  // if (stylingAdded) return
  // stylingAdded = true
  if (document.readyState === "complete")
    setTimeout(styleIframe, 100)
  else
    window.addEventListener('load', styleIframe)
}

function styleIframe() {
  window.removeEventListener('load', styleIframe)
  document.body.querySelector('article h1')?.remove()
  const iframe = document.querySelector('iframe')
  if (!iframe) return console.log('no iframe..')
  // Make room horizontally:
  const column = getParent(iframe, colClass)
  column?.nextSibling?.remove()
  column?.classList?.remove(colClass)
  // Make room vertically:
  getParent(iframe,colContainerClass)?.classList.remove(colContainerClass)
  const article = iframe.parentElement.parentElement
  article?.nextSibling?.remove()
  article?.nextSibling?.remove()
  // Resize to container
  getParent(iframe, 'container')?.classList.remove('container', 'padding-vert--lg')
  // debugger
  const mainContainer = getParent(iframe, mainContainerClass)
  console.log('container height', mainContainer.clientHeight)
  iframe.height = mainContainer.clientHeight
  iframe.width = mainContainer.clientWidth
  iframe.style.border = 'none'
}

function getParent(node, className) {
  while (node && (node = node.parentElement)) {
    if (node.classList.contains(className)) {
      return node;
    }
  }
}