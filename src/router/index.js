import { createRouter, createWebHistory} from 'vue-router'
import RouterItem1Vue from '../components/RouterItem1.vue'
import RouterItem1ChildVue from '../components/RouterItem1Child.vue'
import RouterItem2Vue from '../components/RouterItem2.vue'
import RouterNotFoundVue from '../components/RouterNotFound.vue'

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
      },
      children: [
        {
          path: 'child',
          meta: {
            name: 'child'
          },
          component: RouterItem1ChildVue
        }
      ]
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

export default router