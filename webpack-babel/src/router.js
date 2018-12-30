import VueRouter from 'vue-router'
import account from './main/account.vue'
import goodlist from './main/goodlist.vue'
import Login from './submain/Login.vue'
import register from './submain/register.vue'
let router = new VueRouter({
  routes: [
    {
      path: '/account', component: account, children: [
        { path: 'Login', component: Login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodlist', component: goodlist }
  ]
})
export default router