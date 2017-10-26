import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getter from './getter.js'
import cart from './mudules/cart'

Vue.use(Vuex)

// 存放着组件中信息的状态, 这里放的是项目的全局状态
const state = {
  navState: 0,  //获取导航条的状态 (全局导航栏都可用)
  activityList: [],
  goodsList: [],
  tabHidden: true,
  productInfo: {},
  selectTab: '首页'
}

//action
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getter,
  //modules 创建局部 state
  modules: {
    cart
  }
})
