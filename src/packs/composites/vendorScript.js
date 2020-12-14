const includeJs = (src, callback) => {
  let script = document.querySelectorAll(`script[src="${src}"]`)[0]
  if (script) {
    callback(script);
  } else {
    script = document.createElement('script')
    script.setAttribute('src', src)
    script.onload = () => callback(script);
    document.head.appendChild(script);
  }
}

const preset = {
  googleMap: ({key}) => `//maps.googleapis.com/maps/api/js?libraries=places&key=${key}`
}

const useVendorScript = (keyOrSrc, opts = {}, callback) => {
  const path = preset[keyOrSrc](opts)
  includeJs(path, callback)
}

export default useVendorScript