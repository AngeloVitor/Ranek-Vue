import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Produto from '../views/ProdutoId.vue'
import Login from '../views/LoginUser.vue'
import Usuario from '../views/usuario/UsuarioId.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produto/:id',
    name: 'Produto',
    component: Produto,
    props: true
  },
   {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario
  },

]

// scrollBehavior() {
//   return window.scrollTo({top: 0, behavior: "smooth"});
// }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
