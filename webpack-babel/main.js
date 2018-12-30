import $ from 'jquery'
import './src/css/index.css'
import './src/css/1.less'
// import './src/css/2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
// 手动安装到vue身上
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//在main.js中导入login.vue文件, 以变量接收对象
 import login from './src/login.vue'
 import router from './src/router.js'
let vm = new Vue({
  el:'#app',
  data: {
    msg: 'xxx'
  },
  render: c => c(login),
  router
})
$(function(){
  $('li:odd').css('backgroundColor','blue').siblings().css('backgroundColor','lightgreen')
})
//webpack 可以处理JS文件的相互依赖关系，6666啊！
//配置好babel后来尝es6+的高级语法吧
class Person {
  static info = {name: 'es6+的高级语法', age: 'es2015'}
}
console.log(Person.info)
