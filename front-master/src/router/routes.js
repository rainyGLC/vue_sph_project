//引用路由组件

import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
//引入二级路由
import MyOrder from '@/pages/Center/myOrder';
import GroupOrder from '@/pages/Center/groupOrder';



//路由配置信息
export default [
  {
    path:'/home',
    component:()=>import('@/pages/Home'), //路由懒加载
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
    path:'/detail/:skuid',
    component:Detail,
    meta:{show:true}
  },
  {
    path:'/addcartsuccess',
    name:'addcartsuccess',
    component:AddCartSuccess,
    meta:{show:true}
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{show:true}
  },
  {
    path:'/trade',
    component:Trade,
    meta:{show:true},
    //路由独享守卫
    beforeEnter:(to,from,next) => {
      //去交易页面，必须是从购物车而来
      if(from.path == "/shopcart"){
        next();
      } else {
        //其他的路由组件而来停留在当前页
        next(false);
      }
    }
  },
  {
    path:'/pay',
    component:Pay,
    meta:{show:true},
    beforeEnter:(to,from,next)=>{
      if(from.path=="/trade") {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path:'/paysuccess',
    component:PaySuccess,
    meta:{show:true}
  },
  {
    path:'/center',
    component:Center,
    meta:{show:true},
    //二级路由组件
    children:[
      {
        path:'myorder',
        component:MyOrder,
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'/center',
        redirect:'/center/myorder'
      }
    ]
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