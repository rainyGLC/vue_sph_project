1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出Nav*igationDuplicated的警告错误？
--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误？
"vue-router": "^3.6.5" ，引用了Promise
1.2 通过给push方法传递相应的成功、失败的回调函数，可以捕获当前错误，可以解决
1.3 通过底部的代码，可以实现解决问题
this.$router.push({name:'search',params:{keyword:this.keyword},
query:{k:this.keyword.toUpperCase()}},()=>{},()=>o{});
这种写法“治标不治本，将来在别的组件当中push|replace，编程式导航还是有类似错误

1.4
this:当前组件实例(search);
this.$router属性

2:Home模块组件拆分
--先把静态页面完成
--

3:三级联动组件
---由于三级联动，在home、Search、Detail，把三级联动注册为全局组件
好处：只需要注册一次，就可以在项目任意地方s使用

4：其余静态组件
HtML+CSS+图片资源

5:postman
--postman工具测试，接口没有问题
--如果服务器返回的数据code字段为200，代表服务器返回数据成功
--整个项目中，接口前缀都有/api字样

6:axios二次封装

XHLHttpRequest、fetch、JQ、axios
6.1 为什么需要进行二次封装axios?
请求拦截器、响应拦截器：请求拦截器，可以在发请求之前处理一些业务、响应拦截器，
当服务器数据返回以后，可以处理一些事情

6.2在想当中经常API文件夹
接口当中：路径都带有/api
baseUrl:"/api"

http://xxx.xxx:8080/api

7:接口统一管理

项目很小：可以在组件的生命周期函数中发请求

项目大：axios.get('xxx');

7.1跨域问题
什么是跨域问题：协议、域名、端口号不同请求，称之为跨域
http://localhost:8080/#/home ----前端项目本地服务器
http://gmall-h5-api.atguigu.cn  ----后台服务器

JSONP、CROS、代理

8:nprogress 进度条的使用

9:vuex状态管理
9.1vuex是什么
vuex是官方提供一个插件，状态管理库，集中式管理项目中组件共用的数据

切记，并不是全部项目都需要Vuex，如果项目很小，完全不需要Vuex,如果项目很大，组件很多，数据很多，数据维护很费劲

state
mutations
actions
getters
modules


9.2 vuex的基本使用

9.3 vuex的模块化开发
如果vue版本是2.x,将vuex升到3.xx 就能解决
npm install --save vuex@3.6.2

如果vue的版本是3.x,将vuex升到4.xx就能解决
npm install --save vuex@4.0.0

vuex中 this.$store.dispatch() 与 this.$store.commit()方法的区别

this.$store.dispatch() 与 this.$store.commit()方法的区别总的来说他们只是存取方式的不同,两个方法都是传值给vuex的mutation改变state
this.$store.dispatch() ：含有异步操作，例如向后台提交数据，写法：this.$store.dispatch(‘action方法名’,值)
this.$store.commit()：同步操作，，写法：this.$store.commit(‘mutations方法名’,值)

commit同步操作
存储 this.$store.commit('changeValue',name)
取值 this.$store.state.changeValue

dispatch：异步操作
存储 this.$store.dispatch('getlists',name)
取值 this.$store.getters.getlists

dispatch:含有异步操作，数据提交到actions，可用于向后台提交数据，用actions接收，actions出来的是promise,需要asnyc
commit：同步操作，数据提交到mutations,读取数据到缓存上

state只能有mutations修改，actions获取到的数据用commit提交到mutations

