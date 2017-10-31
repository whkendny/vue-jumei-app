<template>
  <div id="app">
    <router-view></router-view>
    <!--tab 导航-->
    <tabbar v-show="isTab"></tabbar>
  </div>
</template>

<script>
  // @ 是 "/src"的别名, 详见 webpack.base.conf.js
import tabbar from '@/components/Tabbar.vue'
export default {
  // 组件在它的模板内可以递归地调用自己，只有当它有 name 选项时才可以。
  // https://cn.vuejs.org/v2/api/#name
  name: 'app',
  components: {
    tabbar: tabbar
  },

  created () {
    this.$router.push('/index/page1')
//    storage ==> window.localStorage
//    判断是否有添加的商品
    if(!storage['cart']) {
      storage.setItem('cart', '[]')
    } else {
      // 添加购买的物品
      this.$store.state.cart.added = JSON.parse(storage['cart'])
    }
  },

  computed: {
  //tab切换
    isTab () {
//Vue组件中获得Vuex状态的方法:  在计算属性中返回tabHidden状态,
//      所有子组件通过 this.$store可以访问到在根实例中注册的store
  //是否隐藏tab
      return this.$store.state.tabHidden
    }
  },

  watch: {
// 监听路由的改变
    '$route' () {
      if(!this.$store.state.tabHidden) {
//          在组件中分发action  https://vuex.vuejs.org/zh-cn/actions.html
        this.$store.dispatch('tabHidden')
      }
    }
  }

}
</script>

<style lang="stylus" type="stylesheet/stylus">
@import 'common/stylus/mixin.styl';
.mint-msgbox
  .mint-msgbox-content
    padding 0.3rem
    border none
  .mint-msgbox-btns
    padding-bottom .3rem
    .mint-msgbox-btn
      border-radius 10rem
      margin .1rem .4rem
      background #ddd
      color #fff
    .mint-msgbox-confirm
      background mainColor
      color #fff

</style>
