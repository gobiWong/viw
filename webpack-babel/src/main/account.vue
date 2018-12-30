<template>
  <div>
    <h2>这是account组件，哦耶</h2>
    <router-link to="/account/Login">登入</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang='less'>
body {
  div {
    color: green;
  }
}
</style>


