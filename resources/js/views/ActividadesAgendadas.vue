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
                    <h4 class="page-title">Actividades Agendadas</h4>
                </div>
            </div>
        </div>
        <!--Inicio do conteudo-->
        <br /><br />

        <loading :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <table id="paginationTarefa" class="table table-sm table-bordeless" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <td>Código</td>
                                <td>Título</td>
                                <td>Solicitante</td>
                                <td>Solicitação</td>
                                <td>Previsão</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr v-for="tarefa in tarefas" class="tabelaClicked">
                                <td>{{tarefa.codigo}}</td>
                                <td>{{tarefa.titulo}}</td>
                                <td>{{tarefa.solicitante}}</td>
                                <td width="20%">{{ moment(String(tarefa.data_solicitacao)).format('DD-MM-YYYY') }}</td>
                                <td width="20%">
                                    <div class="progress mb-1 progress-xl">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            {{ moment(String(tarefa.data_prevista)).format('DD-MM-YYYY') }}
                                        </div>
                                    </div>
                                </td>
                                <td width="20%">
                                    <a @click="selectRow(tarefa.id)" title="Clique aqui para abrir actividade" href="#" class="btn btn-secondary btn-rounded btn-sm float-right"><i class='fas fa-eye'></i> Ver Actividade </a>
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
    import moment from 'moment';
    export default {
        data(){
            return{
                tarefas: [],
                visible: false,
                fullPage: true
            };       
        }, 
        components: {
            Loading: VueLoading
        }, 
        created(){
            this.pegaTarefas()
        },
        methods: {  
            moment, 
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
                this.$axios.get('auth/pegaTarefasAgendadas')
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
