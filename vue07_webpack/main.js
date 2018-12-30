import $ from 'jquery'

import './src/css/index.css'
import './src/css/1.less'
// import './src/css/2.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
$(function(){
  $('li:odd').css('backgroundColor','blue').siblings().css('backgroundColor','lightgreen')
})

//webpack 可以处理JS文件的相互依赖关系，6666啊！