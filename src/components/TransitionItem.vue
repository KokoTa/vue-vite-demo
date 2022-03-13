<template>
  <div>
    <transition name="rotate">
      <h1 v-if="rotateShow">Rotate Animation</h1>
    </transition>
    <button @click="rotateShow = !rotateShow">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotateShow: false
    };
  },
};
</script>

<style lang="scss" scoped>
.rotate-enter-active {
  animation: rotate-animation 2s ease-out;
}
.rotate-leave-active {
  animation: rotate-animation 2s ease-in reverse;
}

@keyframes rotate-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
