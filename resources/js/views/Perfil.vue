<template>
    <div class="container-fluid">
        <br />
        
        <div class="row">
            <div class="col-12">
                <div style="text-align:center" class="card-box">
                    <h4><i class="mdi mdi-account-badge-horizontal"></i> MEU PERFIL</h4>
                    <hr id="Linha">
                    <br /><br />
                    <div class="row">
                        <div class="col-5">
                            <img    
                                style="border:solid #6c757d 1px"                       
                                :src="'images/users/'+foto"
                                alt="user-image"
                                class="rounded-circle"
                                width="180px"
                                height="180px"
                            />
                        </div>
                        <div class="col-7">
                            <p><i class="mdi mdi-account-circle-outline"></i> {{nome}}</p>
                            <p><i class="mdi mdi-shield-account"></i> {{username}}</p>
                            <p><i class="mdi mdi-email"></i> {{email}}</p>
                            <p><i class="mdi mdi-office-building"></i> {{departamento}}</p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{    
        data(){
            return{
                nome:'',
                username:'',
                email:'',
                departamento:'',
                foto:''
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
                        self.username = response.data.username;                   
                        self.email = response.data.email;                   
                        self.departamento = response.data.departamento;
                        self.foto = response.data.foto;                
                    }else{
                        alert("Error ");
                    }
                })
                .catch(function (error) {
                    self.pegaUtilizador();
                });
            }
        }
    }
</script>
