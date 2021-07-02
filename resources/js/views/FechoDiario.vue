<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Fecho Diário</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Actividade Diária do Fecho</h4>
                </div>
            </div>
        </div>

        <!-- Modal Fecho -->
        <div class="modal fade" id="modalFecho" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle"aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div class="modal-content">
                <div id="cabeca-modal" class="modal-header">
                        <h4 class="modal-title" id="exampleModalScrollableTitle"><i class="mdi mdi-plus-circle mr-1"></i>Marcar Funcionário Para Fecho Seguinte</h4>
                        <button style="margin-top:-20px" id="modalCloseAccao" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">                   
                        <form v-on:submit.prevent="registarFecho">    
                            <div class="row">
                                <div class="col-4">
                                    <label for="name">Utilizador</label>
                                    <select v-model.trim="$v.utilizador_codigo.$model" :class="{'is-invalid':$v.utilizador_codigo.$error, 'is-valid':!$v.utilizador_codigo.$invalid}" class="custom-select custom-select-sm">
                                        <option disabled selected :value="''">Escolha o utilizador</option>
                                        <option v-for="utilizador in utilizadores" v-bind:key="utilizador.id" v-bind:value="utilizador.id">{{utilizador.username}}</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="name">Periodo</label>
                                    <select v-model.trim="$v.periodo.$model" :class="{'is-invalid':$v.periodo.$error, 'is-valid':!$v.periodo.$invalid}" class="custom-select custom-select-sm">
                                        <option selected disabled :value="''">Escolha o periodo</option>
                                        <option value="1">Manha</option>
                                        <option value="2">Tarde</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="name">Data da Realização</label>
                                    <input v-model.trim="$v.data_fecho.$model" :class="{'is-invalid':$v.data_fecho.$error, 'is-valid':!$v.data_fecho.$invalid}" type="datetime-local" class="form-control form-control-sm">
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.data_fecho.required">A data deve ser fornecida</span>
                                    </div>
                                </div>
                            </div> 
                            <hr style="height:1px;background-color:#c9d4ce" />
                            <div class="text-right">
                                <button id="modalCloseFecho" type="button" class="btn btn-rounded btn-secondary waves-effect" data-dismiss="modal">
                                    <i class="mdi mdi-close mr-1"></i>Fechar
                                </button>
                                <button type="submit" class="btn btn-rounded btn-warning waves-effect waves-light">
                                    <i class="mdi mdi-content-save mr-1"></i>Registar
                                </button>
                            </div>                           
                        </form>                       
                    </div>
                </div>
            </div>
        </div>
        <!-- Fim Modal fecho -->
        <!--
        <button 
            style="float: right;margin:5px" 
            type="submit" 
            class="btn btn-sm btn-rounded btn-success waves-effect waves-light" 
            data-backdrop="static"
            data-keyboard="false"
            data-toggle="modal"
            data-target="#modalFecho">
            <i class="mdi mdi-plus-circle mr-1"></i>Registar Fecho
        </button>
        -->
        <loading :animation="anim" :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <!--Inicio do conteudo-->
        <br><br>
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <marquee><h3 style="color:red">UTILIZADOR PARA O FECHO</h3></marquee><br>
                    <table id="paginationTarefa" class="table table-sm table-bordeless" cellspacing="0" width="100%">
                        <thead id="cabecatabela">
                            <tr>
                                <th>Nome</th>
                                <th>Periodo</th>
                                <th>Data do Fecho</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr title='Clique aqui para abrir actividade' v-for="fecho in fechos">
                                <td>{{fecho.name}}</td>
                                <td>{{fecho.periodo}}</td>
                                <td>{{fecho.created_at}}</td>
                                <td class="float-right">
                                    <button data-backdrop="static"
                                            data-keyboard="false"
                                            data-toggle="modal"
                                            data-target="#modalFecho" 
                                            class="btn btn-success btn-sm btn-rounded">
                                            <i class="fas fa-check mr-1"></i>Terminar o Fecho
                                    </button>
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
    import { required, minLength, maxLength } from 'vuelidate/lib/validators';

    export default {       
        data(){
            return{
                fechos: [],
                utilizadores: [], 
                utilizador_codigo:'',
                periodo:'',
                data_fecho:'',
                visible: false,
                fullPage: true,
                anim:'Spinner'
            };       
        },  
        components: {
            Loading: VueLoading
        },
        validations: {
            utilizador_codigo: {
                required
            },       
            periodo: {
                required
            },       
            data_fecho: {
                required
            }       
        },
        created(){
            this.pegaUtilizador(),
            this.pegaFechos()            
        },
        methods: {  
            pegaUtilizador: async function(){
                let self = this               
                this.$axios.get('auth/pegaUtilizadoresDSO')
                .then(function (response) {
                    if(response.status==200){
                        self.utilizadores = response.data;
                        console.log(response.data);                  
                    }else{
 
                    }
                })
                .catch(function (error) {
                    alert("Erro ao carregar dados do perfil");
                });
            },

            //limpar dados do formulario
            limparFormFecho(){
                this.data_fecho = null;
                this.periodo = null;
                this.utilizador_codigo = null;
                this.$nextTick(() => { this.$v.$reset(); });   
            },

            //Registar fecho
            registarFecho: async function(e){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    let self = this          
                    this.$axios.post('auth/registarFecho',{
                        'periodo': this.periodo,
                        'utilizador_codigo': this.utilizador_codigo,
                        'data_fecho': this.data_fecho.replace("T", " "),                        
                    })
                    .then(function (response) {
                        if(response.status==200){
                            self.limparFormFecho();
                            $('#modalCloseFecho').click();  
                            self.pegaFechos();                        
                            Swal.fire({
                                text: "Registado com sucesso.",
                                icon: 'success',
                                timer: 1500
                            })                   
                        }else{
                            alert("LITTLE ERROR AO REGISTAR FECHO");
                        }
                    })
                    .catch(function (error) {
                        $('#modalCloseFecho').click();  
                        Swal.fire({
                            text: "Erro ao registar.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        })
                    });
                }              
            },
            pegaFechos: async function(){
                this.visible = true;
                let self = this;               
                this.$axios.get('auth/pegaFechos')
                .then(function (response) {
                    if(response.status==200){
                        self.fechos = response.data;   
                        self.visible = false;                                                                           
                    }
                })
                .catch(function (error) {
                    
                });
            }
        }        
    };
</script>