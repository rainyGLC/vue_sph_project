//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes';
//使用插件
Vue.use(VueRouter)

import store from '@/store';


//先把VueRouter原型对象的push,先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来push方法，你往哪里跳转（传递哪里参数）
//第二个参数：成功回调
//第三个参数：失败的回调

VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve && reject) {
    //call||apply区别；相同点，都可以调用函数一次，都可以篡改函数的上下文一次
    //call与apply不同点：call传递参数用逗号隔开，apply方法执行，传递数组
    originPush.call(this,location,resolve,reject)
  } else {
    originPush.call(this,location,()=>{ },()=>{ });
  }
}


VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve && reject) {
    //call||apply区别；相同点，都可以调用函数一次，都可以篡改函数的上下文一次
    //call与apply不同点：call传递参数用逗号隔开，apply方法执行，传递数组
    originReplace.call(this,location,resolve,reject)
  } else {
    originReplace.call(this,location,()=>{ },()=>{ });
  }
}


//配置路由
let router = new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(to,from,savedPosition) {
    //返回的这个y=0,代表的滚动条在最上方
    return { y:0}
  }
})

//全局守卫，前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to,from,next)=>{
  //to:可以获取到你要跳转到那个路由信息
  //from:可以获取到你从哪个路由而来的信息4
  //next:放行函数next();
  //next(path) 放行到指定的函数
  next();
  //用户登录了，才会有token,未登录一定不会有token
  let token = store.state.user.token;
  //用户信息
  let name = store.state.user.userInfo.name;
  //用户已经登录了
  if(token){
    //用户已经登录了还想去login(不能去，停留在首页)
    if(to.path=='/login'){
      next('/home')
    } else {
      //登录了，但是去的不是login
      //如果用户名已有
      if(name) {
        next()
      } else {
        //没有用户信息，派发action让仓库存储用户信息再跳转
       try {
        //获取用户信息成功
        await store.dispatch('getUserInfo');
        next();
       } catch (error) {
        //token失效了获取不到用户信息，重新登录
        //清除token
        await store.dispatch('userLogout');
        next('/login');
       }
      }
    }
  } else {
    //未登录，不能访问交易相关页面，不能去支付相关的(pay|paysuccess) ，不能去个人中心
    // console.log(to.path) 未登录去上面这些路由---登录再去

    let toPath = to.path;
    if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1) {
      //把未登录的时候想去而没有去成的信息，存储于地址栏中【路由】
      next('/login?redirect='+toPath);
    } else {
      //去的不是上面这些路由（home|search|shopcart）---放行
      next();
    }
   
  }
})

export default  router