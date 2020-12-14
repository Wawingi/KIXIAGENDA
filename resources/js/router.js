import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
Vue.use(Router);

const routes = [
    {
        path:'/home',
        name:'home',
        component: Home,
        children:[
            {
                path:'',
                name:'dashboard',
                component:() => import('./views/Dashboard.vue')
            },
            {
                path:'assessores',
                name:'assessores',
                component:() => import('./views/AssessoresConta.vue')
            },
            {
                path:'meuPerfil',
                name:'meuPerfil',
                component:() => import('./views/Perfil.vue')
            },
            {
                path:'minhasActividades',
                name:'minhasActividades',
                component:() => import('./views/MinhasActividades.vue')
            },
            {
                path:'verActividade/:id',
                name:'verActividade',
                component:() => import('./views/VerActividade.vue')
            },
        ]
    },
    {
        path:'/',
        name:'login',
        component:Login,
    }
]

const router = new Router({
    routes: routes
});

export default router;