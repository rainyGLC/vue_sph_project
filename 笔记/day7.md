1)分页功能实现
为什么很多项目采用分页功能，比如电商平台同是展示的数据有很多（1万+),采用分页功能
ElementUI是有相应的分页组件，使用起来超级简单那，但是前台项目目前不用【掌握自定义分页功能】

2）分页器需要哪些数据
需要知道当前是第几个：pageNo字段代表当前页数
需要知道每一个需要展示多少天数据，pageSize字段进行代表

需要知道整个分页器一共多少条数据，total字段进行代表

需要知道分页器连续页面个数：5|7【奇数】 奇数对称（好看）
总结:对于分页器而言，自定义前提需要知道四个前提条件
pageNo :当前第几个
pageSize：代表每一页展示多少条数据
total：代表整个分页一共要展示多少条数据
continue:代表分页连续页码个数

举例子：每一页3条数据   一共91条数据 【一个是31页】

对于分页器而言:很重要的一个地方即为【算出：连续页面起始数字和结束数字】

当前是第8页
6 7 8 9 10

当前是第15页
13 14 15 16 17

5)分页器动态展示？ 分为上中下【中间部分】
v-for：数组|数字|字符串|对象

6）手写一个自定义分页器功能

7）开发某个产品的详情页面
1：静态组件
当点击商品的图片的时候，跳转到详情页面，在路由跳转的时候需要带上产品的ID给详情页面

2：发请求 --->API
3：vuex --->获取产品的详情信息
vuex中还需要新增一个模块detail
需要回到大仓库中进行合并



4:动态展示组件