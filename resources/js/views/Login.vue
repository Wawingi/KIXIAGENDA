<template>
    <div>
        <div class="account-pages mt-5 mb-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card">
                        <loading :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/> 
                            <div class="card-body p-4">
                                
                                <div class="text-center w-75 m-auto">
                                    <img src="images/logomarca.png" width="50" alt="" height="50">   
                                    <p style="font-size:20px;color:#0f5b3b;font-family:arial" class="logo-lg-text-light">KIXIAGENDA</p>                 
                                </div>
                                <br><hr>
                                <form  v-on:submit.prevent="logar">

                                    <div class="form-group mb-3">
                                        <label for="emailaddress">Username</label>
                                        <input class="form-control" type="text" v-model.trim="$v.username.$model" :class="{'is-invalid':$v.username.$error, 'is-valid':!$v.username.$invalid}" placeholder="Informe o seu utilizador">
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.username.required">O nome de utilizador deve ser fornecido</span>
                                            <span v-if="!$v.username.maxLength">O nome de utilizador deve possuir 9 caractéres</span>
                                            <span v-if="!$v.username.minLength">O nome de utilizador deve possuir 9 caractéres</span>
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label for="password">Senha</label>         
                                        <input class="form-control" type="password" v-model="$v.senha.$model" :class="{'is-invalid':$v.senha.$error, 'is-valid':!$v.senha.$invalid}" placeholder="Informe a senha">                                                                                   
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.senha.required">A senha deve ser fornecido</span>
                                            <span v-if="!$v.senha.minLength">Senha muito curta</span>
                                        </div>
                                    </div>                       

                                    <div class="form-group mb-0 text-center">
                                        <button class="btn btn-success btn-block"> Entrar <i class="mr-2 fas fa-arrow-right"></i> </button>
                                    </div>

                                </form>
                                <br>
                            </div>        
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <footer style="color:#fff" class="footer footer-alt">
            2022 &copy; KixiAgenda by <b>KixiCrédito</b> 
        </footer>
    </div>
</template>
<script>
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
    export default{  
        created(){
            //document.querySelector('body').style.background = `url(${'images/fundo.jpg'})`;
             document.querySelector("body").style.backgroundColor = "#1abc9c";
        }, 
        name:'Login',  
        data(){
            return{
                username:'',
                senha:'',
                submitStatus: null,
                visible: false,
                fullPage: true
            };
        },
        components: {
            Loading: VueLoading
        },
        validations: {
            username: { 
                required,       
                minLength: minLength(9),
                maxLength: maxLength(9)
            },
            senha: { 
                required                     
            }
        },
        methods: {
            async logar(){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {     
                    this.visible = true;               
                    let self = this;               
                    this.$axios.post('login',{
                        'username': this.username,
                        'senha': this.senha
                    })
                    .then(function (response) {
                        if(response.status==200){
                            self.visible = false;  
                            self.$router.push({name:'dashboard'});                     
                        }else{
                            self.visible = false;  
                            alert("LITTLE ERROR ");
                        }
                    })
                    .catch(function (error) {     
                        self.visible = false;                    
                        Swal.fire({
                            text: 'Erro ao efectuar o login, verifique o username ou a senha.',
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        })
                    });
                }
            }
        }
    };
</script>
<style scoped>
</style>