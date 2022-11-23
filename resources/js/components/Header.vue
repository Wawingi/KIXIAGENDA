<template>
    <header id="topnav">
        <!-- Topbar Start -->
        <div class="navbar-custom">
            <div class="container-fluid">
                <ul class="list-unstyled topnav-menu float-right mb-0">
                    <li class="dropdown notification-list">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle nav-link">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </li>

                    <li class="d-none d-sm-block">
                        <form v-on:submit.prevent="pesquisarTarefa" class="app-search">
                            <div class="app-search-box">
                                <div class="input-group">
                                    <input type="text" v-model.trim="codigo" maxlength="8" class="form-control" placeholder="ex.:LD1234WA">
                                    <div class="input-group-append">
                                        <button class="btn" type="submit">
                                            <i class="fe-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>

                    <!--ALTERNATIVE PARA MOBILE-->  
                    <ul class="navigation-menu list-unstyled topnav-menu float-right mb-0">                                                                         
                        <li class="has-submenu">
                            <a
                                class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                                data-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false">
                                <img
                                    :src="'images/users/'+fotoPerfil"
                                    alt="user-image"
                                    class="rounded-circle"/>
                                <span class="pro-user-name ml-1">
                                    {{nome}}
                                    <i class="mdi mdi-chevron-down"></i>
                                </span>
                            </a>
                            <ul class="submenu">
                                <div class="dropdown-header noti-title">
                                <h5 class="text-overflow m-0">
                                    Seja Bem vindo !
                                </h5>
                            </div>  
                            <div class="dropdown-divider"></div>                           
                            <li>
                                <router-link to="/home/meuPerfil" exact>
                                    <i class="remixicon-account-circle-line"></i> Meu Perfil
                                </router-link>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li>
                                <a
                                    v-on:click="logout"
                                    class="dropdown-item notify-item btn"
                                >
                                    <i class="remixicon-logout-box-line"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                            </ul>
                        </li>
                    </ul>

                    <!--<li class="dropdown notification-list">
                        <a
                            class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false">
                            <img
                                :src="'images/users/'+fotoPerfil"
                                alt="user-image"
                                class="rounded-circle"/>
                            <span class="pro-user-name ml-1">
                                {{nome}}
                                <i class="mdi mdi-chevron-down"></i>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                           
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">
                                    Seja Bem vindo !
                                </h6>
                            </div>

                            <router-link
                                to="/home/meuPerfil"
                                class="dropdown-item notify-item"
                            >
                                <i class="remixicon-account-circle-line"></i>
                                <span>Meu Perfil</span>
                            </router-link>

                            <div class="dropdown-divider"></div>

                            <a
                                v-on:click="logout"
                                class="dropdown-item notify-item btn"
                            >
                                <i class="remixicon-logout-box-line"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>-->
                </ul> 
                <!-- LOGO -->
                <div class="logo-box">
                    <router-link to="/home" class="logo text-center">
                        <span class="logo-lg">
                            <img
                                src="images/logomarca.png"
                                width="50"
                                alt=""
                                height="50"
                            />
                        </span>
                        <span class="logo-sm">
                            <!-- <span class="logo-sm-text-dark">X</span> -->
                            <img
                                src="images/logomarca.png"
                                width="30"
                                alt=""
                                height="30"
                            />
                        </span>
                    </router-link>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!-- end Topbar -->
       
        <!-- menu -->
        <div class="topbar-menu">
            <div class="container-fluid">
                <div id="navigation">
                    <!-- Navigation Menu-->
                    <ul class="navigation-menu">
                        <li class="has-submenu">
                            <router-link  to="/home" exact>
                                <i class="remixicon-home-4-fill"></i>Inicio
                            </router-link >
                        </li>
                        <li class="has-submenu">
                            <router-link    
                                to="#" exact 
                                data-keyboard="false"
                                data-toggle="modal"
                                data-target="#modalNovaActividade">
                                <i class=" fas fa-plus-circle"></i>Registar Actividade
                            </router-link>
                        </li>
                        <li class="has-submenu">
                            <a href="#">
                                <i class="fas fa-tasks"></i>Actividades
                                <div class="arrow-down"></div>
                            </a>
                            <ul class="submenu">
                                <li>
                                    <router-link to="/home/actividadesConcluidas" exact>
                                        <i class="fas fa-check mr-1"></i> Actividades Concluídas
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/home/minhasActividades" exact>
                                        <i class="fas fa-clipboard-list mr-1"></i> Actividades em Curso
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/home/actividadesAgendadas" exact>
                                        <i class="fas fa-history mr-1"></i> Actividades Agendadas
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/home/actividadesAtrasadas" exact>
                                        <i class="fas fa-clock mr-1"></i> Actividades Atrasadas
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="has-submenu">
                            <a href="#">
                                <i class="fas fas fa-chart-line"></i>Auditoria
                                <div class="arrow-down"></div>
                            </a>
                            <ul class="submenu">
                                <li>
                                    <router-link to="/home/estatistica" exact>
                                        <i class="fas fa-chart-bar mr-1"></i> Estatistica
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/home/pesquisas" exact>
                                        <i class="fas fa-clipboard-list mr-1"></i> Histórico de Pesquisa
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                         <li class="has-submenu">
                            <router-link to="/home/assessores" exact>
                                <i class="far fa-user-circle"></i>Assessores de Conta
                            </router-link>
                        </li>
                        
                        <li class="has-submenu float-right">
                            <a href="#" onclick="window.history.back();">
                                <i class="fas fa-arrow-left"></i>Voltar
                            </a>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!-- end menu -->
    </header>
</template>
<script>   
    export default{    
        data(){
            return{
                nome:'',
                fotoPerfil:'',
                codigo:'',
            };       
        },  
        mounted(){
            this.pegaUtilizador();
        },
        methods: {        
            pegaUtilizador: async function(){
                let self = this               
                this.$axios.get('auth/pegaUtilizador')
                .then(function (response) {
                    if(response.status==200){
                        self.nome = response.data.name;                   
                        self.fotoPerfil = response.data.foto;                   
                    }
                })
                .catch(function (error) {
                        
                });
            },

            logout: async function(){
                let self = this               
                this.$axios.get('auth/logout')
                .then(function (response) {
                    if(response.status==200){
                        self.$router.push({name:'login'})                        
                    }
                })
                .catch(function (error) {
                   Swal.fire({
                        text: "Erro ao efectuar logout, tente novamente!",
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    });
                });
            },

            pesquisarTarefa: async function(){
                if(this.codigo==''){
                    Swal.fire({
                        text: "Informe o código da actividade a pesquisar",
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    });
                    return;
                } else {
                    let self = this               
                    this.$axios.get('auth/pesquisarTarefa/'+this.codigo)
                    .then(function (response) {
                        if(response.status==200){
                            self.codigo = ''; 
                            var verTarefa='#/home/verActividade/'+response.data; 
                            window.open(verTarefa, '_blank');    
                        } else if (response.status==201){
                            Swal.fire({
                                text: response.data,
                                icon: 'error',
                                confirmButtonText: 'Fechar'
                            });
                        }                        
                    })
                    .catch(function (error) {
                        Swal.fire({
                            text: "Houve erro ao pesquisar actividade.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                    });
                }
            }
        }
    };
</script>