<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Minhas Actividades</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Ver Actividade</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Ver Actividade</h4>
                </div>
            </div>
        </div>
        <br />

        <!-- Modal Relatório actividade -->
        <div class="modal fade" id="modalRelatorioActividade" tabindex="-1" aria-labelledby="fullScreenModalLabel" aria-modal="true" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                    
                    <div class="modal-body">    
                        <div class="row" style="background:none">               
                            <div class="col-11" style="background:none">               
                                <table style="margin-left:30px" class="tabela-relatorio">
                                    <tr>
                                        <td style="text-align:center;color:#111;font-weight:bold">{{codigo}}</td>
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
                                        <td style="background:#f5f5f5;color:#797a7a;text-align:center" colspan="6">
                                            Sistema KixiAgenda v1.0.1-2021
                                        </td>
                                    </tr>
                                </table>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <!-- Fim Modal Relatório actividade-->  


        <!-- Modal Relatório acção -->
        <div class="modal fade modalRelatorioAccao" v-if="is_modal_visible" id="modalRelatorioAccao" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle"aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div class="modal-content">
                    
                    <div class="modal-body">    
                        <div class="row" style="background:none">               
                            <div class="col-11" style="background:none">               
                                <table style="margin-left:30px" class="tabela-relatorio">
                                    <tr>
                                        <td style="text-align:center;color:#111;font-weight:bold;background:#f5e78e">
                                            {{codigo}}<br>
                                            ({{avanco_modal}}%)
                                        </td>
                                        <td class="cor-verdeE" colspan="4">
                                            [Registo de Acção]<br> 
                                            {{selectedTipo}} : {{titulo}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cor-verdeE" colspan="5"><br>{{descricao}}<br><br></td>
                                    </tr>
                                    <tr>
                                        <td class="cor-verdeE">Origem: </td>
                                        <td class="cor-verdeC" colspan="4">{{selectedOrigem}} : {{dado_origem}}</td>
                                    </tr>
                                    <tr>
                                        <td class="cor-verdeE">Responsável: </td>
                                        <td class="cor-verdeC" colspan="4">{{responsavel_modal}}</td>
                                    </tr>
                                    <tr>
                                        <td class="cor-verdeE">Data:</td>
                                        <td v-if="estado=='ACRG'" style="background:#66f2b3;color:#111">{{data_operacao_modal}}</td>
                                        <td v-else class="cor-verdeC">{{data_operacao_modal}}</td>
                                        <td class="cor-verdeE" colspan="2">Tempo da acção: </td>
                                        <td class="cor-verdeC">{{tempo_acao_modal}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5"><br></td>
                                    </tr>
                                    <tr>
                                        <td width="40%"  class="cor-verdeE" style="text-align:center" colspan="5">Descrição </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6">
                                        <br>
                                        {{descricao_accao_modal}}
                                        <br><br>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td v-if="estado_modal=='ACRG'" style="background:#66f2b3;color:#111;text-align:center" colspan="5">
                                            Actividade Reagendada
                                        </td>
                                        <td v-if="estado_modal=='ACCO'" style="background:#f5e78e;color:#111;text-align:center" colspan="5">
                                            Actividade Concluída
                                        </td>
                                        <td v-if="estado_modal=='ACCU'" style="background:#f5e78e;color:#111;text-align:center" colspan="5">
                                            Actividade em Curso
                                        </td>
                                        <td v-if="estado_modal=='ACRT'" style="background:#f5e78e;color:#111;text-align:center" colspan="5">
                                            Actividade Reativada
                                        </td>
                                        <td v-if="estado_modal=='CUSS'" style="background:#f5e78e;color:#111;text-align:center" colspan="5">
                                            Em Curso Solic. Suporte
                                        </td>
                                        <td v-if="estado_modal=='CURS'" style="background:#f5e78e;color:#111;text-align:center" colspan="5">
                                            Em Curso Resp. Suporte
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
        <!-- Fim Modal Relatório acção--> 

        <!-- Modal Acção -->
        <div class="modal fade" id="modalNovaAccao" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle"aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                <div class="modal-content">
                    <div id="cabeca-modal" class="modal-header">
                        <h4 class="modal-title" id="exampleModalScrollableTitle"><i class="mdi mdi-plus-circle mr-1"></i>Registar Acção</h4>
                        <button style="margin-top:-20px" id="modalCloseAccao" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">                   
                        <form v-on:submit.prevent="registarAccao">
                            <input v-model.trim="idActividade" type="hidden" class="form-control form-control-sm">                       
                            <div class="row">
                                <div class="col-3">
                                    <label for="name">Data Operação</label>
                                    <input v-model.trim="$v.data_operacao.$model" :class="{'is-invalid':$v.data_operacao.$error, 'is-valid':!$v.data_operacao.$invalid}" type="datetime-local" class="form-control form-control-sm">
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.data_operacao.required">A data deve ser fornecida</span>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <label for="name">Tempo de Acção</label>
                                    <select v-model.trim="$v.tempo_acao.$model" :class="{'is-invalid':$v.tempo_acao.$error, 'is-valid':!$v.tempo_acao.$invalid}" class="custom-select custom-select-sm ">
                                        <option selected disabled :value="''">Escolha o tempo</option>
                                        <option value="5">0:05</option>
                                        <option value="10">0:10</option>
                                        <option value="15">0:15</option>
                                        <option value="20">0:20</option>
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
                                <div class="col-3">
                                    <label for="name">Utilizador</label>
                                    <select v-model.trim="$v.utilizador_codigo.$model" :class="{'is-invalid':$v.utilizador_codigo.$error, 'is-valid':!$v.utilizador_codigo.$invalid}" class="custom-select custom-select-sm">
                                        <option disabled selected >{{utilizador_codigo}}</option>
                                        <option v-for="utilizador in utilizadores" v-bind:key="utilizador.id" v-bind:value="utilizador.username">{{utilizador.username}}</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="name">Tipo Origem</label>
                                        <select v-model.trim="$v.id_origem.$model" :class="{'is-invalid':$v.id_origem.$error, 'is-valid':!$v.id_origem.$invalid}" class="custom-select custom-select-sm">
                                            <option disabled selected :value="''">Selecione a origem</option>
                                            <option v-for="origem in origens" v-bind:value="origem.titulo">{{origem.titulo}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="name">Dado Origem</label>
                                        <input v-model.trim="$v.acOrigemDado.$model" :class="{'is-invalid':$v.acOrigemDado.$error, 'is-valid':!$v.acOrigemDado.$invalid}" type="text" class="form-control form-control-sm corInput" placeholder="Informe o dado de contacto">
                                        <div class="invalid-feedback">
                                            <span v-if="!$v.acOrigemDado.required">O Dado de origem deve ser fornecido</span>
                                            <span v-if="!$v.acOrigemDado.minLength">O Dado de origem deve possuír um tamanho maior que 5 dígitos</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <label for="name">Estado</label>
                                    <select @change="onChangeEstado($event)" v-model.trim="$v.estado.$model" :class="{'is-invalid':$v.estado.$error, 'is-valid':!$v.estado.$invalid}" class="custom-select custom-select-sm">
                                        <option selected disabled :value="''">Escolha o estado</option>
                                        <option value="ACCO">Actividade Concluída</option>
                                        <option value="ACCU">Actividade em Curso</option>
                                        <option value="ACRG">Actividade Reagendada</option>
                                        <option value="ACRE">Actividade Reativada</option>
                                        <option value="CUSS">Em Curso(Solicitar Suporte)</option>
                                        <option value="CURS">Em Curso(Responder Suporte)</option>
                                    </select>
                                </div>

                                <div v-if="tipo_accao==1" class="col-3">
                                    <label for="name">Utilizador Suporte</label>
                                    <select v-model.trim="utilizador_pergunta" class="custom-select custom-select-sm">
                                        <option disabled selected :value="''">Solicitante</option>
                                        <option selected v-for="utilizador in utilizadores" v-bind:value="utilizador.username">{{utilizador.username}}</option>
                                    </select>
                                </div>

                                <div v-if="showAvanco==1" class="col-3">
                                    <div class="form-group mb-3">
                                        <label>Avanço</label><br>
                                        <range-slider 
                                            v-model="avanco"
                                            class="slider form-control"
                                            min="0"
                                            max="100"
                                            step="1">
                                        </range-slider>
                                        <br><span class="slider-value">{{avanco}} %</span>
                                    </div>
                                </div>

                                <div v-else class="col-3">
                                    <div class="form-group mb-3">
                                        <label>Avanço</label><br>
                                        <input disabled class="form-control form-control-sm" style="text-align:center;background:#21FB92;font-size:15px;color:#000" value="100 %">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <label for="name">Descrição da Acção</label>
                                    <textarea v-model.trim="$v.descricao_accao.$model" :class="{'is-invalid':$v.descricao_accao.$error, 'is-valid':!$v.descricao_accao.$invalid}" class="form-control form-control-sm corInput" rows="5"></textarea>
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.descricao_accao.required">A descricao deve ser fornecida</span>
                                        <span v-if="!$v.descricao_accao.minLength">A descricao deve possuír um tamanho maior</span>
                                    </div>
                                </div>
                            </div>
                            <hr style="height:1px;background-color:#c9d4ce" />
                            <div class="text-right">
                                <button id="modalCloseAccao" type="button" class="btn btn-rounded btn-secondary waves-effect" data-dismiss="modal">
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
        <!-- Fim Modal Acção -->

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-6">
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
                                        <span class="d-none d-sm-inline-block"><i class="fas fa-cog"></i> Accção da Actividade</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                                     
                    <div class="tab-content">
                        <!--Aba da visualização da actividade-->
                        <div class="tab-pane fade show active" id="dados">
                            <div id="VerActividade" v-if="visualizar">
                                <div class="row">
                                    <div class="col-12">
                                        <a :href="urlTarefa" target="_blank" class="btn btn-sm btn-rounded btn-primary waves-effect waves-light">
                                            <i class="far fa-eye mr-1"></i>Relatório da Actividade
                                        </a>
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
                                    <div class="col-2">
                                        <div class="form-group">
                                            <label for="name">Código</label>
                                            <input v-model.trim="codigo" type="text" class="form-control form-control-sm" id="InputMostrar">
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-group">
                                            <label for="name">Tipo Origem</label>
                                            <input v-model.trim="selectedOrigem" type="text" class="form-control form-control-sm" id="InputMostrar">
                                        </div>
                                    </div>
                                    <div class="col-5">
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
                                        <textarea v-model.trim="descricao" class="form-control form-control-sm" rows="5" id="InputMostrar"></textarea>
                                    </div>
                                </div>                    
                            </div>
                            <!--Formulário para editar actividade -->
                            <!--<div id="EditarActividade" v-else="visualizar">
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
                            </div>-->
                        </div>

                        <!--Aba da acção da actividade-->
                        <div class="tab-pane fade" id="accao">
                            <div class="row">
                                <div class="col-8">         
                                </div>
                                <div class="col-4">                                            
                                    <button 
                                        style="float: right;margin:5px" 
                                        type="submit" 
                                        class="btn btn-sm btn-rounded btn-success waves-effect waves-light" 
                                        data-backdrop="static"
                                        data-keyboard="false"
                                        data-toggle="modal"
                                        data-target="#modalNovaAccao">
                                        <i class="mdi mdi-plus-circle mr-1"></i>Adicionar Acção
                                    </button>
                                </div>
                            </div>
                            <hr style="height:1px;background-color:#d3d6d5">
                            <table class="table table-sm table-bordeless" cellspacing="0" width="100%">
                                <thead id="cabecatabela">
                                    <tr>
                                        <th>Data</th>
                                        <th>Mensagem</th>
                                        <th>Utilizador</th>
                                        <th>Suporte a</th>
                                        <th>Estado</th>
                                        <th>Avanço</th>
                                        <th>Tempo</th>
                                    </tr>
                                </thead>
                                <tbody>                          
                                    <tr v-for="accao in accoes" @click="selectRow(accao)" class="tabelaClicked" title='Clique aqui para ver acção'>
                                        <td>{{accao.created_at}}</td>
                                        <td>{{accao.descricao}}</td>
                                        <td>{{accao.utilizador_codigo}}</td>
                                        <td>
                                            <p v-if="accao.utilizador_pergunta==null" style="color:#f5b602">Sem Suporte</p>
                                            <p v-else>{{accao.utilizador_pergunta}}</p>
                                        </td>
                                        <td>
                                            <p v-if="accao.estado=='ACCO'">Actividade Concluída</p>
                                            <p v-if="accao.estado=='ACCU'">Actividade em Curso</p>
                                            <p v-if="accao.estado=='ACRG'">Actividade Reagendada</p>
                                            <p v-if="accao.estado=='ACRT'">Actividade Reativada</p>
                                            <p v-if="accao.estado=='CUSS'">Em Curso Solic. Suporte</p>
                                            <p v-if="accao.estado=='CURS'">Em Curso Resp. Suporte</p>
                                        </td>
                                        <td>
                                            <div class="progress mb-1 progress-xl">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    {{accao.avanco}} %
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{accao.tempo_acao}}</td>
                                    </tr>
                                </tbody>
                            </table>

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
    import RangeSlider from 'vue-range-slider'
    import 'vue-range-slider/dist/vue-range-slider.css'

    import { required, minLength, maxLength } from 'vuelidate/lib/validators'


    export default {
        components: {
            ModalActividade,
            RangeSlider
        },
        data(){
            return{
                idActividade:'',
                codigo:'',
                tipos: [],  
                origens: [], 
                utilizadores: [], 
                selectedTipo: '',
                selectedOrigem: '',
                id_origem:'',
                titulo:'',
                dado_origem:'',
                acOrigemDado:'',
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
                data_previstaEdit:'',
                //Dados da Acção
                data_operacao:'',
                descricao_accao:'',
                utilizador_pergunta:'',
                estado:'',
                utilizador_codigo:'',
                tempo_acao:'',
                tipo_accao:2,  
                avanco:0,
                showAvanco:1,
                submitStatus: null,
                accoes: [],
                id_tarefa: this.$route.params.id,
                //Chamada da Modal
                is_modal_visible: false,
                avanco_modal:'',
                data_operacao_modal:'',
                tempo_acao_modal:'',
                descricao_accao_modal:'',
                estado_modal:'',
                responsavel_modal:'',
                urlTarefa: ''
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
            id_origem: { 
                required     
            },
            acOrigemDado: { 
                required,
                 minLength: minLength(5)     
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
            //Dados da acção
            data_operacao: {
                required
            },
            descricao_accao: {
                required,       
                minLength: minLength(10)
            },           
            estado: {
                required
            },           
            utilizador_codigo: {
                required
            },           
            tempo_acao: {
                required
            }        
        },
        created(){           
            this.pegaActividade();   
        },

        mounted(){
            this.pegaTipos();
            this.pegaOrigens();
            this.pegaUtilizador(); 
            this.pegaUtilizadorLogado(); 
            this.pegaAccoesTarefa();
            
        },
        methods: { 
            pegaUtilizadorLogado: async function(){
                let self = this               
                this.$axios.get('auth/pegaUtilizador')
                .then(function (response) {
                    if(response.status==200){
                        self.utilizador_codigo = response.data.username;                                    
                    }else{
                      
                    }
                })
                .catch(function (error) {
                           
                });
            },
            pegaActividade: async function(){
                //Get tarefa dados
                let id = this.$route.params.id;

                let self = this               
                this.$axios.get('auth/verActividade/' + id)
                .then(function (response) {
                    if(response.status==200){
                        self.idActividade = response.data.id,
                        self.codigo = response.data.codigo,
                        self.selectedTipo = response.data.tipo,
                        self.selectedOrigem = response.data.origem, 
                        self.titulo = response.data.titulo,  
                        self.dado_origem = response.data.origem_dado, 
                        self.tempo = self.setTempoVisual(response.data.tempo), 
                        self.departamento_origem = response.data.departamento_origem,
                        self.departamento_destino = response.data.departamento_destino,
                        self.data_solicitacao = self.pegaFormatedDataTime(response.data.data_solicitacao),
                        self.data_prevista = self.pegaFormatedDataTime(response.data.data_prevista),//self.isNullData(self.pegaFormatedDataTime(response.data.data_cumprimento)),  
                        self.selectedSolicitante = response.data.solicitante,
                        self.selectedResponsavel = response.data.responsavel,
                        self.descricao = response.data.descricao,   
                        self.data_solicitacaoEdit = response.data.data_solicitacao.replace(" ", "T");                                                                                             
                        self.data_previstaEdit = response.data.data_prevista.replace(" ", "T");  
                        self.urlTarefa = 'auth/gerarTarefaPdf/'+self.codigo;  

                        self.pegaFotoSolicitante(response.data.solicitante,1);  //tipo 1: solicitante, tipo 2: responsavel
                        self.pegaFotoSolicitante(response.data.responsavel,2);                                                                                         
                    }
                })
                .catch(function (error) {
                    alert("Erro ao ver actividade");
                });
            },
            pegaFotoSolicitante(solicitante,tipo){
                let self = this               
                this.$axios.get('auth/pegaFoto/'+solicitante)
                .then(function (response) {
                    if(response.status==200){           
                        if(tipo==1){   
                            if(response.data==0){
                                self.fotoSolicitante = 'default.jpg';
                            }else{
                                self.fotoSolicitante = response.data;
                            }
                        } else if(tipo==2){
                            if(response.data==0){
                                self.fotoResponsavel = 'default.jpg';
                            }else{
                                self.fotoResponsavel = response.data;
                            }
                        }                                                
                    }
                })
                .catch(function (error) {
                    alert("Erro ao pegar foto");
                });      
            },
            
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
                this.$axios.get('auth/pegaOrigensAll')
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
                    }else{
 
                    }
                })
                .catch(function (error) {
                    alert("Erro ao carregar dados do perfil");
                });
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
                return moment(String(data)).format('DD/MM/YYYY HH:mm');
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

            selectRow(accao){ 
                var urlAccao='auth/gerarAccaoPdf/'+accao.codigo+'/'+accao.created_at;
                
                window.open(urlAccao, '_blank');        
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

            //limpar dados do formulario acção
            limparFormAccao(){
                this.data_operacao = null;
                this.descricao_accao = null;
                this.utilizador_pergunta = null;
                this.estado = null;
                this.utilizador_codigo = null;
                this.tempo_acao = null;
                this.acOrigemDado = null; 
                this.avanco = 0;

                this.$nextTick(() => { this.$v.$reset(); });   
            },

            //Registar acção de uma actividade
            registarAccao: async function(e){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    if(moment(this.data_operacao)<moment() && this.estado=='ACRG'){
                        Swal.fire({
                                text: "A data da operação deve ser superior.",
                                icon: 'error',
                                confirmButtonText: 'Fechar'
                        });
                        return;
                    }
                   
                    let self = this          
                    this.$axios.post('auth/registarOperacao',{
                        'tarefa_id': this.idActividade,
                        'codigo': this.codigo,
                        'id_origem': this.id_origem,
                        'acOrigemDado':this.acOrigemDado,
                        'data_operacao': this.data_operacao.replace("T", " "),                        
                        'tempo_acao': this.tempo_acao,
                        'utilizador_codigo': this.utilizador_codigo,
                        'estado': this.estado,
                        'avanco': this.avanco,
                        'utilizador_pergunta': this.utilizador_pergunta,
                        'descricao_accao': this.descricao_accao,
                    })
                    .then(function (response) {
                        if(response.status==200){
                            self.limparFormAccao();
                            $('#modalCloseAccao').click();  

                            self.pegaAccoesTarefa();                        
                            Swal.fire({
                                text: "Acção registada com sucesso.",
                                icon: 'success',
                                timer: 1500,
                                confirmButtonText: 'Fechar'
                            })
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
                        $('#modalCloseAccao').click();    
                        Swal.fire({
                            text: "Erro ao registar Acção.",
                            icon: 'error',
                            confirmButtonText: 'Fechar'
                        })
                    });
                }              
            },

            //Listar as acções registadas a uma tarefa
            pegaAccoesTarefa: async function(){
                let self = this               
                this.$axios.get('auth/pegaAccoes/'+this.id_tarefa)
                .then(function (response) {
                    if(response.status==200){
                        self.accoes = response.data;                                                                                 
                    }
                })
                .catch(function (error) {
                    alert("Erro ao carregar dados da acção");
                });
            },

            //Metodo que activa utilizador pergunta, caso o estado for solicitar suporte
            onChangeEstado(event) {
                if(event.target.value=='ACCO'){
                    this.showAvanco = 0;
                    this.avanco = 100;
                } else
                    this.showAvanco = 1;

                if(event.target.value=='CUSS'||event.target.value=='CURS')
                    this.tipo_accao = 1;
                else
                    this.tipo_accao = 0;
            },

            //Função para ver relatorio actividade
            verPdfActividade: async function(){
                this.$axios.get('auth/gerarTarefaPdf/');
            }
        }
    }
</script>
<style>
    .slider {
    width: 100%;
    
    }
    .slider-value{
        color:#21FB92;
        font-size:18px;
        font-weight:bold;
        margin-left: 120px;
    }
</style> 