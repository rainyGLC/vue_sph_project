复习：
面试时候：防抖、节流、存储
1.1加入购物车
UUID:点击加入购物车的时候，通过请求头给服务器带临时身份给服务器，
存储某一个用户购物车数据
会话存储：去存储产品的信息一级展示功能
1.2购物车功能
修改产品的数量
删除某一个产品的Id
某一个产品的勾选状态切换


1)删除选中全部产品的操作

注意：没有一次删除很多产品的接口，但是有通过ID可以删除产品的接口【一次删一个】
Promise.all([p1,p2,p3])
P1,P2,P3：每一个都是Promise对象,如果有一个Promise失败，都失败，如果都成功，返回成功

2）全选操作

3）登录与注册静态组件-(处理共用图片资源问题)

3.1登录与注册静态组件
3.2 assets文件夹————放置全部组件公共静态资源

3.3 在样式当中也可以使用@符号【src别名】,切记在前面加上~

4）注册的业务---表单验证先不做
4.1 获取验证码---/api/user/passport/sendCode/{phone}
<!-- /api/user/passport/sendCode/{phone} -->
4.2注册用户

5）登录业务
5.1 注册--通过数据库存储用户信息（名字、密码）
5.2 登录--登录成功的时候，后台为了区分你这个用户是谁-服务器下发token[令牌：唯一标识符]
登录接口：做的不完美，（一般登录成功服务器会下发token,前台持久化存储toekn，【带着token找服务器要用户信息进行展示】


6）token令牌理解

注意：vuex仓库存储数据，---不是持久化
