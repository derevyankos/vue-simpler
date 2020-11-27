<template lang="pug">
label
  input(
    type="radio"
    :value="val"
    :name="modelName"
    @change="modelUp(val)"
    :checked="checked"
    :disabled="disabled"
  )
  slot
</template>

<script>
import modelMixin from '../../mixins/model.js'

export default {
  mixins: [
    modelMixin
  ],

  props: {
    val: String,
    name: String,
    disabled: Boolean,
  },

   computed: {
    checked(){
      return this.val === this.modelVal
    }
  },

}
</script>