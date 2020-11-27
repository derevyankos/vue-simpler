<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <s-svg-sprite/>
  <h2>Bla Bla car</h2>
  <s-svg-link class="xs primary" icon="car"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>
