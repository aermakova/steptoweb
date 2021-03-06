import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './components/Auth/SignIn.vue'
import SignUp from './components/Auth/SignUp.vue'
import Logout from './views/Logout.vue'
import Profile from './views/Profile.vue'
import ExampleAdd from './views/ExampleAdd.vue'
import Examples from './views/Examples.vue'
import Example from './views/Example.vue'
import Store from './store'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      // beforeEnter: AuthGuard
    },
    {
      path: '/examples',
      name: 'examples',
      component: Examples
    },
    {
      path: '/example/:id',
      props: true,
      name: 'example',
      component: Example
    },
    {
      path: '/example-add',
      name: 'example-add',
      component: ExampleAdd
      // beforeEnter: AuthGuard
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  mode: 'history'
})
// function AuthGuard(from, to, next) {
//   if (Store.getters.isUserAuthenticated)
//     next();
//   else
//     next('/sign-in');
// }