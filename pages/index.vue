<template>
  <div class="wrapper-s">
    <div class="box card-s">
      <h1 class="title title-s">Enter your name</h1>
      <form class="form-s" @submit.prevent="addUser">
        <input class="input input-s" type="text" v-model="text" />
        <input class="button is-info button-s" type="submit" value="add" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    text: '',
  }),
  methods: {
    ...mapMutations(['setName']),
    addUser() {
      if (this.text) {
        this.setName(this.text)
        this.$router.push('chat')
      }
    },
  },
  computed: {
    ...mapState(['name']),
  },
  created() {
    if (this.name) {
      this.$router.push('chat')
    }
  },
}
</script>

<style scoped>
.wrapper-s {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-s {
  width: 100%;
  max-width: 600px;
}

.form-s {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.input-s {
  max-width: 300px;
}

.button-s {
  margin-left: 20px;
}
.title-s {
  text-align: center;
}
</style>
