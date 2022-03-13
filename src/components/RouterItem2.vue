<template>
  <div>
    Route-2
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import { useRoute } from "vue-router";

export default {
  setup(props) {
    const route = useRoute()

    watch(() => route.query.name, () => {
      console.log(route.query.name)
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
