<template>
  <div class="message-s" :class="{ 'your-own-s': $store.state.name == name }">
    <div class="name-s">
      {{ name }}
    </div>
    <div class="text-s">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatFieldMessage',
  props: ['name', 'text'],
}
</script>

<style scoped>
.message-s {
  display: grid;
  justify-items: start;
}
.your-own-s {
  justify-items: end;
}

.name-s {
  padding: 0 10px;
}

.text-s {
  --color-0: #485fc7;
  --color-1: #eff1fa;
  background-color: var(--color-1);
  color: var(--color-0);
  max-width: calc(100% - 100px);
  background-color: var;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--color-0);
}

.your-own-s .text-s {
  --color-0: #3e8ed0;
  --color-1: #eff5fb;
}
</style>
