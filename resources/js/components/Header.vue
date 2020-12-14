<template>
    <header id="topnav">
        <!-- Topbar Start -->
        <div class="navbar-custom corPadrao">
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
                        <!-- End mobile menu toggle-->
                    </li>

                    <li class="dropdown notification-list">
                        <a
                            class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="false"
                            aria-expanded="false"
                        >
                            <img
                                :src="'/images/users/'+fotoPerfil"
                                alt="user-image"
                                class="rounded-circle"
                            />
                            <span class="pro-user-name ml-1">
                                {{nome}}
                                <i class="mdi mdi-chevron-down"></i>
                            </span>
                        </a>
                        <div
                            class="dropdown-menu dropdown-menu-right profile-dropdown "
                        >
                            <!-- item-->
                            <div class="dropdown-header noti-title">
                                <h6 class="text-overflow m-0">
                                    Seja Bem vindo !
                                </h6>
                            </div>

                            <!-- item-->
                            <router-link
                                to="/home/meuPerfil"
                                class="dropdown-item notify-item"
                            >
                                <i class="remixicon-account-circle-line"></i>
                                <span>Meu Perfil</span>
                            </router-link>

                            <div class="dropdown-divider"></div>

                            <!-- item-->
                            <a
                                v-on:click="logout"
                                class="dropdown-item notify-item btn"
                            >
                                <i class="remixicon-logout-box-line"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <!-- LOGO -->
                <div class="logo-box">
                    <router-link to="/home" class="logo text-center">
                        <span style="margin-left:-50px" class="logo-lg">
                            <!--<p style="color:#fff">KIXIAGENDA</p>-->
                            <img
                                src="images/logo.png"
                                width="200"
                                alt=""
                                height="30"
                            />
                            <!-- <span class="logo-lg-text-light">Xeria</span> -->
                        </span>
                        <span class="logo-sm">
                            <!-- <span class="logo-sm-text-dark">X</span> -->
                            <img
                                src="/images/logo.png"
                                width="200"
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
                            <router-link to="/home" exact>
                                <i class="remixicon-home-4-fill"></i>Inicio
                            </router-link>
                        </li>
                        <li class="has-submenu">
                            <a href="#">
                                <i class="fas fa-tasks"></i>Actividades
                                <div class="arrow-down"></div>
                            </a>
                            <ul class="submenu">
                                <li>
                                    <router-link to="/home/minhasActividades" exact>
                                        <i class="fas fa-clipboard-list"></i> Minhas Actividades
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#" exact>
                                        <i class="fas fa-history"></i> Actividades Agendadas
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="#" exact>
                                        <i class="fas fa-clock"></i> Actividades Atrasadas
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="has-submenu">
                            <router-link to="/home/assessores" exact>
                                <i class="far fa-user-circle"></i>Ver Assessores de Conta
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
                fotoPerfil:''
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
                    }else{
                        alert("Error ");
                    }
                })
                .catch(function (error) {
                    alert("Erro ao carregar dados");
                });
            },

            logout: async function(){
                let self = this               
                this.$axios.get('auth/logout')
                .then(function (response) {
                    if(response.status==200){
                        alert("LOGOUT COM SUCESSO");
                        self.$router.push({name:'login'})                        
                    }else{
                        alert("LITTLE ERROR ");
                    }
                })
                .catch(function (error) {
                    alert("ERRO AO LOGOUT");
                });
            }
        }
    }
</script>