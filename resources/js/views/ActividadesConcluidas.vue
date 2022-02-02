<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Actividades</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Actividades Concluídas</h4>
                </div>
            </div>
        </div>
        <!-- start page title -->

        <!--Inicio do conteudo-->
        <br/><br/>

        <loading :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  
                   
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-sm table-bordeless" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th>Código</th>
                                <th>Objecto de Actividade</th>
                                <th>Solicitante</th>
                                <th>Data da Solicitação</th>
                                <th>Data da Execução</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr title='Clique aqui para abrir actividade' v-for="tarefa in tarefas" class="tabelaClicked" @click="selectRow(tarefa.id)">
                                <td>{{tarefa.codigo}}</td>
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
                                            Actividade para Hoje
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
    //import ModalActividade from "../components/ModalActividade.vue";
  
    export default {
        components: {
            Loading: VueLoading
        },
        data(){
            return{
                tarefas: [],
                visible: false,
                fullPage: true
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
                //Chamar outra aba
                var verTarefa='#/home/verActividade/'+id; 
                window.open(verTarefa, '_blank');    

                //Chamar outra página   
                //this.$router.push({name:'verActividade',params:{id:id}})   
            },
            pegaTarefas: async function(){
                this.visible = true;
                let self = this;               
                this.$axios.get('auth/pegaTarefasConcluidas')
                .then(function (response) {
                    if(response.status==200){
                        self.tarefas = response.data;                             
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
