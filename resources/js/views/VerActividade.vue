<template>
    <div class="container-fluid">
        <br />    
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a href="#dados" data-toggle="tab" aria-expanded="true" class="nav-link active">
                                        <span class="d-inline-block d-sm-none"><i class="fas fa-home"></i></span>
                                        <span class="d-none d-sm-inline-block"><i class="fas fa-file-signature"></i> Dados da Actividade</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#accao" data-toggle="tab" aria-expanded="false" class="nav-link ">
                                        <span class="d-inline-block d-sm-none"><i class="far fa-user"></i></span>
                                        <span class="d-none d-sm-inline-block"><i class="fas fa-cog"></i> Accção Actividade</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                                     
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="dados">
                            <div id="VerActividade" v-if="visualizar">
                                <div class="row">
                                    <div class="col-12">
                                        <button id="app" v-on:click="visualizar = !visualizar" style="float: right" type="button" class="btn btn-sm btn-rounded btn-success waves-effect waves-light">
                                            <i class="far fa-edit mr-1"></i>Modificar Actividade
                                        </button>
                                    </div>
                                </div>
                                <hr style="height:1px;background-color:#d3d6d5">
                        
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="name">Tipo de Actividade</label>
                                            <input v-model.trim="selectedTipo" type="text" class="form-control form-control-sm" id="InputMostrar">
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div class="form-group">
                                            <label for="name">Objecto da Actividade</label>
                                            <input v-model.trim="titulo" type="text" class="form-control form-control-sm" id="InputMostrar">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="name">Tipo Origem</label>
                                            <input v-model.trim="selectedOrigem" type="text" class="form-control form-control-sm" id="InputMostrar">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="name">Dado Origem</label>
                                            <input v-model.trim="dado_origem" type="text" class="form-control form-control-sm" id="InputMostrar">
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="form-group">
                                            <label for="name">Tempo de Registo</label>
                                            <input v-model.trim="tempo" type="text" class="form-control form-control-sm" id="InputMostrar">                                                 
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
                                                        <input v-model.trim="departamento_origem" type="text" class="form-control form-control-sm" id="InputMostrar"> 
                                                        </div><br><br>
                                                        <div class="col-5">
                                                            <label for="name">Solicitante</label>
                                                            <input v-model.trim="selectedSolicitante" type="text" class="form-control form-control-sm" id="InputMostrar"> 
                                                        </div>
                                                        <div class="col-7">
                                                            <label for="name">Data Solicitação</label>
                                                            <input v-model.trim="data_solicitacao" type="text" class="form-control form-control-sm" id="InputMostrar">                    
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
                                                            <input v-model.trim="departamento_destino" type="text" class="form-control form-control-sm" id="InputMostrar"> 
                                                        </div><br><br>
                                                        <div class="col-5">
                                                            <label for="name">Responsável</label>
                                                            <input v-model.trim="selectedResponsavel" type="text" class="form-control form-control-sm" id="InputMostrar"> 
                                                        </div>
                                                        <div class="col-7">
                                                            <label for="name">Data Prevista</label>
                                                            <input v-model.trim="data_prevista" type="text" class="form-control form-control-sm" id="InputMostrar">
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
                                        <textarea v-model.trim="descricao" class="form-control form-control-sm" rows="5" id="InputMostrar"></textarea>
                                    </div>
                                </div>                    
                            </div>
                            <!--Formulário para editar actividade -->
                            <div id="EditarActividade" v-else="visualizar">
                                <form ref="formTarefaEdit" v-on:submit.prevent="editarTarefa">
                                    <div class="row">
                                        <div class="col-12">                                            
                                            <button style="float: right;margin:5px" type="submit" class="btn btn-sm btn-rounded btn-warning waves-effect waves-light">
                                                <i class="fas fa-save mr-1"></i>Actualizar
                                            </button>
                                            <button id="app" v-on:click="visualizar = !visualizar" style="float: right;margin:5px" type="button" class="btn btn-sm btn-rounded btn-secondary waves-effect waves-light">
                                                <i class="mdi mdi-close mr-1"></i>Cancelar
                                            </button>
                                        </div>
                                    </div>
                                    <hr style="height:1px;background-color:#d3d6d5">
                                    <input v-model.trim="idActividade" type="hidden" class="form-control form-control-sm corInput">        
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="form-group">
                                                <label for="name">Tipo de Actividade</label>
                                                <select v-model.trim="$v.selectedTipo.$model" :class="{'is-invalid':$v.selectedTipo.$error, 'is-valid':!$v.selectedTipo.$invalid}" class="custom-select custom-select-sm">
                                                    <option disabled selected>{{selectedTipo}}</option>
                                                    <option v-for="tipo in tipos">{{tipo.tipo}}</option>
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
                                                    <option disabled selected>{{selectedOrigem}}</option>
                                                    <option v-for="origem in origens">{{origem.titulo}}</option>
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
                                                    <option disabled selected v-bind:value="tempo">{{tempo}}</option>
                                                    <option>0:05</option>
                                                    <option>0:10</option>
                                                    <option>0:15</option>
                                                    <option>0:20</option>
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
                                                                    <option selected disabled v-bind:value="departamento_origem">{{departamento_origem}}</option>
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
                                                                    <option disabled selected :value="''">Responsável</option>
                                                                    <option v-for="utilizador in utilizadores" v-bind:key="utilizador.id" v-bind:value="utilizador.username">{{utilizador.username}}</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-7">
                                                                <label for="name">Data Solicitação</label>
                                                                <input v-model.trim="$v.data_solicitacaoEdit.$model" :class="{'is-invalid':$v.data_solicitacaoEdit.$error, 'is-valid':!$v.data_solicitacaoEdit.$invalid}" type="datetime-local" class="form-control form-control-sm">
                                                                <div class="invalid-feedback">
                                                                    <span v-if="!$v.data_solicitacaoEdit.required">A data deve ser fornecida</span>
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
                                                                    <option selected disabled v-bind:value="departamento_destino">{{departamento_destino}}</option>
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
                                                                <label for="name">Data Prevista</label>
                                                                <input v-model.trim="$v.data_previstaEdit.$model" :class="{'is-invalid':$v.data_previstaEdit.$error, 'is-valid':!$v.data_previstaEdit.$invalid}" type="datetime-local" class="form-control form-control-sm">
                                                                <div class="invalid-feedback">
                                                                    <span v-if="!$v.data_previstaEdit.required">A data deve ser fornecida</span>
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
                                </form>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="accao">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ModalActividade from "../components/ModalActividade.vue";
    import moment from 'moment';
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'

    export default {
        components: {
            ModalActividade
        },
        data(){
            return{
                idActividade:'',
                tipos: [],  
                origens: [], 
                utilizadores: [], 
                selectedTipo: '',
                selectedOrigem: '',
                titulo:'',
                dado_origem:'',
                descricao:'',
                data_prevista:'',
                data_solicitacao:'',
                tempo:'',
                departamento_origem:'',
                departamento_destino:'',
                selectedSolicitante: "",
                selectedResponsavel: "",
                fotoSolicitante: 'default.jpg',
                fotoResponsavel: 'default.jpg',
                visualizar: true,
                data_solicitacaoEdit:'',
                data_previstaEdit:''
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
            data_prevista: { 
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
            data_solicitacaoEdit: { 
                required     
            },
            data_previstaEdit: { 
                required     
            },            
        },
        created(){
            
            let id = this.$route.params.id;

            let self = this               
            this.$axios.get('auth/verActividade/' + id)
            .then(function (response) {
                if(response.status==200){
                    self.idActividade = response.data.id,
                    self.selectedTipo = response.data.tipo,
                    self.selectedOrigem = response.data.origem, 
                    self.titulo = response.data.titulo,  
                    self.dado_origem = response.data.origem_dado, 
                    self.tempo = self.setTempoVisual(response.data.tempo), 
                    self.departamento_origem = response.data.departamento_origem,
                    self.departamento_destino = response.data.departamento_destino,
                    self.data_solicitacao = self.pegaFormatedDataTime(response.data.data_solicitacao),
                    self.data_prevista = self.pegaFormatedDataTime(response.data.data_prevista),//self.isNullData(self.pegaFormatedDataTime(response.data.data_cumprimento)),
                    self.fotoSolicitante = response.data.solicitante+'.jpg',  
                    self.fotoResponsavel = response.data.responsavel+'.jpg',   
                    self.selectedSolicitante = response.data.solicitante,
                    self.selectedResponsavel = response.data.responsavel,
                    self.descricao = response.data.descricao,   
                    self.data_solicitacaoEdit = response.data.data_solicitacao.replace(" ", "T");                                                                                             
                    self.data_previstaEdit = response.data.data_prevista.replace(" ", "T");                                                                                                
                }
            })
            .catch(function (error) {
                alert("Erro ao ver actividade");
            });
        },
        mounted(){
            this.pegaTipos();
            this.pegaOrigens();
            this.pegaUtilizador();
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
            //Pega tempo de segundos para formato visual
            setTempoVisual(tempo){
                if(tempo==300)
                   return '0:05';
                if(tempo==600)
                   return '0:10';
                if(tempo==900)
                   return '0:15';
                if(tempo==1200)
                   return '0:20';
            },
            //Pega tempo de visual para segundos
            setTempoSegundo(tempo){
                if(tempo=='0:05')
                   return 300;
                if(tempo=='0:10')
                   return 600;
                if(tempo=='0:15')
                   return 900;
                if(tempo=='0:20')
                   return 1200;
            },
            //Pega data hora no formato DD/MM/YYYY
            pegaFormatedDataTime(data){              
                return moment(String(data)).format('DD/MM/YYYY hh:mm');
            },
            //Pega data hora no formato YYYY/MM/DD
            pegaNormalDataTime(data){              
                return moment(String(data)).format('DD/MM/YYYY hh:mm');
            },
            //ver se a data é null
            isNullData(data){
                //alert( pegaNormalDataTime(data));
                if(data==null)
                    return "Sem Data";
                if(data=="Invalid date")
                    return "Sem Data";
                else
                    return data;
            },

            //Retornar se tiver data para formato normal
            isValidData(data){
                try{
                    if(data!=null)
                        return data.replace(" ","T");
                    else
                        return "";
                }catch (e){
                    
                }                
            },
            //Pega id do Tipo
            pegaTipoID(tipoLido){
                var idTipo;
                this.tipos.forEach(function(tipo) {
                    if(tipo.tipo == tipoLido){
                        console.log("ID: "+tipo.id);
                        idTipo = tipo.id;
                    }
                });
                return idTipo;                
            },
            //Pega id da Origem
            pegaOrigemID(origemLido){
                var idOrigem;
                this.origens.forEach(function(origem) {
                    if(origem.titulo == origemLido){
                        console.log("ID: "+origem.id);
                        idOrigem = origem.id;
                    }
                });
                return idOrigem;                
            },
            editarTarefa: async function(e){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {                
                    //alert(this.idActividade);
                    //alert(this.pegaTipoID(this.selectedTipo));
                    //alert(this.titulo.toUpperCase()); 
                    //alert(this.pegaOrigemID(this.selectedOrigem));                 
                    //alert(this.dado_origem);
                    //alert(this.setTempoSegundo(this.tempo));
                    //alert(this.departamento_origem);
                    //alert(this.selectedSolicitante);
                    //alert(this.data_solicitacaoEdit.replace("T"," "));
                    //alert(this.departamento_destino);
                    //alert(this.selectedResponsavel);
                    //alert(this.data_execucaoEdit.replace("T"," "));
                    //alert(this.descricao);
                    
                    let self = this          
                    this.$axios.post('auth/editarTarefa',{
                        'id': this.idActividade,
                        'selectedTipo': this.pegaTipoID(this.selectedTipo),                        
                        'titulo': this.titulo.toUpperCase(),
                        'selectedOrigem': this.pegaOrigemID(this.selectedOrigem),
                        'dado_origem': this.dado_origem,
                        'tempo': this.setTempoSegundo(this.tempo),
                        'departamento_origem': this.departamento_origem,
                        'selectedSolicitante': this.selectedSolicitante,
                        'data_solicitacao': this.data_solicitacaoEdit.replace("T"," "),
                        'departamento_destino': this.departamento_destino,
                        'selectedResponsavel': this.selectedResponsavel,
                        'data_prevista': this.data_previstaEdit.replace("T", " "),
                        'descricao': this.descricao,
                    })
                    .then(function (response) {
                        if(response.status==200){  
                            location.reload(),
                            Swal.fire({
                                text: "Actividade Actualizada com sucesso.",
                                icon: 'success',
                                confirmButtonText: 'Fechar'
                            })
                           
                           
                                                                    
                        }else{
                            alert("LITTLE ERROR ");
                        }
                    })
                    .catch(function (error) {
                        /*self.limaparCampos();
                        $('#modalClose').click();
                        self.flashMessage.error({  
                            message: 'Erro ao registar actividade.',
                            time: 2500
                        });*/
                    });
                }
                
            },

            //Metodo de troca de username para escolher foto
            onChangeSolicitante(event) {
                this.fotoSolicitante = event.target.value+'.jpg';
            },

            onChangeResponsavel(event) {
                this.fotoResponsavel = event.target.value+'.jpg';
            }       
        }
    }
</script>
