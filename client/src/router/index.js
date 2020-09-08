import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import Register from "../components/Register.vue"
import Browse from "../components/Browse.vue"
import Login from "../components/Login.vue"
import CreateInstructionGuide from "../components/CreateInstructionGuide.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/browse",
    name: "browse",
    component: Browse,
  },
  {
    path: "/browse/create",
    name: "CreateInstructionGuide",
    component: CreateInstructionGuide,
  },
]

const router = new VueRouter({
  routes,
})

export default router
