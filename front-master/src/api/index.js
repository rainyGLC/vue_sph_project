//当前这个模块：API进行统一管理
import requests  from "./request";
import mockRequests from "./mockAjax"
//三级联动接口
///api/product/getBaseCategoryList  get   无参数
// export const reqCategoryList = () =>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqCategoryList = () =>requests.get('/product/getBaseCategoryList');


//获取banner(Home首页轮播图接口)
export const reqGetBannerList = ()=>mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')