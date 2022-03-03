<template>
  <div>
    <button @click="open = !open">toggle modal</button>
    <teleport to='body'>
      <section v-if="open" class="modal">
        Modal is here
      </section>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
