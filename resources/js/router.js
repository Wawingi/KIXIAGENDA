import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Perfil from './views/Perfil.vue';

import ActividadesConcluidas from './views/ActividadesConcluidas.vue';
import MinhasActividades from './views/MinhasActividades.vue';
import ActividadesAtrasadas from './views/ActividadesAtrasadas.vue';
import ActividadesAgendadas from './views/ActividadesAgendadas.vue';
import VerActividade from './views/VerActividade.vue';


import Assessores from './views/AssessoresConta.vue';
import Fecho from './views/FechoDiario.vue';
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
                path:'meuPerfil',
                name:'meuPerfil',
                component:Perfil
            },
            {
                path:'actividadesConcluidas',
                name:'actividadesConcluidas',
                component:ActividadesConcluidas
            },
            {
                path:'minhasActividades',
                name:'minhasActividades',
                component:MinhasActividades
            },
            {
                path:'actividadesAtrasadas',
                name:'actividadesAtrasadas',
                component:ActividadesAtrasadas
            },
            {
                path:'actividadesAgendadas',
                name:'actividadesAgendadas',
                component:ActividadesAgendadas
            },
            {
                path:'verActividade/:id',
                name:'verActividade',
                component:VerActividade
            },
            {
                path:'assessores',
                name:'assessores',
                component:Assessores
            },
            {
                path:'fechoDiario',
                name:'fechoDiario',
                component:Fecho
            }
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