// import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Contact from "@/views/Contact.vue"
import Produk from "@/views/Produk.vue"
import Detail from "@/views/Detail.vue"
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "HomeR",
        component: Home
    },
    {
        path: "/about",
        name: "AboutR",
        component: About
    },
    {
        path: "/contact",
        name: "ContactR",
        component: Contact
    },
    {
        path: "/produk",
        name: "ProdukR",
        component: Produk
    },
    {
        path: "/detail/:id_produk",
        name: "DetailR",
        component: Detail,
        props: true,
    },

];

const router = new Router({
    routes,
    mode: "history",
});

export default router;