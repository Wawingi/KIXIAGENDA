<template>
    <div    class="modal fade"
            id="modalNovaActividade"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                <div class="modal-content">
                   <div id="cabeca-modal" class="modal-header">
                        <h4 class="modal-title" id="exampleModalScrollableTitle"><i class="mdi mdi-plus-circle mr-1"></i>Registar Actividade</h4>
                        <button
                            style="margin-top:-20px"
                            id="modalClose"
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">                   
                        <form ref="formTarefa" v-on:submit.prevent="registarTarefa">                       
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="name">Tipo de Actividade</label>
                                        <select v-model.trim="$v.selectedTipo.$model" :class="{'is-invalid':$v.selectedTipo.$error, 'is-valid':!$v.selectedTipo.$invalid}" class="custom-select custom-select-sm">
                                            <option disabled selected :value="''">Selecione o tipo</option>
                                            <option v-for="tipo in tipos" v-bind:key="tipo.id" v-bind:value="tipo.id">{{tipo.tipo}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label for="name">Objecto da Actividade</label>
                                        <input v-model.trim="$v.titulo.$model" :class="{'is-invalid':$v.titulo.$error, 'is-valid':!$v.titulo.$invalid}" type="text" class="form-control form-control-sm corInput" placeholder="informe objecto da actividade">
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.titulo.required">O Título deve ser fornecido</span>
                                            <span v-if="!$v.titulo.minLength">O Título deve possuír um tamanho maior que 5 dígitos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="name">Tipo Origem</label>
                                        <select v-model.trim="$v.selectedOrigem.$model" :class="{'is-invalid':$v.selectedOrigem.$error, 'is-valid':!$v.selectedOrigem.$invalid}" class="custom-select custom-select-sm">
                                            <option disabled selected :value="''">Selecione a origem</option>
                                            <option v-for="origem in origens" v-bind:key="origem.id" v-bind:value="origem.id">{{origem.titulo}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="name">Dado Origem</label>
                                        <input v-model.trim="$v.dado_origem.$model" :class="{'is-invalid':$v.dado_origem.$error, 'is-valid':!$v.dado_origem.$invalid}" type="text" class="form-control form-control-sm corInput" placeholder="Informe o dado de contacto">
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.dado_origem.required">O Dado de origem deve ser fornecido</span>
                                            <span v-if="!$v.dado_origem.minLength">O Dado de origem deve possuír um tamanho maior que 5 dígitos</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label for="name">Tempo de Registo</label>
                                        <select v-model.trim="$v.tempo.$model" :class="{'is-invalid':$v.tempo.$error, 'is-valid':!$v.tempo.$invalid}" class="custom-select custom-select-sm">
                                            <option selected disabled :value="''">Escolha o tempo</option>
                                            <option value='5'>0:05</option>
                                            <option value='10'>0:10</option>
                                            <option value='15'>0:15</option>
                                            <option value='20'>0:20</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <fieldset class="border p-2"><legend style="font-size:16px" class="w-auto">DE: </legend>	
                                        <div class="form-row">
                                            <div class="col-md-8">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <select v-model.trim="$v.departamento_origem.$model" :class="{'is-invalid':$v.departamento_origem.$error, 'is-valid':!$v.departamento_origem.$invalid}" class="custom-select custom-select-sm ">
                                                            <option selected disabled :value="''">Escolha a origem</option>
                                                            <option value="Contabilidade & Finanças"> 01 SEDE | Contabilidade & Finanças</option>
                                                            <option value="Administração & Marketing">01 SEDE | Administração & Marketing</option>
                                                            <option value="Auditoria Interna">01 SEDE | Auditoria Interna</option>
                                                            <option value="Operações">01 SEDE | Operações</option>
                                                            <option value="Presidente do Comitê Executivo">01 SEDE | Presidente do Comitê Executivo</option>
                                                            <option value="Recursos Humanos">01 SEDE | Recursos Humanos</option>
                                                            <option value="Sistemas & Organização">01 SEDE | Sistemas & Organização</option>
                                                            <option value="Cadeia Produtiva - Zango">01 SEDE | Cadeia Produtiva - Zango</option>
                                                            <option value="Operações">01 SEDE | Operações</option>
                                                            <option value="Operações">02 HUAMBO | Operações</option>
                                                            <option value="Operações">03 MABOR | Operações</option>
                                                            <option value="Operações">04 HOJI-YA-HENDA | Operações</option>
                                                            <option value="Operações">05 MORRO BENTO | Operações</option>
                                                            <option value="Operações">06 VIANA | Operações</option>
                                                            <option value="Operações">07 KILAMBA KIAXI | Operações</option>
                                                            <option value="Operações">08 BENGUELA | Operações</option>
                                                            <option value="Operações">09 CABINDA | Operações</option>
                                                            <option value="Operações">10 LUBANGO | Operações</option>
                                                            <option value="Operações">11 NAMIBE | Operações</option>
                                                            <option value="Operações">12 KUITO | Operações</option>
                                                            <option value="Operações">13 UIGE | Operações</option>
                                                            <option value="Operações">15 LOBITO | Operações</option>
                                                            <option value="Operações">16 MALANGE | Operações</option>
                                                            <option value="Operações">18 SUMBE | Operações</option>
                                                            <option value="Operações">19 ZANGO | Operações</option>
                                                            <option value="Operações">21 BENFICA | Operações</option>
                                                            <option value="Operações">22 PANGUILA | Operações</option>
                                                            <option value="Sub-Direcção de Pequenas Empresas">26 BOA VIDA | Sub-Direcção de Pequenas Empresas</option>
                                                            <option value="DPP-Benguela">99 DDP | DPP-Benguela</option>
                                                            <option value="DPP-Kuito">99 DDP | DPP-Kuito</option>
                                                            <option value="DPP-Lobito">99 DDP | DPP-Lobito</option>
                                                            <option value="DPP-Marginal">99 DDP | DPP-Marginal</option>
                                                            <option value="DPP-Namibe">99 DDP | DPP-Namibe</option>
                                                            <option value="DPP-Soyo">99 DDP | DPP-Soyo</option>
                                                            <option value="DPP-Uige">99 DDP | DPP-Uige</option>
                                                            <option value="DPP-Zango">99 DDP | DPP-Zango</option>
                                                        </select>
                                                    </div><br><br>
                                                    <div class="col-5">
                                                        <label for="name">Solicitante</label>
                                                        <select @change="onChangeSolicitante($event)" v-model.trim="$v.selectedSolicitante.$model" :class="{'is-invalid':$v.selectedSolicitante.$error, 'is-valid':!$v.selectedSolicitante.$invalid}" class="custom-select custom-select-sm">
                                                            <option disabled selected :value="''">Solicitante</option>
                                                            <option v-for="utilizador in utilizadores" v-bind:key="utilizador.id" v-bind:value="utilizador.username">{{utilizador.username}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-7">
                                                        <label for="name">Data Solicitação</label>
                                                        <input v-model.trim="$v.data_solicitacao.$model" :class="{'is-invalid':$v.data_solicitacao.$error, 'is-valid':!$v.data_solicitacao.$invalid}" type="datetime-local" class="form-control form-control-sm">
                                                        <div class="invalid-feedback">
                                                            <span v-if="!$v.data_solicitacao.required">A data deve ser fornecida</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <img
                                                    style="border:solid #d0d5dc 1px"
                                                    :src="'/images/users/'+fotoSolicitante"
                                                    alt="user-image"
                                                    width="112px"
                                                    height="112px"
                                                    class="rounded-circle"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>	
                                </div>
                                
                                <div class="col-6">
                                    <fieldset class="border p-2"><legend style="font-size:16px" class="w-auto">PARA: </legend>	
                                        <div class="form-row">
                                            <div class="col-md-8">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <select v-model.trim="$v.departamento_destino.$model" :class="{'is-invalid':$v.departamento_destino.$error, 'is-valid':!$v.departamento_destino.$invalid}" class="custom-select custom-select-sm">
                                                            <option selected disabled :value="''">Escolha o destino</option>
                                                            <option value="Contabilidade & Finanças"> 01 SEDE | Contabilidade & Finanças</option>
                                                            <option value="Administração & Marketing">01 SEDE | Administração & Marketing</option>
                                                            <option value="Auditoria Interna">01 SEDE | Auditoria Interna</option>
                                                            <option value="Operações">01 SEDE | Operações</option>
                                                            <option value="Presidente do Comitê Executivo">01 SEDE | Presidente do Comitê Executivo</option>
                                                            <option value="Recursos Humanos">01 SEDE | Recursos Humanos</option>
                                                            <option value="Sistemas & Organização">01 SEDE | Sistemas & Organização</option>
                                                            <option value="Cadeia Produtiva - Zango">01 SEDE | Cadeia Produtiva - Zango</option>
                                                            <option value="Operações">01 SEDE | Operações</option>
                                                            <option value="Operações">02 HUAMBO | Operações</option>
                                                            <option value="Operações">03 MABOR | Operações</option>
                                                            <option value="Operações">04 HOJI-YA-HENDA | Operações</option>
                                                            <option value="Operações">05 MORRO BENTO | Operações</option>
                                                            <option value="Operações">06 VIANA | Operações</option>
                                                            <option value="Operações">07 KILAMBA KIAXI | Operações</option>
                                                            <option value="Operações">08 BENGUELA | Operações</option>
                                                            <option value="Operações">09 CABINDA | Operações</option>
                                                            <option value="Operações">10 LUBANGO | Operações</option>
                                                            <option value="Operações">11 NAMIBE | Operações</option>
                                                            <option value="Operações">12 KUITO | Operações</option>
                                                            <option value="Operações">13 UIGE | Operações</option>
                                                            <option value="Operações">15 LOBITO | Operações</option>
                                                            <option value="Operações">16 MALANGE | Operações</option>
                                                            <option value="Operações">18 SUMBE | Operações</option>
                                                            <option value="Operações">19 ZANGO | Operações</option>
                                                            <option value="Operações">21 BENFICA | Operações</option>
                                                            <option value="Operações">22 PANGUILA | Operações</option>
                                                            <option value="Sub-Direcção de Pequenas Empresas">26 BOA VIDA | Sub-Direcção de Pequenas Empresas</option>
                                                            <option value="DPP-Benguela">99 DDP | DPP-Benguela</option>
                                                            <option value="DPP-Kuito">99 DDP | DPP-Kuito</option>
                                                            <option value="DPP-Lobito">99 DDP | DPP-Lobito</option>
                                                            <option value="DPP-Marginal">99 DDP | DPP-Marginal</option>
                                                            <option value="DPP-Namibe">99 DDP | DPP-Namibe</option>
                                                            <option value="DPP-Soyo">99 DDP | DPP-Soyo</option>
                                                            <option value="DPP-Uige">99 DDP | DPP-Uige</option>
                                                            <option value="DPP-Zango">99 DDP | DPP-Zango</option>
                                                        </select>
                                                    </div><br><br>
                                                    <div class="col-5">
                                                        <label for="name">Responsável</label>
                                                        <select @change="onChangeResponsavel($event)" v-model.trim="$v.selectedResponsavel.$model" :class="{'is-invalid':$v.selectedResponsavel.$error, 'is-valid':!$v.selectedResponsavel.$invalid}" class="custom-select custom-select-sm">
                                                            <option disabled selected :value="''">Responsável</option>
                                                            <option v-for="utilizador in utilizadores" v-bind:key="utilizador.id" v-bind:value="utilizador.username">{{utilizador.username}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-7">
                                                        <label for="name">Data Execução</label>
                                                        <input v-model.trim="$v.data_execucao.$model" :class="{'is-invalid':$v.data_execucao.$error, 'is-valid':!$v.data_execucao.$invalid}" type="datetime-local" class="form-control form-control-sm">
                                                        <div class="invalid-feedback">
                                                            <span v-if="!$v.data_execucao.required">A data deve ser fornecida</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <img
                                                    style="border:solid #d0d5dc 1px"
                                                    :src="'/images/users/'+fotoResponsavel"
                                                    alt="user-image"
                                                    width="114px"
                                                    height="114px"
                                                    class="rounded-circle foto"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>	
                                </div>	
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="name">Descrição</label>
                                    <textarea v-model.trim="$v.descricao.$model" :class="{'is-invalid':$v.descricao.$error, 'is-valid':!$v.descricao.$invalid}" class="form-control form-control-sm corInput" rows="5"></textarea>
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.descricao.required">A descricao deve ser fornecida</span>
                                        <span v-if="!$v.descricao.minLength">A descricao deve possuír um tamanho maior</span>
                                    </div>
                                </div>
                            </div>
                            <hr style="height:1px;background-color:#c9d4ce" />
                            <div class="text-right">
                                <button id="modalClose" type="button" class="btn btn-rounded btn-secondary waves-effect" data-dismiss="modal">
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
</template>
<script>
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
    export default{    
        data(){
            return{
                selectedTipo: '',
                selectedOrigem: '',
                tipos: [],  
                origens: [], 
                utilizadores: [], 
                tarefas: [],
                selectedSolicitante: "",
                selectedResponsavel: "",
                fotoSolicitante: 'default.jpg',
                fotoResponsavel: 'default.jpg',
                titulo:'',
                dado_origem:'',
                descricao:'',
                data_execucao:'',
                data_solicitacao:'',
                tempo:'',
                departamento_origem:'',
                departamento_destino:'',
                submitStatus: null 
            };       
        },  
        validations: {
            titulo: { 
                required,       
                minLength: minLength(5)
            },
            dado_origem: { 
                required,       
                minLength: minLength(5)
            },
            descricao: { 
                required,       
                minLength: minLength(10)
            },
            data_execucao: { 
                required     
            },
            data_solicitacao: { 
                required     
            },
            selectedSolicitante: { 
                required     
            },
            selectedResponsavel: { 
                required     
            },
            selectedTipo: { 
                required     
            },
            selectedOrigem: { 
                required     
            },
            tempo: {
                required
            },
            departamento_origem: {
                required
            },
            departamento_destino: {
                required
            },
            
        },
        mounted(){
            this.pegaTipos();
            this.pegaOrigens();
            this.pegaUtilizador();
            this.pegaTarefas();
        },
        methods: {        
            pegaTipos: async function(){
                let self = this               
                this.$axios.get('auth/pegaTipos')
                .then(function (response) {
                    if(response.status==200){
                        self.tipos = response.data;             
                        console.log(response.data);                                                               
                    }
                })
                .catch(function (error) {
                    //alert("Erro ao carregar dados do perfil");
                });
            },
            pegaOrigens: async function(){
                let self = this               
                this.$axios.get('auth/pegaOrigens')
                .then(function (response) {
                    if(response.status==200){
                        self.origens = response.data;             
                        console.log(response.data);                                                               
                    }
                })
                .catch(function (error) {
                    //alert("Erro ao carregar dados do perfil");
                });
            },
            pegaUtilizador: async function(){
                let self = this               
                this.$axios.get('auth/pegaUtilizadores')
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
            pegaTarefas: async function(){
                let self = this               
                this.$axios.get('auth/pegaTarefas')
                .then(function (response) {
                    if(response.status==200){
                        self.tarefas = response.data;             
                        console.log('YYY: '+response.data);                                                               
                    }
                })
                .catch(function (error) {
                    //alert("Erro ao carregar dados do perfil");
                });
            },

            limaparCampos(){
                this.selectedTipo = null;
                this.titulo = null;
                this.selectedOrigem = null;
                this.dado_origem = null;
                this.tempo = null;
                this.departamento_origem = null,
                this.selectedSolicitante = null,
                this.data_solicitacao = null,
                this.departamento_destino = null,
                this.selectedResponsavel = null,
                this.data_execucao = null,
                this.descricao = null,
                this.fotoSolicitante = 'default.jpg';
                this.fotoResponsavel = 'default.jpg';

                this.$nextTick(() => { this.$v.$reset(); });   
            },

            registarTarefa: async function(e){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else { 
                    
                    //this.$v.$reset();
                    let self = this          
                    this.$axios.post('auth/registarTarefa',{
                        'selectedTipo': this.selectedTipo,                        
                        'titulo': this.titulo.toUpperCase(),
                        'selectedOrigem': this.selectedOrigem,
                        'dado_origem': this.dado_origem,
                        'tempo': this.tempo,
                        'departamento_origem': this.departamento_origem,
                        'selectedSolicitante': this.selectedSolicitante,
                        'data_solicitacao': this.data_solicitacao.replace("T", " "),
                        'departamento_destino': this.departamento_destino,
                        'selectedResponsavel': this.selectedResponsavel,
                        'data_execucao': this.data_execucao.replace("T", " "),
                        'descricao': this.descricao,
                    })
                    .then(function (response) {
                        if(response.status==200){  
                            //e.target.reset(); //also clean input
                            self.limaparCampos();
                            $('#modalClose').click();
                          
                            Swal.fire({
                                text: "Actividade registada com sucesso.",
                                icon: 'success',
                                confirmButtonText: 'Fechar'
                            }),
                            location.reload();
                                                                    
                        }else{
                            alert("LITTLE ERROR ");
                        }
                    })
                    .catch(function (error) {
                        self.limaparCampos();
                        $('#modalClose').click();
                         Swal.fire({
                            text: "Erro ao registar actividade.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        })
                    });
                }
                
            },

            //Metodo de troca de username para escolher foto
            onChangeSolicitante(event) {
                //alert(event.target.value+'.jpg');
                this.fotoSolicitante = event.target.value+'.jpg';
            },

            onChangeResponsavel(event) {
                //alert(event.target.value+'.jpg');
                this.fotoResponsavel = event.target.value+'.jpg';
            }            
        }
    }
</script>
