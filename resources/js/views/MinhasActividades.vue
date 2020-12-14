<template>
    <div class="container">
        <!-- start page title -->

        <!--Inicio do conteudo-->
        <br /><br />

        <!--Modal inclusão-->
        <ModalActividade/>  
        <!---->
        
        <div class="row float-right">
            <div class="col-lg-12">
                <button
                    type="button"
                    class="btn btn-rounded btn-sm btn-warning waves-effect waves-light"
                    data-backdrop="static"
                    data-keyboard="false"
                    data-toggle="modal"
                    data-target="#modalNovaActividade">
                    <i class="mdi mdi-plus-circle mr-1"></i>Nova Actividade
                </button>
            </div>
        </div>
        <FlashMessage position="left top"></FlashMessage>
        <br /><br />
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-bordered" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th>Objecto de Actividade</th>
                                <th>Solicitante</th>
                                <th>Data da Solicitação</th>
                                <th>Data da Execução</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr title='Clique aqui para abrir actividade' v-for="tarefa in tarefas" class="tabelaClicked" @click="selectRow(tarefa.id)">
                                <td>{{tarefa.titulo}}</td>
                                <td>{{tarefa.solicitante}}</td>
                                <td width="20%">{{ tarefa.data_solicitacao }}</td>
                                <td v-if="tarefa.avanco==100" width="10%">
                                    <div class="progress mb-1 progress-xl">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            {{tarefa.data_cumprimento}}
                                        </div>
                                    </div>
                                </td>
                                <td v-else width="20%">
                                    <div class="progress mb-1 progress-xl">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            Actividade Pendente
                                        </div>
                                    </div>
                                </td>                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- FIm do conteudo -->
    </div>
</template>
<script>
    import ModalActividade from "../components/ModalActividade.vue";
  
    export default {
        components: {
            ModalActividade
        },
        data(){
            return{
                tarefas: []
            };       
        },  
        created(){
            this.pegaTarefas()
        },
        methods: {   
            carregaTabela(){
                this.$nextTick(() => {
                    $('#paginationTarefa').DataTable();
                });
            },
            selectRow(id){      
                this.$router.push({name:'verActividade',params:{id:id}})   
            },
            pegaTarefas: async function(){
                let self = this               
                this.$axios.get('auth/pegaTarefas')
                .then(function (response) {
                    if(response.status==200){
                        self.tarefas = response.data;                             
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
