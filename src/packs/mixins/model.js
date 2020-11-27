export default {
  data() {
    const key = Object.keys(this.$attrs).filter((k) => k.startsWith('onUpdate:'))[0]
    return {
      modelUpKey: key,
      modelGetKey: key.split(':')[1],
      modelName: this.name || key,
      modelUp: (v) => {
        this.$attrs[key](this.val)
      }
    }
  },

  computed: {
    modelVal(){
      return this.$attrs[this.modelGetKey]
    },
  }
}