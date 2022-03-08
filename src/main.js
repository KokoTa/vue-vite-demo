import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import hidden from './directive/hidden'
import WebComponentItemCeVue from './components/WebComponentItem.ce.vue'
import { createRouter, createWebHistory} from 'vue-router'
import RouterItem1Vue from './components/RouterItem1.vue'
import RouterItem2Vue from './components/RouterItem2.vue'
import RouterNotFoundVue from './components/RouterNotFound.vue'

const app = createApp(App)

// 自定义全局指令
app.directive('hidden', hidden)

// WebComponent注册
const WebComponentItemInstance = defineCustomElement(WebComponentItemCeVue)
customElements.define('web-component', WebComponentItemInstance)

// 使用VueRouter
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/route-1',
      meta: {
        name: 'route1'
      },
      component: RouterItem1Vue,
      beforeEnter() {
        console.log('route-1 beforeEnter')
        return true
      }
    },
    {
      path: '/route-2',
      meta: {
        name: 'route2'
      },
      component: RouterItem2Vue,
      beforeEnter() {
        console.log('route-2 beforeEnter')
        return true
      }
    },
    {
      path: '/:notFound(.*)*',
      meta: {
        name: 'notFound'
      },
      component: RouterNotFoundVue,
      beforeEnter() {
        console.log('notFound beforeEnter')
        return true
      }
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('beforeEach')
  return true
});

router.beforeResolve((to, from) => {
  console.log('beforeResolve')
  return true
})

router.afterEach((to, from) => {
  console.log('afterEach')
  return true
})

router.onError((err) => {
  console.log(err)
})

app.use(router)

app.mount('#app')
