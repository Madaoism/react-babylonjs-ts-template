const setFaviconUrl = (faviconUrl : String) => {
  let favicon = document.querySelector('link[rel="shortcut icon"]')
  if (!favicon) {
    favicon = document.createElement('link')
    favicon.setAttribute('rel', 'shortcut icon')
    let head = document.querySelector('head');
    if (head) head.appendChild(favicon)
  }
  favicon.setAttribute('type', 'image/png')
  favicon.setAttribute('href', faviconUrl + `?v=${new Date().getTime()}`)
}

export default setFaviconUrl;