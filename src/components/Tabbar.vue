<template lang="html">
  <div class="footer">
  <!--http://mint-ui.github.io/docs/#/zh-cn2/tabbar-->
    <mt-tabbar v-model="selected" fixed class="border-1px-top">
      <mt-tab-item id="首页" >
        <img :src="img1" slot="icon">首页
      </mt-tab-item>
      <mt-tab-item id="名品特卖" to="/brandSale">
        <img :src="img2" slot="icon">名品特卖
        <!-- <router-link to="brandSale">名品特卖</router-link> -->
      </mt-tab-item>
      <mt-tab-item id="直播特区" >
        <img :src="img3" slot="icon">直播特区
      </mt-tab-item>
      <mt-tab-item id="购物车" >
        <img :src="img4" slot="icon">购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img :src="img5" slot="icon">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
//      返回页面中的数据
    return {
      selected: "首页",
      img1: "static/icon/indexchoose.png",
      img2: "static/icon/brand.png",
      img3: "static/icon/live.png",
      img4: "static/icon/cart.png",
      img5: "static/icon/me.png"
    }
  },
  computed: {
    otherSelect () {
// 通过this.$store 能访问的在根组件下注册的store的实例
//      console.log('otherSelect:--',this.$store.state.selectTab)
      return this.$store.state.selectTab
    }
  },
  watch: {
    // 监听 是否从其他的页面跳转过来的数据
    //监听上面 computed 中的otherSelect()
    "otherSelect" () {
    // this.selected  选中的值
      this.selected = this.otherSelect
    },
    // this.$.router.push({name: ''})
    // 固定的书写 ""双引号里面是要监听的数据 handler是处理数据改变的函数 deep是否深度监听
    "selected": {
      //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      handler (val,oldval) { //多看文档 handler
      //  console.log('handler-selected',val,oldval, this.selected);
        //  根据路由切换页面
        if (this.selected == "首页") {
          this.$router.push('/')
          this.img1="static/icon/indexchoose.png"
        } else {
          this.img1="static/icon/index.png"
        }
        if (this.selected == "名品特卖") {
          this.$router.push('/brandsale')
          this.img2="static/icon/brandchoose.png"
        } else {
          this.img2="static/icon/brand.png"
        }
        if (this.selected == "直播特区") {
          this.$router.push('/livecommunity')
          this.img3="static/icon/livechoose.png"
        } else {
          this.img3="static/icon/live.png"
        }
        if (this.selected == "购物车") {
          this.$router.push('/shopcart')
          this.img4="static/icon/cartchoose.png"
        } else {
          this.img4="static/icon/cart.png"
        }
        if (this.selected == "我的") {
          this.$router.push('/myself')
          this.img5="static/icon/mechoose.png"
        } else {
          this.img5="static/icon/me.png"
        }
      },
//       deep:true//对象内部的属性监听，也叫深度监听
    }
  },


}
</script>

<style lang="stylus" type="stylesheet/stylus" scoped>
@import '../common/stylus/mixin.styl'
.mint-tabbar
  background #fff
  border-1px-top()
  height 1.5625rem
  padding-top -.4rem
  .mint-tab-item.is-selected
    color #FE4070
    background #fff
    text-decoration none
</style>
