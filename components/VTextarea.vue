<template>
  <input class="input" type="text" v-model="model" />
</template>


<script>
export default {
  name: 'VTextarea',
  props: ['value'],
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style scoped>
</style>
