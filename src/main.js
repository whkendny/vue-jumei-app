// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'  //前面是命名对象
import store from './store/index.js'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './common/stylus/index.styl'
import VueTouch from 'vue-touch'

// 设置存储
global.storage = window.localStorage;

// 默认设置axios请求
// axios.default.baseUrl = 'http://localhost:3000/'  //设置默认请求的前缀
// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true //允许跨域
global.axios = axios //设置为全局引用

// Vue.prototype.$http = axios //在vue的原型链上添加axios
Vue.config.productionTip = false  //关闭生产模式下给出的提示

Vue.use(MintUI)
//{name:'v-touch'}的作用 声明一个以v-touch的标签
Vue.use(VueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 选择了standalone方式， https://segmentfault.com/q/1010000007723106?_ea=1435549
  template: '<App/>',
  components: { App }
})
