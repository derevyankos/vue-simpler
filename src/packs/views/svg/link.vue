<template lang="pug">
svg
  use(:xlink:href="`#svgIcon${icon}`")
</template>

<script>
export default {
  props: ['icon'],

  mounted(){
    window.s_svg_sprite.addIcon(this.icon)
  }
}
</script>

<style scoped>
svg.md {
  width: 32px;
  height: 32px;
}

svg.lg {
  width: 50px;
  height: 50px;
}

svg.s {
  width: 20px;
  height: 20px;
}

svg.xs {
  width: 15px;
  height: 15px;
}

svg.primary, svg.primary.f, svg.primary, svg.primary .f {
  fill: #E46040;
}

svg.dark, svg.dark.f, svg.dark, svg.dark .f {
  fill: #444444;
}

svg.blue, svg.blue.f, svg.blue, svg.blue .f {
  fill: #1541A2;
}
</style>
