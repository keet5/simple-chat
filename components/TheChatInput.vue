<template>
  <div class="chat-input-s">
    <button class="button-s button-back-s" @click="changeName"><</button>
    <form class="form-s" @submit.prevent="send">
      <VTextarea class="textarea-s" v-model="text" />
      <button class="button-s" :disabled="sendDisabled">
        <img class="icon-s" src="../static/send.svg" />
      </button>
    </form>
  </div>
</template>

<script>
import VTextarea from './VTextarea.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TheChatInput',
  components: {
    VTextarea,
  },
  data: () => ({
    text: '',
  }),
  methods: {
    ...mapMutations(['setName']),
    send() {
      if (this.text) {
        this.$store.dispatch('send', this.text)
        this.text = ''
      }
    },
    changeName() {
      this.setName(null)
      this.$router.push('/')
    },
  },
  computed: {
    sendDisabled() {
      return !this.text.length
    },
  },
}
</script>

<style scoped>
.chat-input-s {
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  background: white;
  padding: 20px;
  border-top: 1px solid #e7e8ec;
  align-items: center;
  align-content: center;
}

.form-s {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  grid-gap: 10px;
}

.button-s {
  width: auto;
  height: 50px;
  width: 50px;
  padding: 0;
  border: none;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-s:disabled {
  opacity: 0.3;
}

.icon-s {
  width: 60%;
  height: 60%;
}

.button-back-s {
  font-size: 30px;
  color: #cccccc;
  width: auto;
  padding-right: 10px;
}
</style>

