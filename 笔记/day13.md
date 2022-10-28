复习：
支付（element+qrcode) + 个人中心（二级路由）

1)个人中心完成
面试的是否是否封装过组件：分页器、日历
个人中心当中：分页器

2）全局守卫
未登录访问，不可访问交易相关（trade)、支付相关（pay、paysuccess）、用户中心(center)
相关跳转到登录页面

3)路由独享守卫
只要从购物车界面才能跳转到交易页面（创建订单）
只有从交易页面（创建订单）页面才能跳转支付页面
只有从支付页面才能跳转到支付成功页面

4）组件内守卫
.0

5)图片懒加载（需要安装1.3.3版本)
https://www.npmjs.com/package/vue-lazyload

vue-lazyload:图片懒加载
图片：比用用户网络不好，服务器的数据没有回来，
总不可能让用户看白色，至少有一个默认图片在展示。


8)表单验证【后台管理系统：大量使用elementUI】
以后工作的时候经常会进行表单验证【element-ui】进行表单验证，so 简单。
项目当中表单验证功能比较常见的。

8.1vee-validate插件：Vue官方提供的一个表单验证的插件【老师接下来的操作能大概看懂即可】
这个插件很难用：如果你翻看它的文档（看一个月：不保证能看懂），依赖文件很多（文档书写的很难理解）
花大量时间学习，很难搞懂。


8.2哪怕将来工作了，真的使用vee-valadiate【老师项目搞出来：改老师代码即可】


使用步骤：
1：安装vee-valadite，别安装最新版本@2
2：在plugins文件夹中创建一个validate.js[专门注册vee-valadite]
3:注册插件
4：注册插件的时候，用中文，以及需要验证的字段【用中文显示提示形式】
5：在入口文件需要引入执行一次
6:使用vee-valadiate插件


8)vee-validate 基本使用

第一步：插件安装与引入
cnpm i vee-validate@2 --save  安装的插件安装2版本的

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'   // 引入中文 message
Vue.use(VeeValidate)

第二步：提示信息
VeeValidate.Validator.localize('zh_CN', {
messages: {
...zh_CN.messages,
is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
},
attributes: { // 给校验的 field 属性名映射中文名称
phone: '手机号',
code: '验证码',
password:'密码',
password1:'确认密码',
isCheck:'协议'
}
})

第三步：基本使用
<input
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('phone') }"
        />
<span class="error-msg">{{ errors.first("phone") }}</span>

const success = await this.$validator.validateAll(); //全部表单验证
//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
validate: value => {
return value
},
getMessage: field => field + '必须同意'
})


6)打包上线
6.1 打包npm run build
项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错
所有该文件如果项目不需要是可以去除掉
vue.config.js 配置:productionSourceMap:false

6.2购买服务器

6.4xshell链接服务器与linux指令

cd /【根目录】mkdir 创建文件 ls 查看 pwd  绝对路径

ngnix
1:为什么访问服务器IP地址可以访问到项目？ ---配置一些东西
http://82.156.11.187/
刚刚在服务器上->/root/jch/www/shangpinhui/dist

2:项目的数据来自于http://39.98.123.211



6.5 nginx 反向代理
ngnix配置：
1：xshell进入根目录/etc
2：进入etc目录。这个目录下有一个ngnix目录进入到这个目录[已经安装过ngnix:如果没有安装过
,四五个文件]
3：如果想安装nginx：yum install ngnix
4:安装完ngnix服务器后，你会发现在ngnix目录下，多了一个ngnix.conf文件，在这个文件中进行配置
5：vim ngnix.conf进行编辑：
第一个问题
location / {
  root     /root/jch/www/shangpinhui/dist;
  index    index.html
  try_files  $uri  $uri/ /index.html;
}
第二个问题
location /api{
  proxy_pass http://39.98.123.211;
}
nginx服务器跑起来
servie ngnix start





