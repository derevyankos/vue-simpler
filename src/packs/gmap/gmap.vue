<template lang="pug">
div(ref="canvas" height="500px")
</template>

<script>
import useGmapCanvas from '../composites/gmapCanvas'

export default {
  setup(){
    const gmap = useGmapCanvas()
    return {
      gmap
    }
  },

  mounted(){
    const options = {
      center: {lat: 51.8985, lng: -8.4756},
      disableDefaultUI: false,
      mapTypeControl: false,
      mapTypeId: "roadmap",
      streetViewControl: false,
      zoom: 12,
    }
    console.log('mounted', options, this.$refs.canvas);
    this.gmap.drawTo(this.$refs.canvas, options)
  }
}

</script>