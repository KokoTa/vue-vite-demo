<template>
  <!-- 测试异步组件 -->
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
  <!-- 测试组合式API -->
  <SetupItem ref="SetupItem" user="Brain" id="setup" class="setup" />
  <button @click="$refs.SetupItem.increment">count +1</button>
  <button @click="handleChangeFatherList">random father list</button>
  <button @click="handleChangeFatherObject">random father object count</button>
  <!-- 测试自定义指令 -->
  <section>
    <input v-hidden:name="hidden" type="text">
    <button @click="hidden = !hidden">change hidden directive</button>
  </section>
  <!-- 测试 Teleport -->
  <TeleportItem />
  <!-- 测试 WebComponent -->
  <web-component name="Brain" />
  <!-- VueRoute测试 -->
  <router-link style="padding: 10px" to="/route-1">route-1</router-link>
  <router-link style="padding: 10px" to="/route-1/child">route-1-child</router-link>
  <router-link style="padding: 10px" to="/route-1?name=name">route-1-query</router-link>
  <router-link style="padding: 10px" to="/route-2">route-2</router-link>
  <router-link style="padding: 10px" to="/route-2?name=name">route-2-query</router-link>
  <router-link style="padding: 10px" to="/route-not-found/1/2/3/4/5">route-not-found</router-link>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- 测试过渡 -->
  <TransitionItem />
</template>

<script>
import { defineAsyncComponent, provide, reactive, ref } from 'vue';
import SetupItem from './components/SetupItem.vue';
import TeleportItem from './components/TeleportItem.vue';
import TransitionItem from './components/TransitionItem.vue';

export default {
  components: {
    AsyncComponent: defineAsyncComponent(() => import("./components/AsyncItem.vue")),
    SetupItem,
    TeleportItem,
    TransitionItem
},
  setup(props) {
    const fatherList = ref([1,2,3])
    const fatherObject = reactive({
      fatherCount: 24,
      fatherAge: 24
    })
    const hidden = ref(false)

    provide('fatherList', fatherList)
    provide('fatherObject', fatherObject)

    return {
      fatherList,
      fatherObject,
      hidden
    }
  },
  methods: {
    handleChangeFatherList() {
      this.fatherList = new Array(3).fill(Math.floor(Math.random() * 100))
    },
    handleChangeFatherObject() {
      this.fatherObject.fatherCount = Math.floor(Math.random() * 100)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 1000px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
