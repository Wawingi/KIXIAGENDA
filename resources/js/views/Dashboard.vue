<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Todas Actividades</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Listar Actividades</h4>
                </div>
            </div>
        </div>
        <br>

        <loading :animation="anim" :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <div class="row text-center mb-2">
            <div class="col-md-6 col-xl-3">
                <div class="card-box">
                    <i class="fas fa-undo-alt font-26"></i>
                    <h3 class="text-primary">{{qtdTarefasTotal}}</h3>
                     <router-link to="#" exact>
                        Total Actividades Hoje
                    </router-link>
                </div>
            </div>
            <div class="col-md-4 col-xl-2">
                <div class="card-box">
                    <i class="fas fa-clipboard-check font-26"></i>
                    <h3 class="text-success">{{qtdTarefasConcluidas}}</h3>
                    <router-link to="#" exact>
                        Regularizadas
                    </router-link>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card-box">
                    <i class="fas fa-file-alt font-26"></i>
                    <h3 class="text-warning">{{qtdTarefasNaoConcluidas}}</h3>
                    <router-link to="#" exact>
                        Não Regularizadas
                    </router-link>                   
                </div>
            </div>         
            <div class="col-md-4 col-xl-2">
                <div class="card-box">
                    <i class="fas fa-clipboard-list font-26"></i>
                    <h3 class="text-danger">{{qtdTarefasAtrasadas}}</h3>
                    <router-link to="#" exact>
                        Atrasadas
                    </router-link>
                </div>
            </div>
            <div class="col-md-4 col-xl-2">
                <div class="card-box">
                    <i class="fas fa-file-alt font-26"></i>
                    <h3 class="text-success">{{qtdAccoes}}</h3>
                    <router-link to="#" exact>
                        Acções
                    </router-link>                   
                </div>
            </div>            
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-sm table-bordeless" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th>Código</th>
                                <th>Objecto de Actividade</th>                                
                                <th>Data da Solicitação</th>
                                <th>Data da Execução</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr title='Clique aqui para abrir actividade' v-for="tarefa in tarefas" class="tabelaClicked" @click="selectRow(tarefa.id)">           
                                <td>{{tarefa.codigo}}</td> 
                                <td>{{tarefa.titulo}}</td>                               
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
                                            Actividade não Concluída
                                        </div>
                                    </div>
                                </td>                              
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
                tarefas: [],
                qtdTarefasTotal:'',
                qtdTarefasConcluidas:'',
                qtdTarefasNaoConcluidas:'',
                qtdTarefasAtrasadas:'',
                qtdAccoes:'',
                visible: false,
                fullPage: true
            };       
        },  
        components: {
            Loading: VueLoading
        },
        created(){
            this.pegaTarefas(),
            this.contTarefas()
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
                this.visible = true;
                let self = this;               
                this.$axios.get('auth/pegaGeralTarefas')
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
                    location.reload();
                });
            },
            contTarefas: async function(){
                let self = this               
                this.$axios.get('auth/contActividades')
                .then(function (response) {
                    if(response.status==200){
                        self.qtdTarefasTotal = response.data.qtdTarefasTotal,
                        self.qtdTarefasConcluidas = response.data.qtdTarefasConcluidas,
                        self.qtdTarefasNaoConcluidas = response.data.qtdTarefasNaoConcluidas,
                        self.qtdTarefasAtrasadas = response.data.qtdTarefasAtrasadas,
                        self.qtdAccoes = response.data.qtdAccoes,

                        self.qtdTarefasConcluidas = response.data.qtdTarefasConcluidas,                                                   
                        self.qtdTarefasAtrasadas = response.data.qtdTarefasAtrasadas,                                                   
                        self.qtdTarefasAgendadas = response.data.qtdTarefasAgendadas                                                  
                    }
                })
                .catch(function (error) {
                    //alert("Erro ao carregar dados");
                });
            }
        }        
    };
</script>
