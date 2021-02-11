import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import InputList from '@/components/InputList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/in/',
      name: 'InputList',
      component: InputList
    }
  ]
})
