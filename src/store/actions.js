import * as types from './mutation-types.js'
export default {
  // increment({commit}){
  //       commit("INCREMENT")
  //   },

  //通过commit (提交) 唤醒一个 mutation handler
  //value 是mutation的载荷(payload)
  // 参数解构
  addActivity ({commit}, value) {
    commit(types.ADDACTIVITY, value)
  },
  addGoods ({commit}, value) {
    commit(types.ADDGOODS, value)
  },
  tabHidden ({commit}) {
    commit(types.TABHIDDEN)
  },
  productInfo ({commit}, value) {
    commit(types.PRODUCTINFO, value)
  },
  selectTab ({commit}, value) {
    commit(types.SELECTTAB, value)
  },
  // 添加商品到购物车
  addToCart ({commit}, product) {
    if(product.inventory > 0) {
      commit(types.ADD_TO_CART, product)
    }
  },
  // 修改购物车商品信息
  updateThisCart ({commit}, product) {
    if (true) {
      commit(types.UPDATE_THIS_PRODUCT, product)
    }
  }


}
