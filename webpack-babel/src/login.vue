<template>
   <div>
     <h1>这是通过vue文件写的登录组件!!!</h1>
     <router-link to="/account">account</router-link>
     <router-link to="/goodlist">goodslist</router-link>
     <router-view></router-view>
   </div>
 </template>
 
 <script>
 export default {
   
 }
 </script>
 
 <style>
 h1 {
   color: pink;
 }
 </style>