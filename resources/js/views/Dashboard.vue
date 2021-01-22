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

        <div class="row text-center mb-2">
            <div class="col-md-6 col-xl-3">
                <div class="card-box">
                    <i class="fas fa-undo-alt font-26"></i>
                    <h3 class="text-primary">{{qtdTarefasConcluidas+qtdTarefasAtrasadas+qtdTarefasAgendadas}}</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">Total Actividades</p>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card-box">
                    <i class="fas fa-clipboard-check font-26"></i>
                    <h3 class="text-success">{{qtdTarefasConcluidas}}</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">Actividades Concluídas</p>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card-box">
                    <i class="fas fa-clipboard-list font-26"></i>
                    <h3 class="text-danger">{{qtdTarefasAtrasadas}}</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">Actividades Atrasadas</p>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div class="card-box">
                    <i class="fas fa-file-alt font-26"></i>
                    <h3 class="text-warning">{{qtdTarefasAgendadas}}</h3>
                    <p class="text-uppercase mb-1 font-13 font-weight-medium">Actividades Reagendadas</p>
                </div>
            </div>            
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-sm table-bordeless" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th>Responsável</th>
                                <th>Código</th>
                                <th>Objecto de Actividade</th>                                
                                <th>Data da Solicitação</th>
                                <th>Data da Execução</th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr title='Clique aqui para abrir actividade' v-for="tarefa in tarefas" class="tabelaClicked" @click="selectRow(tarefa.id)">
                                <td>
                                <img
                                    :src="'/images/users/'+tarefa.responsavel+'.jpg'"
                                    alt="user-image"
                                    width="45px"
                                    height="45px"
                                    class="rounded-circle"
                                    style="border:solid #6c757d 1px"/>
                                </td>
                                
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
                qtdTarefasConcluidas: 0,
                qtdTarefasAtrasadas: 0,
                qtdTarefasAgendadas: 0
            };       
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
            pegaTarefas: async function(){
                let self = this               
                this.$axios.get('auth/pegaGeralTarefas')
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
            },
            contTarefas: async function(){
                let self = this               
                this.$axios.get('auth/contActividades')
                .then(function (response) {
                    if(response.status==200){
                        //alert(response.data.qtdTarefasConcluidas),
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
