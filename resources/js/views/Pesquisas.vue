<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Pesquisas</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Histórico de Pesquisas</h4>
                </div>
            </div>
        </div>
        <br>
        <loading :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-sm table-bordeless" cellspacing="0" width="100%">
                            <thead id="cabecatabela">
                                <tr style="text-align:left">
                                    <td>Codigo</td>
                                    <td>Título</td>
                                    <td>Responsável</td>
                                    <td>Vezes Pesquisadas</td>
                                    <td>Data da Pesquisa</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>                          
                                <tr v-for="pesquisa in pesquisas" class="tabelaClicked">
                                    <td><i style="color:#339933" class="fas fa-check-circle mr-1"></i>{{pesquisa.codigo}}</td>
                                    <td>{{pesquisa.titulo}}</td>
                                    <td>{{pesquisa.responsavel}}</td>
                                    <td>
                                        <div style="width: 20%;margin-left:40px" class="progress mb-1 progress-xl">
                                            <div class="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar" style="width: 100%">
                                                {{pesquisa.qtd}} X
                                            </div> 
                                        </div> 
                                    </td>
                                    <td>
                                        <div style="width: 70%" class="progress mb-1 progress-xl">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 100%">
                                                {{ moment(String(pesquisa.created_at)).format('DD-MM-YYYY HH:mm') }}
                                            </div>    
                                        </div>    
                                    </td>
                                    <td>
                                        <a title="Clique aqui para abrir actividade" @click="selectRow(pesquisa.id_tarefa)" href="#" class="btn btn-secondary btn-rounded btn-sm float-right"><i class='fas fa-eye'></i> Ver Actividade </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                pesquisas: [],
                visible: false,
                fullPage: true,
                cont:0
            };       
        },  
        components: {
            Loading: VueLoading
        },

        created(){
            this.pegaPesquisas();
        },                      
        methods: { 
            moment,
            pegaPesquisas: async function(){
                this.visible = true;
                let self = this;               
                this.$axios.get('auth/listarPesquisas')
                .then(function (response) {
                    if(response.status==200){
                        self.pesquisas = response.data;                          
                         
                        self.visible = false;                                                      
                    } 
                })
                .catch(function (error) {
                    this.pegaPesquisas();
                });
            },
            selectRow(id){     
                //Chamar outra aba
                var verTarefa='#/home/verActividade/'+id; 
                window.open(verTarefa, '_blank');    
            }, 
        }        
    };
</script>