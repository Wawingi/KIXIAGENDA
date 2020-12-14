<template>
    <div class="container-fluid">
        <br>
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-bordered" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Agência(s)</th>
                                <th>Contacto</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr v-for="assessor in assessores" class="tabelaClicked">
                                <td>
                                    <img
                                    :src="'/images/users/'+assessor.username+'.jpg'"
                                    alt="user-image"
                                    width="70px"
                                    height="70px"
                                    class="rounded-circle"/>
                                </td>
                                <td><br>{{assessor.nome}}</td>
                                <td><br>{{assessor.agencia}}</td>
                                <td><br>{{assessor.contacto}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            assessores: []
        };       
    },  
    created(){
        this.pegaAssessores()
    },
    methods: {   
        pegaAssessores: async function(){
            let self = this               
            this.$axios.get('auth/pegaAssessores')
            .then(function (response) {
                if(response.status==200){
                    self.assessores = response.data;                             
                    self.$nextTick(() => {
                        $('#paginationTarefa').DataTable();
                    });                                                      
                }
            })
            .catch(function (error) {
                //alert("Erro ao carregar dados");
            });
        }      
    }
};
</script>