//search模块的小仓库
import {reqGetSearchInfo} from "@/api"

const state = {
  //仓库初始化状态
  searchList:{}
}
const mutations = {
  GETSEARCHLIST(state,searchList) {
    state.searchList = searchList
  }
}
const actions = {
  //获取search模块数据
  async getSearchList({commit},params={}){
    //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    console.log(result,'oo');
    if(result.code == 200) {
      commit("GETSEARCHLIST",result.data)
    }
  }
}
//计算属性，在项目中，是为了简化仓库中数据
const getters = {
  //当前形参state,当前仓库中的state,并非大仓库中的那个state
  goodsList(state){
    //state.searchList.goodsList如果服务区数据回来了，没问题是一个数据，
    //假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
    //计算新的属性的属性据值至少返回一个数组
    return state.searchList.goodsList || []
  },
  trademarkList(){
    return state.searchList.trademarkList
  },
  attrsList(){
    return state.searchList.attrsList
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}