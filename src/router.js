import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import ProductList from './pages/ProductList.vue'
import Product from './pages/Product.vue'
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:Home,
    },
    {
        path:'/product',
        name:'productlist',
        component:ProductList        
    },
    {
        path:'/product/:id',
        name:'product',
        component:Product,
        props:true
    },
];

export const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})