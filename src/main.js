import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import hidden from './directive/hidden'
import WebComponentItemCeVue from './components/WebComponentItem.ce.vue'

const app = createApp(App)

// 自定义全局指令
app.directive('hidden', hidden)

// WebComponent注册
const WebComponentItemInstance = defineCustomElement(WebComponentItemCeVue)
customElements.define('web-component', WebComponentItemInstance)

app.mount('#app')
