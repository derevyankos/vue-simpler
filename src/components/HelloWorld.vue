<template>
  <h1>{{ msg }}</h1>
  <s-btn @click="count++">count is: {{ count }}</s-btn>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
