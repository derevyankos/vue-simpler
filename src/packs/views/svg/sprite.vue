<template lang="pug">
svg(version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
  symbol(:id="`svgIcon${name}`" v-for="(svg, name) in svgIcons" v-html="svg" viewBox='0 0 64 64')
</template>

<script>
export default {
  data() {
    return {
      svgIcons: {}
    }
  },

  mounted(){
    window.s_svg_sprite = this
  },

  methods: {
    addIcon(icon){
      if (this.svgIcons[icon]) { return false; }

      fetch(this.$svgIcons[icon]).then(r => {
        r.text().then(b => {
          this.svgIcons[icon] = b
        })
      })
    }
  }
}
</script>

