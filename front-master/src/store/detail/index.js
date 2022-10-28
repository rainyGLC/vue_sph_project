import {reqGoodsInfo,reqAddOrUpdateShopCart } from   '@/api';
//封装游客身份模块uuid---》生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'
const state = {
  goodInfo:{},
  //游客临时身份
  uuid_token:getUUID()
};
const mutations = {
  GETGOODINFO(state,goodInfo) {
    state.goodInfo = goodInfo
  }
};
const actions = {
  //获取产品信息的
  async getGoodInfo({commit},skuId){
    let result = await reqGoodsInfo(skuId);
    if(result.code == 200) {
      commit('GETGOODINFO',result.data)
    }
  },
  //将产品添加到购物车中
  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    //加入购物车返回的解构
    //加入购物车以后（发请求），前台将参数带给服务器
    //服务器写入数据成功，并没有返回其他的数据，只是返回code=200,代表这次操作成功
    //不需要再三连环（仓库存储数据了）
    //注意：async函数执行返回的结果一定是一个promise
    let result = await reqAddOrUpdateShopCart(skuId,skuNum);
    if(result.code == 200){
      return "ok"
    } else {
      //加入购物车失败
      return Promise.reject(new Error('faile'));
    }
  }
};
//简化数据而生
const getters = {
  //路徑導航簡化的數據
  categoryView(state){
    //比如：state.goodinfo初始状态空对象，空对象的categoryView属性值为undenfined
    //当前计算出的categoryView属性值至少一个空对象，假的报错不会有了
    return state.goodInfo.categoryView || {};
  },
  //简述产品信息的数据
  skuInfo(state){
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  }


};
export default {
  state,
  mutations,
  actions,
  getters
}