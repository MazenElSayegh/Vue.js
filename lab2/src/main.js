import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory,createRouter } from 'vue-router';
import allusersApp from './components/allusers.vue';
import userdetailsApp from './components/userdetails.vue';
import errorApp from './components/error.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import createUser from './components/createuser.vue';
import updateUser from './components/updateuser.vue';

const routes = [
    {
        path:'/',component:allusersApp,alias:'/users',
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/users/create',component:createUser
    },
    {
        path:'/users/update/:id',component:updateUser
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
