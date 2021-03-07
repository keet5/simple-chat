<template>
  <div class="field-s">
    <div class=".row" v-for="(message, n) of data" :key="n">
      <Message v-bind="message" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Message from './ChatFieldMessage.vue'

export default {
  name: 'TheChatField',
  components: {
    Message,
  },
  computed: {
    ...mapState(['data', 'name']),
  },
  watch: {
    data() {
      this.$nextTick(() => window.scrollTo(0, document.body.scrollHeight))
    },
  },
}
</script>

<style>
.field-s {
  display: grid;
  grid-auto-rows: auto;
  width: 100%;
  padding: 20px;
  grid-gap: 20px;
  align-content: end;
  min-height: 100%;
}
</style>
