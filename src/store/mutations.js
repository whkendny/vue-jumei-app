import * as types from './mutation-types.js'
export default {
  // 加1 这里操作要大写
  //  INCREMENT(state) {
  //      state.count++;
  //  },

   //定义类似于事件的mutation
  //value 是mutation的载荷(payload)
   [types.ADDACTIVITY](state, value) {
     state.activityList = value
   },
   [types.ADDGOODS](state, value) {
     state.goodsList = value
   },
   [types.TABHIDDEN] (state) {
     state.tabHidden = !state.tabHidden
   },
   [types.PRODUCTINFO] (state, value) {
     state.productInfo = value
   },
   [types.SELECTTAB] (state, value) {
     state.selectTab = value
   }

}
