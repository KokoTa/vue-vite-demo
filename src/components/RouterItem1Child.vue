<template>
  <div>
    Child
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {
    console.log('child route', this.$route)
  },
};
</script>

<style lang="scss" scoped>
</style>
