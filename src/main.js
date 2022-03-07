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
      component: RouterItem1Vue
    },
    {
      path: '/route-2',
      component: RouterItem2Vue
    },
    {
      path: '/:notFound(.*)*',
      component: RouterNotFoundVue
    }
  ]
})

router.beforeEach((to, from) => {
  return '/'
});

app.use(router)

app.mount('#app')
