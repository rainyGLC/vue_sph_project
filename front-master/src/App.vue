<template>
  <div>
    <!-- 引用自定义插件小写变大写 -->
    <!-- <h1 v-upper="msg"></h1> -->
    <Header></Header>
    <!-- 路由组件入口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <!-- <Footer v-show="$route.path=='/home' || $route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>

  </div>

</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      // msg:"abc"
    }
  },
  components: {
    Header,
    Footer
  },
  mounted(){
    //派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch('categoryList');

  }
}
</script>

<style>

</style>
