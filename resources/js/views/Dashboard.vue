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

        <loading :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <div class="row text-center mb-2">
            <div class="col-md-3 col-sm-2">
                <div class="card-box">
                    <i class="fas fa-undo-alt font-26"></i>
                    <h3 class="text-primary">{{qtdTarefasTotal}}</h3>
                     <span>
                        Total Actividades Hoje
                    </span>
                </div>
            </div>
            <div class="col-md-2 col-sm-2">
                <div class="card-box">
                    <i class="fas fa-clipboard-check font-26"></i>
                    <h3 class="text-success">{{qtdTarefasConcluidas}}</h3>
                    <span>
                        Regularizadas
                    </span>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="card-box">
                    <i class="fas fa-file-alt font-26"></i>
                    <h3 class="text-warning">{{qtdTarefasNaoConcluidas}}</h3>
                    <span>
                        Não Regularizadas
                    </span>                   
                </div>
            </div>         
            <div class="col-md-2 col-sm-2">
                <div class="card-box">
                    <i class="fas fa-clipboard-list font-26"></i>
                    <h3 class="text-danger">{{qtdTarefasAtrasadas}}</h3>
                    <span>
                        Atrasadas
                    </span>
                </div>
            </div>
            <div class="col-md-2 col-sm-2">
                <div class="card-box">
                    <i class="fas fa-file-alt font-26"></i>
                    <h3 class="text-success">{{qtdAccoes}}</h3>
                    <span>
                        Acções
                    </span>                   
                </div>
            </div>            
        </div>
        <br>
        <div style="margin-top:-25px" class="row">
            <div class="col-7">    
                <div class="card-box">
                    <table cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th>Utilizador</th>
                                <th>Total Horas</th>     
                                <th></th>     
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr>           
                                <td>{{utilizador}}</td>     
                                <td>{{horas_trabalhadas}}</td>     
                                <td width="50%">
                                    <div class="progress progress-xl ">
                                        <div v-bind:style="estilo" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                            {{percentagem_hora}} %  
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>     
                </div>
            </div>
            <div class="col-5">  
            <div class="card-box">                    
                <button 
                    style="float:right;margin:5px" 
                    type="submit" 
                    @click="exportarExcel(2)"
                    class="btn btn-sm btn-rounded btn-secondary waves-effect waves-light">
                    <i class="fa fa-download mr-1"></i>Exportar Operacções
                </button>
                <button 
                    style="margin:5px" 
                    type="submit" 
                    @click="exportarExcel(1)"
                    class="btn btn-sm btn-rounded btn-success waves-effect waves-light">
                    <i class="fa fa-download mr-1"></i>Exportar Tarefas
                </button>
            </div>
            </div>
        </div>
        <br> 
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-sm table-md table-bordeless" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <td>Código</td>
                                <td>Título</td>                               
                                <td>Responsável</td>                               
                                <td>Solicitação</td>
                                <td>Estado</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr v-for="tarefa in tarefas" class="tabelaClicked">           
                                <td>{{tarefa.codigo}}</td> 
                                <td>{{tarefa.titulo}}</td>                             
                                <td>{{tarefa.responsavel}}</td>                             
                                <td width="20%">{{ moment(String(tarefa.data_solicitacao)).format('DD-MM-YYYY') }}</td>
                                <td v-if="tarefa.avanco==100" width="20%">
                                    <div class="progress mb-1 progress-xl">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            Concluído ({{ moment(String(tarefa.data_cumprimento)).format('DD-MM-YYYY') }})  
                                        </div>
                                    </div>
                                </td>
                                <td v-if="tarefa.data_prevista<now && tarefa.avanco<100">
                                    <div class="progress mb-1 progress-xl">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            Atrasada ({{ moment(String(tarefa.data_prevista)).format('DD-MM-YYYY') }})  
                                        </div>
                                    </div>
                                </td>                               
                                <td v-if="tarefa.data_prevista>now && tarefa.avanco<100" width="20%">
                                    <div class="progress mb-1 progress-xl">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            Em Curso 
                                        </div>
                                    </div>
                                </td>  
                                <td width="20%">
                                    <a @click="selectRow(tarefa.id,tarefa.codigo)" title="Clique aqui para abrir actividade" href="#" class="btn btn-secondary btn-rounded btn-sm float-right"><i class='fas fa-eye'></i> Ver Actividade </a>
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
    import moment from 'moment';
    export default {
        data(){
            return{
                tarefas: [],
                horas_trabalhadas: '',
                percentagem_hora: '',
                utilizador: '',
                qtdTarefasTotal:'',
                qtdTarefasConcluidas:'',
                qtdTarefasNaoConcluidas:'',
                qtdTarefasAtrasadas:'',
                qtdAccoes:'',
                visible: false,
                fullPage: true,
                now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                estilo: '',
            };       
        },  
        components: {
            Loading: VueLoading
        },
        created(){
            this.pegaHorasTrabalhadas(),
            this.pegaTarefas(),
            this.contTarefas()
        },
        methods: {   
            moment,
            selectRow(id){     
                //Chamar outra aba
                var verTarefa='#/home/verActividade/'+id; 
                window.open(verTarefa, '_blank');    

                //Chamar outra página
                //this.$router.push({name:'verActividade',params:{id:id}})   
            },
            pegaHorasTrabalhadas: async function(){
                let self = this;               
                this.$axios.get('auth/contHoras')
                .then(function (response) {
                    if(response.status==200){
                        self.horas_trabalhadas = response.data.horas_trabalhadas;                                                                             
                        self.utilizador = response.data.utilizador; 

                        self.percentagem_hora = Math.round((response.data.horas_bruto*100)/28800);    

                        self.estilo='width:'+self.percentagem_hora+'%;font-size:15px'                                                                                                                                             
                    }
                })
                .catch(function (error) {
                    location.reload();
                });
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
            },
            exportarExcel(tipo){
                if(tipo==1){
                    var urlAccao='auth/exportarTarefaCSV/';
                }else{
                    var urlAccao='auth/exportarOperacaoCSV/';
                }
                window.open(urlAccao);    
            }
        }        
    };
</script>
