复习：
1：完成了登录与注册的静态组件【assets文件夹：组件共用的静态资源 css当中书写@符号】
2：表单验证
3：vuex存储数据非持久化的


1)登录过后用户信息的展示
URL:/api/user/passport/auth/getUserInfo method:get
1.1当用户注册完成，用户登录【用户名+密码】向服务器发请求（组件派发action:userLogin),
登录成功获取token，仓储与仓库当中（非持久化的），路由跳转转带home首页。
1.2）因此在首页当中（mounted）派发action(getUserInfo)获取用户信息，动态展示header组件内容
1.3 一刷新home首页，获取不到用户信息（token；vuex非持久化存储）

1.4 持久化存储token
2）Header组件显示用户名与退出登录

3)持久化存储token

1.5 存在问题1，多个组件展示用户信息需要在每一个组件的mounted中出发this.$store.dispatch('getUserInfo')

1.6 存在问题2，用户已经登录了，就不会在登录页

4）退出登录

5）导航守卫
比如：用户已经登录，用户不应该还能回login页面
导航：表示路由正在发生改变，进行路由跳转
守卫：
全局守卫
路由独享守卫
组件内守卫

统一登录的账号
13700000000 111111

6)获取交易页面用户信息
用户登录了才可以获取用户地址信息，不登录没办法获取到的

