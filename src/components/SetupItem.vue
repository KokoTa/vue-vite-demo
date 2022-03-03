<template>
  <div>
    <div>User: {{ user }} - {{ userComputed }}</div>
    <div>List: {{ list }}</div>
    <button @click="getRandomList">ListRandom</button>
    <div>Count: {{ count }}</div>
    <div>FatherList: {{ fatherList }}</div>
    <div>fatherObject: {{ fatherObject }}</div>
    <div ref="div">DivRef</div>
    <div>{{ obj.a.b?.count }}</div>
    <button @click="objHandle">set nest no exist value</button>
  </div>
</template>

<script>
import { computed, h, inject, onMounted, reactive, ref, toRefs, watch } from "vue";

export default {
  props: ['user'],
  setup(props, context) {
    const { user } = toRefs(props) // 让 props 可以解构，结构出来的变量是响应式变量
    const list = ref([]) // 设置响应式变量
    const count = ref(0)
    const getList = async () => {
      list.value = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([Math.random(), Math.random(), Math.random()])
        }, 3000)
      })
    }
    const increment = () => count.value += 1
    const userComputed = computed(() => `Hello ${user.value}`)
    const div = ref(null)

    const obj = reactive({
      a: {
        b: {
          name: 1
        }
      }
    })
    const objHandle = () => {
      obj.a.b.count = Math.random()
    }

    // mounted 时执行
    onMounted(getList)
    // mounted 时检查 ref
    onMounted(() => {
      console.log(`ref div: ${div.value.innerHTML}`)
    })

    // 监听变量
    watch(list, (val) => {
      console.log(`watch list: ${val}`)
    })
    watch(user, (val) => {
      console.log(`watch user: ${val}`)
    }, { immediate: true })

    // 让方法可以被父组件发现
    context.expose({ increment })

    // 获取父组件组件传入的数据
    const fatherList = inject('fatherList')
    const fatherObject = inject('fatherObject')

    return {
      user,
      userComputed,
      list,
      getList,
      count,
      fatherList,
      fatherObject,
      div,
      obj,
      objHandle
    }
    // return () => h('div', [user.value, userComputed.value])
  },
  methods: {
    async getRandomList() {
      this.list.value = await this.getList()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
