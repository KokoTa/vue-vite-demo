<template>
  <div class="wrap">
    <span>{{ name }}-{{ age }}</span>
    <button @click="handleClick">age + 1</button>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      age: 1
    }
  },
  methods: {
    handleClick() {
      this.age = this.age + 1
    }
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  color: green;
}
</style>
