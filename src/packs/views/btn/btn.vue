<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
  export default {
    sets: {
      primary: { class: 'primary' }
    }
  }
</script>