import VueRouter from 'vue-router';
import index from './components/templates/hero.vue'
import login from './components/login.vue'
import userpage from './components/userpage.vue'
export default new VueRouter({
    routes: [
      {path:'/', component: index},
      {path:'/login', component:login},
      {path:'/userpage',component:userpage}
    ]
});