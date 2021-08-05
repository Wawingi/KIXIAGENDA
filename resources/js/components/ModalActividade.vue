<template>
    <div class="row">
        <div class="modal fade" id="modalNovaActividade" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
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
                                        <select @change="onChangeTipo($event)"  v-model.trim="$v.selectedTipo.$model" :class="{'is-invalid':$v.selectedTipo.$error, 'is-valid':!$v.selectedTipo.$invalid}" class="custom-select custom-select-sm">
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
                                        <select @change="onChangeOrigem($event)" v-model.trim="$v.selectedOrigem.$model" :class="{'is-invalid':$v.selectedOrigem.$error, 'is-valid':!$v.selectedOrigem.$invalid}" class="custom-select custom-select-sm">
                                            <option disabled selected :value="''">Selecione a origem</option>
                                            <option v-for="origem in origens" v-bind:key="origem.id" v-bind:value="origem.id">{{origem.titulo}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="name">Dado Origem<span style="color:red;font-size:12px"> [{{motivo}}]</span></label>
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
                                            <option value="30">0:30</option>
                                            <option value="40">0:40</option>
                                            <option value="50">0:50</option>
                                            <option value="60">1:00</option>
                                            <option value="90">1:30</option>
                                            <option value="120">2:00</option>
                                            <option value="150">2:30</option>
                                            <option value="180">3:00</option>
                                            <option value="210">3:30</option>
                                            <option value="240">4:00</option>
                                            <option value="270">4:30</option>
                                            <option value="300">5:00</option>
                                            <option value="330">5:30</option>
                                            <option value="360">6:00</option>
                                            <option value="390">6:30</option>
                                            <option value="420">7:00</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <fieldset class="border p-2"><legend style="font-size:16px" class="w-auto">DE: </legend>	
                                        <div class="form-row">
                                            <div class="col-md-9">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <select v-model.trim="$v.departamento_origem.$model" :class="{'is-invalid':$v.departamento_origem.$error, 'is-valid':!$v.departamento_origem.$invalid}" class="custom-select custom-select-sm ">
                                                            <option selected disabled :value="''">Escolha a origem</option>
                                                            <option value="1-Contabilidade & Finanças"> 01 SEDE | Contabilidade & Finanças</option>
                                                            <option value="1-Administração & Marketing">01 SEDE | Administração & Marketing</option>
                                                            <option value="1-Auditoria Interna">01 SEDE | Auditoria Interna</option>
                                                            <option value="1-Operações">01 SEDE | Operações</option>
                                                            <option value="1-Presidente do Comitê Executivo">01 SEDE | Presidente do Comitê Executivo</option>
                                                            <option value="1-Recursos Humanos">01 SEDE | Recursos Humanos</option>
                                                            <option value="1-Sistemas & Organização">01 SEDE | Sistemas & Organização</option>
                                                            <option value="2-Operações">02 HUAMBO | Operações</option>
                                                            <option value="3-Operações">03 MABOR | Operações</option>
                                                            <option value="4-Operações">04 HOJI-YA-HENDA | Operações</option>
                                                            <option value="5-Operações">05 MORRO BENTO | Operações</option>
                                                            <option value="6-Operações">06 VIANA | Operações</option>
                                                            <option value="7-Operações">07 KILAMBA KIAXI | Operações</option>
                                                            <option value="8-Operações">08 BENGUELA | Operações</option>
                                                            <option value="9-Operações">09 CABINDA | Operações</option>
                                                            <option value="10-Operações">10 LUBANGO | Operações</option>
                                                            <option value="11-Operações">11 NAMIBE | Operações</option>
                                                            <option value="12-Operações">12 KUITO | Operações</option>
                                                            <option value="13-Operações">13 UIGE | Operações</option>
                                                            <option value="15-Operações">15 LOBITO | Operações</option>
                                                            <option value="16-Operações">16 MALANGE | Operações</option>
                                                            <option value="18-Operações">18 SUMBE | Operações</option>
                                                            <option value="19-Operações">19 ZANGO | Operações</option>
                                                            <option value="21-Operações">21 BENFICA | Operações</option>
                                                            <option value="22-Operações">22 PANGUILA | Operações</option>
                                                            <option value="26-Sub-Direcção de Pequenas Empresas">26 BOA VIDA | Sub-Direcção de Pequenas Empresas</option>
                                                            <option value="99-DPP-Benguela">99 DDP | DPP-Benguela</option>
                                                            <option value="99-DPP-Kuito">99 DDP | DPP-Kuito</option>
                                                            <option value="99-DPP-Lobito">99 DDP | DPP-Lobito</option>
                                                            <option value="99-DPP-Marginal">99 DDP | DPP-Marginal</option>
                                                            <option value="99-DPP-Namibe">99 DDP | DPP-Namibe</option>
                                                            <option value="99-DPP-Soyo">99 DDP | DPP-Soyo</option>
                                                            <option value="99-DPP-Uige">99 DDP | DPP-Uige</option>
                                                            <option value="99-DPP-Zango">99 DDP | DPP-Zango</option>
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
                                            <div class="col-md-3">
                                                <img
                                                    style="border:solid #d0d5dc 1px"
                                                    :src="'images/users/'+fotoSolicitante"
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
                                            <div class="col-md-9">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <select v-model.trim="$v.departamento_destino.$model" :class="{'is-invalid':$v.departamento_destino.$error, 'is-valid':!$v.departamento_destino.$invalid}" class="custom-select custom-select-sm">
                                                            <option selected disabled :value="''">Escolha a origem</option>
                                                            <option value="1-Contabilidade & Finanças"> 01 SEDE | Contabilidade & Finanças</option>
                                                            <option value="1-Administração & Marketing">01 SEDE | Administração & Marketing</option>
                                                            <option value="1-Auditoria Interna">01 SEDE | Auditoria Interna</option>
                                                            <option value="1-Operações">01 SEDE | Operações</option>
                                                            <option value="1-Presidente do Comitê Executivo">01 SEDE | Presidente do Comitê Executivo</option>
                                                            <option value="1-Recursos Humanos">01 SEDE | Recursos Humanos</option>
                                                            <option value="1-Sistemas & Organização">01 SEDE | Sistemas & Organização</option>
                                                            <option value="2-Operações">02 HUAMBO | Operações</option>
                                                            <option value="3-Operações">03 MABOR | Operações</option>
                                                            <option value="4-Operações">04 HOJI-YA-HENDA | Operações</option>
                                                            <option value="5-Operações">05 MORRO BENTO | Operações</option>
                                                            <option value="6-Operações">06 VIANA | Operações</option>
                                                            <option value="7-Operações">07 KILAMBA KIAXI | Operações</option>
                                                            <option value="8-Operações">08 BENGUELA | Operações</option>
                                                            <option value="9-Operações">09 CABINDA | Operações</option>
                                                            <option value="10-Operações">10 LUBANGO | Operações</option>
                                                            <option value="11-Operações">11 NAMIBE | Operações</option>
                                                            <option value="12-Operações">12 KUITO | Operações</option>
                                                            <option value="13-Operações">13 UIGE | Operações</option>
                                                            <option value="15-Operações">15 LOBITO | Operações</option>
                                                            <option value="16-Operações">16 MALANGE | Operações</option>
                                                            <option value="18-Operações">18 SUMBE | Operações</option>
                                                            <option value="19-Operações">19 ZANGO | Operações</option>
                                                            <option value="21-Operações">21 BENFICA | Operações</option>
                                                            <option value="22-Operações">22 PANGUILA | Operações</option>
                                                            <option value="26-Sub-Direcção de Pequenas Empresas">26 BOA VIDA | Sub-Direcção de Pequenas Empresas</option>
                                                            <option value="99-DPP-Benguela">99 DDP | DPP-Benguela</option>
                                                            <option value="99-DPP-Kuito">99 DDP | DPP-Kuito</option>
                                                            <option value="99-DPP-Lobito">99 DDP | DPP-Lobito</option>
                                                            <option value="99-DPP-Marginal">99 DDP | DPP-Marginal</option>
                                                            <option value="99-DPP-Namibe">99 DDP | DPP-Namibe</option>
                                                            <option value="99-DPP-Soyo">99 DDP | DPP-Soyo</option>
                                                            <option value="99-DPP-Uige">99 DDP | DPP-Uige</option>
                                                            <option value="99-DPP-Zango">99 DDP | DPP-Zango</option>
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
                                                        <input v-model.trim="$v.data_execucao.$model" :class="{'is-invalid':$v.data_execucao.$error, 'is-valid':!$v.data_execucao.$invalid}" type="date" class="form-control form-control-sm">
                                                        <div class="invalid-feedback">
                                                            <span v-if="!$v.data_execucao.required">A data deve ser fornecida</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <img
                                                    style="border:solid #d0d5dc 1px"
                                                    :src="'images/users/'+fotoResponsavel"
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
                                    <textarea v-on:keyup="contDescricao" v-model.trim="$v.descricao.$model" :class="{'is-invalid':$v.descricao.$error, 'is-valid':!$v.descricao.$invalid}" class="form-control form-control-sm corInput" rows="5"></textarea>
                                    <span style="color:#3bafda" class="float-right">Quantidade: {{qtdeInformada}} de {{qtdPermitidaDescricao}}</span>
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.descricao.required">A descricao deve ser fornecida</span>
                                        <span v-if="!$v.descricao.minLength">A descricao deve possuír um tamanho maior não superior a {{qtdPermitidaDescricao}}</span>
                                        <span v-if="!$v.descricao.maxLength">A descricao excedeu a quantidade permitida</span>
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

        <!-- Modal Relatório actividade -->
        <div class="modal fade"  v-if="is_modal2_visible" id="modalRelatorioActividade2" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle"aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div class="modal-content">  
                    <div class="modal-body">    
                        <div class="row" style="background:none">               
                            <div class="col-11" style="background:none">               
                                <table style="margin-left:30px" class="tabela-relatorio">
                                    <tr>
                                        <td style="text-align:center;color:#111;font-weight:bold;background:#f5e78e">{{codigo}}</td>
                                        <td class="cor-azulE" colspan="5">
                                            [Registo de Actividade]<br> 
                                            {{selectedTipo}} : {{titulo}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cor-azulE">ORIGEM: </td>
                                        <td class="cor-azulC" colspan="5">{{selectedOrigem}} : {{dado_origem}}</td>
                                    </tr>
                                    <tr>
                                        <td class="cor-azulE">DE: </td>
                                        <td class="cor-azulC">{{departamento_origem}}</td>
                                        <td>
                                            <img
                                                style="border:solid #d0d5dc 1px"
                                                :src="'images/users/'+fotoSolicitante"
                                                alt="user-image"
                                                width="60px"
                                                height="60px"/>
                                        </td>
                                        <td width="15%" class="cor-azulE">PARA:</td>
                                        <td class="cor-azulC">{{departamento_destino}}</td>
                                        <td>
                                            <img
                                                style="border:solid #d0d5dc 1px"
                                                :src="'images/users/'+fotoResponsavel"
                                                alt="user-image"
                                                width="60px"
                                                height="60px"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="cor-azulE">Data de solicitação: </td>
                                        <td class="cor-azulC" colspan="5">{{data_solicitacao}}</td>
                                    </tr>
                                    <tr>
                                        <td class="cor-azulE">Data Prevista de Execução: </td>
                                        <td class="cor-azulC" colspan="2">{{data_prevista}}</td>
                                        <td class="cor-azulE" colspan="2">Tempo de Registo: </td>
                                        <td class="cor-azulC">{{tempo}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="6"><br></td>
                                    </tr>
                                    <tr>
                                        <td class="cor-azulE" style="text-align:center" colspan="6">Descrição </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6">
                                        <br>
                                        {{descricao}}
                                        <br><br>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background:#e35959;color:#fff;text-align:center" colspan="6">
                                        <br>
                                        Sistema KixiAgenda v1.0.1-2021
                                        <br><br>
                                        </td>
                                    </tr>
                                </table>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
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
                novo_dado_origem:'',
                motivo:'',
                descricao:'',
                data_execucao:'',
                data_solicitacao:'',
                tempo:'',
                departamento_origem:'',
                departamento_destino:'',
                submitStatus: null,
                is_modal2_visible: false, 
                avanco_modal:'',
                data_operacao_modal:'',
                tempo_acao_modal:'',
                descricao_accao_modal:'',
                estado_modal:'',
                responsavel_modal:'',
                codigo:'',
                qtdPermitidaDescricao:515,
                qtdeInicial:0,
                qtdeInformada:0
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
                minLength: minLength(10),
                maxLength: maxLength(515)
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
            pegaOrigens: async function(id_tipo){
                 
                let self = this               
                this.$axios.get('auth/pegaOrigens/'+id_tipo)
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
            limparCampos(){
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
            chamaRelatorioActividade(codigo_tarefa){
                var urlTarefa='auth/gerarTarefaPdf/'+codigo_tarefa; 
                
                window.open(urlTarefa, '_blank');    
            },   

            //Pega tempo de segundos para formato visual
            setTempoVisual(tempo){
                switch(tempo){
                    case 300: return '0:05';break;
                    case 600: return '0:10';break;
                    case 900: return '0:15'; break;                  
                    case 1200: return '0:20'; break;                  
                    case 1800: return '0:30'; break;                  
                    case 2400: return '0:40'; break;                  
                    case 3000: return '0:50'; break;                  
                    case 3600: return '1:00'; break;                  
                    case 5400: return '1:30'; break;                  
                    case 7200: return '2:00'; break;
                    case 9000: return '2:30'; break;
                    case 10800: return '3:00'; break;
                    case 12600: return '3:30'; break;
                    case 14400: return '4:00'; break;
                    case 16200: return '4:30'; break;
                    case 18000: return '5:00'; break;
                    case 19800: return '5:30'; break;
                    case 21600: return '6:00'; break;
                    case 23400: return '6:30'; break;
                    case 25200: return '7:00'; break;                    
                }
            },

            pegaFoto(solicitante,tipo){
                let self = this               
                this.$axios.get('auth/pegaFoto/'+solicitante)
                .then(function (response) {
                    if(response.status==200){           
                        if(tipo==1)   
                            self.fotoSolicitante = response.data;
                        else
                            self.fotoResponsavel = response.data;                                                
                    }
                })
                .catch(function (error) {
                    alert("Erro ao pegar foto");
                });      
            },

            contDescricao: async function() {
                var m = encodeURIComponent(this.descricao).match(/%[89ABab]/g);
                var descricao_length = this.descricao.length + (m ? m.length : 0);

                this.qtdeInformada = this.qtdeInicial + descricao_length;           
            },

            registarTarefa: async function(e){
                this.$v.$touch()
                if (this.$v.$invalid) {               
                    this.submitStatus = 'ERROR'
                } else { 
                    var m = encodeURIComponent(this.descricao).match(/%[89ABab]/g);
                    var descricao_length = this.descricao.length + (m ? m.length : 0);
                    if(descricao_length>515){
                        Swal.fire({
                            text: "Verifique a quantidade de texto informado na descrição.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                        return;
                    }
                    else if(this.selectedOrigem=='LITE'){
                        if(!isNaN(this.dado_origem)&&this.dado_origem.length==9){
                            this.novo_dado_origem=this.dado_origem;
                        }else{
                            Swal.fire({
                                text: "Verifique o contacto telefónico.",
                                icon: 'error',
                                confirmButtonText: 'Fechar'
                            });
                            return;
                        }
                    }else if(this.selectedOrigem=='COEL'){
                        const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if(email.test(this.dado_origem)){
                            this.novo_dado_origem=this.dado_origem;
                        }else{
                            Swal.fire({
                                text: "Verifique o email fornecido.",
                                icon: 'error',
                                confirmButtonText: 'Fechar'
                            });
                            return;
                        }
                    }else{
                        this.novo_dado_origem=this.dado_origem;
                    }
                    
                    //A data de execução vêm sem a hora, concatenamos com a hora para que a comparação seja efectuada
                    this.data_execucao=this.data_execucao+'T23:59';

                    //Verificar a data de solicitação nao ser maior q a de execução
                    if(moment(this.data_solicitacao)>moment(this.data_execucao)){
                        Swal.fire({
                            text: "A data de solicitação não pode ser maior que a data de execução.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                        return;
                    }

                    //Verificar a data de solicitação para não ser futura
                    if((moment(this.data_solicitacao)>moment())){
                        Swal.fire({
                            text: "A data de solicitação não pode ser uma data futura.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                        return;
                    }

                    //Verificar a data de execução para não ser passada
                    if((moment(this.data_execucao)<moment())){
                        Swal.fire({
                            text: "A data prevista não pode ser uma data passada.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                        return;
                    }
                    
                    //Verificar a data de execução para não ser superior a 30 dias
                    var dias =  Math.floor(( moment(this.data_execucao) - moment(this.data_solicitacao) ) / 86400000);
                    if(dias>30){
                        Swal.fire({
                            text: "A data prevista não pode exceder 30 dias.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                        return;
                    }

                    //Actividade do tipo não INACFE não pode ter tempo > 1800
                    if(this.selectedTipo!='INACFE' && this.tempo*60>1200){
                        Swal.fire({
                            text: "O tempo de registo não pode exceder 20 minutos.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        });
                        return;
                    } 
                    
                    let self = this          
                    this.$axios.post('auth/registarTarefa',{
                        'selectedTipo': this.selectedTipo,                        
                        'titulo': this.titulo.toUpperCase(),
                        'selectedOrigem': this.selectedOrigem,
                        'dado_origem': this.novo_dado_origem,
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
                            self.limparCampos();
                            $('#modalClose').click();
                          
                            Swal.fire({
                                text: "Actividade registada com sucesso.",
                                icon: 'success',
                                confirmButtonText: 'Fechar',
                                timer:1000
                            }),

                            self.$router.push({name:'dashboard'});   
                            self.chamaRelatorioActividade(response.data); 

                            location.reload();                                                                                                                                      
                        }
                        if(response.status==201){
                            Swal.fire({
                                text: response.data,
                                icon: 'error',
                                confirmButtonText: 'Fechar'
                            })
                        }
                    })
                    .catch(function (error) {
                        self.limparCampos();
                        $('#modalClose').click();
                         Swal.fire({
                            text: "Erro ao registar actividade.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        })
                    });
                }
            },

            onChangeTipo(event) {
                this.pegaOrigens(event.target.value);
            },  

            onChangeOrigem(event){
                let self = this;          
                let origem = event.target.value;
                this.origens.forEach(function(item){
                   if(item.id==origem){
                       self.motivo=item.dado;
                   }
                });
            },  

            //Pega foto utilizador
            pegaFotoUtilizador(username){             
                let self = this               
                return this.$axios.get('auth/pegaFoto/'+username)
                .then(function (response) {
                    if(response.status==200){           
                        console.log('FOTO: '+response.data);
                        return response.data;                                                           
                    }
                })
                .catch(function (error) {
                    //alert("Erro ao carregar dados do perfil");
                });                                
            },

            //Metodo de troca de username para escolher foto
            onChangeSolicitante(event) {
                if(this.selectedResponsavel == event.target.value){
                    this.selectedSolicitante='';
                    this.fotoSolicitante = 'default.jpg';
                     Swal.fire({
                        text: "O Solicitante deve ser diferente do responsável.",
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    })
                }else{
                    let self = this               
                    this.$axios.get('auth/pegaFoto/'+event.target.value)
                    .then(function (response) {
                        if(response.status==200){  
                            if(response.data==0)          
                                self.fotoSolicitante = 'default.jpg';  
                            else
                                self.fotoSolicitante = response.data;                                                                          
                        }
                    })
                    .catch(function (error) {
                        //alert("Erro ao carregar dados do perfil");
                    });       
                }
            },
                
            onChangeResponsavel(event) {
                if(this.selectedSolicitante == event.target.value){
                    this.selectedResponsavel='';
                    this.fotoResponsavel = 'default.jpg';
                    Swal.fire({
                        text: "O Responsável deve ser diferente do solicitante.",
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    })
                } else {          
                    let self = this               
                    this.$axios.get('auth/pegaFoto/'+event.target.value)
                    .then(function (response) {
                        if(response.status==200){  
                            if(response.data==0)          
                                self.fotoResponsavel = 'default.jpg';  
                            else          
                                self.fotoResponsavel = response.data;                                                      
                        }
                    })
                    .catch(function (error) {
                        //alert("Erro ao carregar dados do perfil");
                    });       
                }
            }            
        }
    }
</script>
