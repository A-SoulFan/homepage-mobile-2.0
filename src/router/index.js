import Vue from 'vue'
import Router from 'vue-router'

// 页面组件
import mainPage from '../components/mainPage/mainPage'
import personalCenter from '../components/personalCenter/personalCenter'

Vue.use(Router)

export default new Router({
  routes: [{
  path: '/',
  redirect: '/main'
  },
  {
	path: '/main',
	name: 'main',
	component: mainPage,
	meta: {keepAlive: true
	}
  },
  {
	path: '/space',
	name: 'space',
	component: personalCenter
  }]})
