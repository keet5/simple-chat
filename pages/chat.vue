<template>
  <div class="chat-s box">
    <Field />
    <Input class="footer-s" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Field from '@/components/TheChatField.vue'
import Input from '@/components/TheChatInput.vue'

export default {
  components: {
    Field,
    Input,
  },
  computed: {
    ...mapState(['name']),
  },
  created() {
    if (!this.name) {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.chat-s {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: auto;
}

.header-s {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #e7e8ec;
  padding: 20px;
}

.footer-s {
  position: sticky;
  bottom: 0;
}
</style>
