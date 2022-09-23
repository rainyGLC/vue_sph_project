//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)

//引用路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
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
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{show:true}
    },
    {
      // path:'/search/:keyword?',(parmas参数可传可不传)
      // path:'/search/:keyword?',
      path:'/search/:keyword?',
      component:Search,
      meta:{show:true},
      name:"search",
      //路由组件能不能传递props数据
      //布尔值写法:params
      // props:true,
      //对象写法:额外的给路由组件传递一些props
      // props:{
      //   a:1,b:2
      // }
      //函数写法：可以params参数，query参数，通过props传递给路由组件
      // props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
    },
    {
      path:'/login',
      component:Login,
      meta:{show:false}
    },
    {
      path:'/register',
      component:Register,
      meta:{show:false}
    },
    //重定向，在项目跑起来的时候，访问/,立马让他定向到首页
    {
      path:'*',
      redirect:'/home'
    }
  ]
})