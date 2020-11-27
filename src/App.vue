<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <s-radio-fld v-model:rad="rad" val="first">First Value</s-radio-fld>
  <s-radio-fld v-model:rad="rad" val="second">Second</s-radio-fld>
  <h2>{{ rad }} || {{ rad2 }}</h2>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data(){
    return {
      rad: 'first',
      rad2: 'second'
    }
  },

  watch: {
    rad(v) {
      console.log( 'watch', v)
    }
  },
}
</script>
