import Home from '../page/flow/Home.vue'
import Learn from '../page/flow/Learn.vue'
import Login from '../page/flow/Login.vue'

const routers = [
  {
    path: '/login',
    name: 'login',
    meta: {
      hideFooter: true // 只显示页面
    },
    component: Login
  },
  {
    path: '/',
    name: 'douban',
    meta: {
      hideFooter: false
    },
    component: Home
  },
  {
    path: '/douban',
    name: 'douban',
    meta: {
      hideFooter: false// 正常显示底部栏 菜单栏 工具栏
    },
    component: Home
  },
  {
    path: '',
    name: 'douban',
    meta: {
      hideFooter: false
    },
    component: Home
  },
  {
    path: '/learn',
    meta: {
      hideFooter: false
    },
    name: 'learn',
    component: Learn
  }

]
export default routers
