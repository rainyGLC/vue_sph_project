1)开发Search模块中的TypeNav商品分类菜（过渡动画效果）(过渡动画效果)
过渡动画：前提组件严肃务必要v-if|v-show指令才进行过渡动画

2）商品分类列表进行优化
在App根组件当中发送请求【根组件mounted】执行一次

3）合并parmas和query参数

4）开发首页当中的ListCOntainer与Floor组件
mock数据(模拟)：如果想模拟数据，需要用到插件mockjs
http://mockjs.com/


使用步骤:
1)在项目中创建mack文件夹
2)准备Json数据(mock文件夹中创建相应的JSON文件)
3)把mick数据需要的图片放置到public文件夹中
4）创建mockServe.js通过mockjs插件实现模拟数据
5)mockServer.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）

5) ListContainer组件开发重点
轮播图插件
安装Swiper插件：安装的是swiper@5
cnpm install -- save swiper@5

watch+nextTick:数据监听：监听已有数据变化
$nextTick：在下次DOM更新 循环结束之后，执行延迟回调，在修改数据之后，立即使用这个方法
，获取更新后的DOM
$nextTick:可以保证页面上的结构一定是有的，经常和很多插件一起使用【都需要DOM存在】
