<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">Hello world</router-link>
  <router-link to="/gmap">Goole Maps</router-link>
  <div id="content">
    <router-view />
  </div>
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
