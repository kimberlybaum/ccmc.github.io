import Vue from 'vue'
import Router from 'vue-router'
// import WeatherPanel from '/components/WeatherPanel.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    // },
    // {
    //   path: '/city/:woeid',
    //   name: 'city',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/City.vue')
    // }
  ]
})
