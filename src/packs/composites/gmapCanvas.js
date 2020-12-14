const { ref } = process.$ctx

import vendorScript from "./vendorScript";

const googleMapCanvas = () => {
  const map = ref(null)

  const drawTo = (element, opts) => {
    const key = process.$conf.gmap.key

    vendorScript('googleMap', { key }, () => {
      map.value = new google.maps.Map(element, opts)
    })
  }

  return {
    map,
    drawTo
  }
}

export default googleMapCanvas