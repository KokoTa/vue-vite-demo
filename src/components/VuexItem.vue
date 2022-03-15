<template>
  <div>
    <div>Vuex module1 count: {{ count1 }}</div>
    <button @click="handleIncrement1">increment1</button>
    <div>Vuex module2 count: {{ count2 }}</div>
    <button @click="handleIncrement2">increment2</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";


export default {
  computed: mapState({
    count1: state => state.a.count,
    count2: state => state.b.count
  }),
  methods: {
    ...mapActions([
      'a/increment',
      'b/increment'
    ]),
    handleIncrement1() {
      this['a/increment']()
    },
    handleIncrement2() {
      this['b/increment']()
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
