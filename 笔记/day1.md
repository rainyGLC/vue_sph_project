1:vue-cli脚手架初始化项目
node+webpack+淘宝镜像

node_module文件夹：项目依赖文件夹

public文件夹：一般也是放置静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候会原封不动打包到dist文件中

src文件夹(程序员源代码文件夹)：

    assets文件夹：一般也是放置静态资源(一般放置多个组件共用的静态资源)，需要注意的是，放置在assets文件夹里面静态资源，在webpack打包的时候，webpack会把静态资源当作一个模块，打包JS文件里面
    components文件夹：一般放置的是非路由组件（全局组件）
    App.vue：唯一的根组件，Vue中的组件
    main.js：程序入口文件，也是整个程序当中最先执行的文件

babel.config.js:配置文件(babel相关)
package.json文件：认为项目‘身份证’,记录项目叫做什么，项目当中有哪些依赖、项目怎么运行

package-lock.json ：缓存性文件

README.md 说明行文件

2.项目的其他配置
2.1 项目运行起来的时候，让浏览器自动打开
--package.json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "
    vue-cli-service lint"
  }

2.2 eslint校检功能关闭
在根目录下，创建一个vue.cinfing.js
比如：声明变量但是没有使用eslint校验工具

module.exports = defineConfig({
  //关闭eslint
  lintOnSave:false
})

2.3 src文件夹简写方法，配置别名
配置别名为@提示，【@代表的是src文件夹，这样将来文件过多，找的时候方便很多】
创建jsconfig.json文件
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}

3：项目路由的分析

前端所谓路由：KV键值对
确定项目结构顺序:上中下 -----只有中间部分的V在发生变化，中间部分应该使用的是路由组件
2个非路由组件|四个路由组件
两个非路由组件：Header 、Footer
路由组件:Home、Search、Login（没有底部的Footer组件，带有二维码的）、Register（没有底部的Footer组件，带二维码的）

4、完成非路由组件Header与Footer业务
主要搞业务、逻辑
1：书写静态页面（HTML+CSS）
2：拆分组件
3：获取服务器的数据动态展示
4：完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构+组件的样式+图片资源
注意2：项目采用的less样式，浏览器不识别less样式，需要通过less\less-loader进行处理

5.路由组件的搭建
vue-router 
vue2 对应 vue-router3
vue3 对应 vue-router4
根据需求安装
# vue2对应版本
npm i vue-router@3
# vue3对应版本
npm i vue-router@2


在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register
-components文件夹：经常放非路由组件(共用全局组件)
-pages|views文件夹：经常放置路由组件

5.1配置路由
项目中配置的路由一般放置在router文件夹

5.2 总结
路由组件与非路由组件的区别？
1：路由组件一般放置在pages | views文件夹，非路由组件一般放置components文件夹中
2：路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候
一般都是以标签的形式使用
3.注册完路由，不管路由组件、还是非路由组件身上都有$route、$router属性

$route:一般获取路由信息【路径、query、params等等】
$router：一般编程式导航进行路由跳转【push|replce】

5.3路由的跳转
路由跳转有两种形式
声明式导航router-link，可以进行路由的跳转
编程式导航push|replace,可以进行路由的跳转

编程式导航：声明式导航能做的，编程式导航都能做
但是编程式导航除了可以进行l路由跳转，还可以做一些其他的业务逻辑

6. Footer组件显示与隐藏
显示或者隐藏组件：v-if|v-show
 Footer组件：在Home、search显示Footer组件
 Footer组件：在登录\注册是隐藏的
6.1 我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏
6.2 配置的路由的时候，可以给路由添加路由原信息

8路由传参
比如：A->B
声明式导航：router-link(务必要有to属性，可以实现路由的跳转)
编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转
（可以书写一些自己业务）
8.2：路由传参，参数有几种写法
params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数：不属于路径当中的一部分，类似余ajax中的queryString /home?k=v&kv=,不需要占位















