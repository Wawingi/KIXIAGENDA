<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Ver Assessores de Conta</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Assessores de Conta</h4>
                </div>
            </div>
        </div>
        <br><br>
        
        <loading :animation="anim" :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-bordered" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Agência(s)</th>
                                <th>Área</th>
                                <th>Contacto</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr v-for="assessor in assessores" class="tabelaClicked">
                                <td>
                                    <img
                                        :src="'images/users/'+assessor.username+'.jpg'"
                                        alt="user-image"
                                        width="50px"
                                        height="50px"
                                        class="rounded-circle"
                                        style="border:solid #6c757d 1px"/>
                                </td>
                                <td><br>{{assessor.nome}}</td>
                                <td><br>{{assessor.agencia}}</td>
                                <td><br>{{assessor.area}}</td>
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
            assessores: [],
            visible: false
        };       
    }, 
    components: {
        Loading: VueLoading
    }, 
    created(){
        this.pegaAssessores()
    },
    methods: {   
        pegaAssessores: async function(){
            this.visible = true;
            let self = this;               
            this.$axios.get('auth/pegaAssessores')
            .then(function (response) {
                if(response.status==200){
                    self.assessores = response.data;                             
                    self.$nextTick(() => {
                        $('#paginationTarefa').DataTable();
                    });   
                    self.visible = false;                                                      
                }
            })
            .catch(function (error) {
                //alert("Erro ao carregar dados");
            });
        }      
    }
};
</script>