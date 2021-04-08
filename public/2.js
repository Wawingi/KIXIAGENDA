(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VerActividade.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ModalActividade_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ModalActividade.vue */ "./resources/js/components/ModalActividade.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_range_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-range-slider */ "./node_modules/vue-range-slider/dist/vue-range-slider.cjs.js");
/* harmony import */ var vue_range_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_range_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_range_slider_dist_vue_range_slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-range-slider/dist/vue-range-slider.css */ "./node_modules/vue-range-slider/dist/vue-range-slider.css");
/* harmony import */ var vue_range_slider_dist_vue_range_slider_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_range_slider_dist_vue_range_slider_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalActividade: _components_ModalActividade_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RangeSlider: vue_range_slider__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      idActividade: '',
      codigo: '',
      tipos: [],
      origens: [],
      utilizadores: [],
      selectedTipo: '',
      selectedOrigem: '',
      id_origem: '',
      titulo: '',
      dado_origem: '',
      acOrigemDado: '',
      descricao: '',
      data_prevista: '',
      data_solicitacao: '',
      tempo: '',
      departamento_origem: '',
      departamento_destino: '',
      selectedSolicitante: "",
      selectedResponsavel: "",
      fotoSolicitante: 'default.jpg',
      fotoResponsavel: 'default.jpg',
      visualizar: true,
      data_solicitacaoEdit: '',
      data_previstaEdit: '',
      //Dados da Acção
      data_operacao: '',
      descricao_accao: '',
      utilizador_pergunta: '',
      estado: '',
      utilizador_codigo: '',
      tempo_acao: '',
      tipo_accao: 2,
      avanco: 0,
      showAvanco: 1,
      submitStatus: null,
      accoes: [],
      id_tarefa: this.$route.params.id
    };
  },
  validations: {
    titulo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["minLength"])(5)
    },
    dado_origem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["minLength"])(5)
    },
    descricao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["minLength"])(10)
    },
    data_prevista: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    data_solicitacao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    selectedSolicitante: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    selectedResponsavel: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    selectedTipo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    selectedOrigem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    id_origem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    acOrigemDado: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["minLength"])(5)
    },
    tempo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    departamento_origem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    departamento_destino: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    data_solicitacaoEdit: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    data_previstaEdit: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    //Dados da acção
    data_operacao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    descricao_accao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["minLength"])(10)
    },
    estado: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    utilizador_codigo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    },
    tempo_acao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"]
    }
  },
  created: function created() {
    var id = this.$route.params.id;
    var self = this;
    this.$axios.get('auth/verActividade/' + id).then(function (response) {
      if (response.status == 200) {
        self.idActividade = response.data.id, self.codigo = response.data.codigo, self.selectedTipo = response.data.tipo, self.selectedOrigem = response.data.origem, self.titulo = response.data.titulo, self.dado_origem = response.data.origem_dado, self.tempo = self.setTempoVisual(response.data.tempo), self.departamento_origem = response.data.departamento_origem, self.departamento_destino = response.data.departamento_destino, self.data_solicitacao = self.pegaFormatedDataTime(response.data.data_solicitacao), self.data_prevista = self.pegaFormatedDataTime(response.data.data_prevista), //self.isNullData(self.pegaFormatedDataTime(response.data.data_cumprimento)),
        self.fotoSolicitante = response.data.solicitante + '.jpg', self.fotoResponsavel = response.data.responsavel + '.jpg', self.selectedSolicitante = response.data.solicitante, self.selectedResponsavel = response.data.responsavel, self.descricao = response.data.descricao, self.data_solicitacaoEdit = response.data.data_solicitacao.replace(" ", "T");
        self.data_previstaEdit = response.data.data_prevista.replace(" ", "T");
      }
    })["catch"](function (error) {
      alert("Erro ao ver actividade");
    });
  },
  mounted: function mounted() {
    this.pegaTipos();
    this.pegaOrigens();
    this.pegaUtilizador();
    this.pegaAccoesTarefa();
  },
  methods: {
    pegaTipos: function () {
      var _pegaTipos = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                this.$axios.get('auth/pegaTipos').then(function (response) {
                  if (response.status == 200) {
                    self.tipos = response.data;
                    console.log(response.data);
                  }
                })["catch"](function (error) {//alert("Erro ao carregar dados do perfil");
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function pegaTipos() {
        return _pegaTipos.apply(this, arguments);
      }

      return pegaTipos;
    }(),
    pegaOrigens: function () {
      var _pegaOrigens = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                this.$axios.get('auth/pegaOrigens').then(function (response) {
                  if (response.status == 200) {
                    self.origens = response.data;
                    console.log(response.data);
                  }
                })["catch"](function (error) {//alert("Erro ao carregar dados do perfil");
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function pegaOrigens() {
        return _pegaOrigens.apply(this, arguments);
      }

      return pegaOrigens;
    }(),
    pegaUtilizador: function () {
      var _pegaUtilizador = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                this.$axios.get('auth/pegaUtilizadores').then(function (response) {
                  if (response.status == 200) {
                    self.utilizadores = response.data;
                    console.log(response.data);
                  } else {}
                })["catch"](function (error) {
                  alert("Erro ao carregar dados do perfil");
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function pegaUtilizador() {
        return _pegaUtilizador.apply(this, arguments);
      }

      return pegaUtilizador;
    }(),
    //Pega tempo de segundos para formato visual
    setTempoVisual: function setTempoVisual(tempo) {
      switch (tempo) {
        case 300:
          return '0:05';
          break;

        case 600:
          return '0:10';
          break;

        case 900:
          return '0:15';
          break;

        case 1200:
          return '0:20';
          break;

        case 1800:
          return '0:30';
          break;

        case 2400:
          return '0:40';
          break;

        case 3000:
          return '0:50';
          break;

        case 3600:
          return '1:00';
          break;

        case 5400:
          return '1:30';
          break;

        case 7200:
          return '2:00';
          break;

        case 9000:
          return '2:30';
          break;

        case 10800:
          return '3:00';
          break;

        case 12600:
          return '3:30';
          break;

        case 14400:
          return '4:00';
          break;

        case 16200:
          return '4:30';
          break;

        case 18000:
          return '5:00';
          break;

        case 19800:
          return '5:30';
          break;

        case 21600:
          return '6:00';
          break;

        case 23400:
          return '6:30';
          break;

        case 25200:
          return '7:00';
          break;
      }
    },
    //Pega tempo de visual para segundos
    setTempoSegundo: function setTempoSegundo(tempo) {
      if (tempo == '0:05') return 300;
      if (tempo == '0:10') return 600;
      if (tempo == '0:15') return 900;
      if (tempo == '0:20') return 1200;
    },
    //Pega data hora no formato DD/MM/YYYY
    pegaFormatedDataTime: function pegaFormatedDataTime(data) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(String(data)).format('DD/MM/YYYY hh:mm');
    },
    //Pega data hora no formato YYYY/MM/DD
    pegaNormalDataTime: function pegaNormalDataTime(data) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(String(data)).format('DD/MM/YYYY hh:mm');
    },
    //ver se a data é null
    isNullData: function isNullData(data) {
      //alert( pegaNormalDataTime(data));
      if (data == null) return "Sem Data";
      if (data == "Invalid date") return "Sem Data";else return data;
    },
    //Retornar se tiver data para formato normal
    isValidData: function isValidData(data) {
      try {
        if (data != null) return data.replace(" ", "T");else return "";
      } catch (e) {}
    },
    //Pega id do Tipo
    pegaTipoID: function pegaTipoID(tipoLido) {
      var idTipo;
      this.tipos.forEach(function (tipo) {
        if (tipo.tipo == tipoLido) {
          console.log("ID: " + tipo.id);
          idTipo = tipo.id;
        }
      });
      return idTipo;
    },
    //Pega id da Origem
    pegaOrigemID: function pegaOrigemID(origemLido) {
      var idOrigem;
      this.origens.forEach(function (origem) {
        if (origem.titulo == origemLido) {
          console.log("ID: " + origem.id);
          idOrigem = origem.id;
        }
      });
      return idOrigem;
    },
    editarTarefa: function () {
      var _editarTarefa = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$v.$touch();

                if (this.$v.$invalid) {
                  this.submitStatus = 'ERROR';
                } else {
                  self = this;
                  this.$axios.post('auth/editarTarefa', {
                    'id': this.idActividade,
                    'selectedTipo': this.pegaTipoID(this.selectedTipo),
                    'titulo': this.titulo.toUpperCase(),
                    'selectedOrigem': this.pegaOrigemID(this.selectedOrigem),
                    'dado_origem': this.dado_origem,
                    'tempo': this.setTempoSegundo(this.tempo),
                    'departamento_origem': this.departamento_origem,
                    'selectedSolicitante': this.selectedSolicitante,
                    'data_solicitacao': this.data_solicitacaoEdit.replace("T", " "),
                    'departamento_destino': this.departamento_destino,
                    'selectedResponsavel': this.selectedResponsavel,
                    'data_prevista': this.data_previstaEdit.replace("T", " "),
                    'descricao': this.descricao
                  }).then(function (response) {
                    if (response.status == 200) {
                      location.reload(), Swal.fire({
                        text: "Actividade Actualizada com sucesso.",
                        icon: 'success',
                        confirmButtonText: 'Fechar'
                      });
                    } else {
                      alert("LITTLE ERROR ");
                    }
                  })["catch"](function (error) {
                    /*self.limaparCampos();
                    $('#modalClose').click();
                    self.flashMessage.error({  
                        message: 'Erro ao registar actividade.',
                        time: 2500
                    });*/
                  });
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editarTarefa(_x) {
        return _editarTarefa.apply(this, arguments);
      }

      return editarTarefa;
    }(),
    //limpar dados do formulario acção
    limparFormAccao: function limparFormAccao() {
      var _this = this;

      this.data_operacao = null;
      this.descricao_accao = null;
      this.utilizador_pergunta = null;
      this.estado = null;
      this.utilizador_codigo = null;
      this.tempo_acao = null; //this.tipo_accao:2,  

      this.avanco = 0;
      this.$nextTick(function () {
        _this.$v.$reset();
      });
    },
    //Registar acção de uma actividade
    registarAccao: function () {
      var _registarAccao = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(e) {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$v.$touch();

                if (this.$v.$invalid) {
                  this.submitStatus = 'ERROR';
                } else {
                  self = this;
                  this.$axios.post('auth/registarOperacao', {
                    'tarefa_id': this.idActividade,
                    'codigo': this.codigo,
                    'id_origem': this.id_origem,
                    'acOrigemDado': this.acOrigemDado,
                    'data_operacao': this.data_operacao.replace("T", " "),
                    'tempo_acao': this.tempo_acao,
                    'utilizador_codigo': this.utilizador_codigo,
                    'estado': this.estado,
                    'avanco': this.avanco,
                    'utilizador_pergunta': this.utilizador_pergunta,
                    'descricao_accao': this.descricao_accao
                  }).then(function (response) {
                    if (response.status == 200) {
                      self.limparFormAccao();
                      $('#modalCloseAccao').click();
                      self.pegaAccoesTarefa();
                      Swal.fire({
                        text: "Acção registada com sucesso.",
                        icon: 'success',
                        confirmButtonText: 'Fechar'
                      }); //location.reload();
                    } else {//alert("LITTLE ERROR ");
                      }
                  })["catch"](function (error) {
                    $('#modalCloseAccao').click();
                    Swal.fire({
                      text: "Erro ao registar Acção.",
                      icon: 'error',
                      confirmButtonText: 'Fechar'
                    });
                  });
                }

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function registarAccao(_x2) {
        return _registarAccao.apply(this, arguments);
      }

      return registarAccao;
    }(),
    //Listar as acções registadas a uma tarefa
    pegaAccoesTarefa: function () {
      var _pegaAccoesTarefa = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                this.$axios.get('auth/pegaAccoes/' + this.id_tarefa).then(function (response) {
                  if (response.status == 200) {
                    self.accoes = response.data;
                  }
                })["catch"](function (error) {
                  alert("Erro ao carregar dados da acção");
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function pegaAccoesTarefa() {
        return _pegaAccoesTarefa.apply(this, arguments);
      }

      return pegaAccoesTarefa;
    }(),
    //Metodo que activa utilizador pergunta, caso o estado for solicitar suporte
    onChangeEstado: function onChangeEstado(event) {
      if (event.target.value == 'ACCO') {
        this.showAvanco = 0;
        this.avanco = 100;
      } else this.showAvanco = 1;

      if (event.target.value == 'CUSS' || event.target.value == 'CURS') this.tipo_accao = 1;else this.tipo_accao = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.slider {\r\n  width: 100%;\n}\n.slider-value{\r\n    color:#21FB92;\r\n    font-size:18px;\r\n    font-weight:bold;\r\n    margin-left: 120px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./VerActividade.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=template&id=739debbc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VerActividade.vue?vue&type=template&id=739debbc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalNovaAccao",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalScrollableTitle",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-scrollable modal-xl",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.registarAccao($event)
                      }
                    }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.idActividade,
                          expression: "idActividade",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: { type: "hidden" },
                      domProps: { value: _vm.idActividade },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.idActividade = $event.target.value.trim()
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Data Operação")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.data_operacao.$model,
                              expression: "$v.data_operacao.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control form-control-sm",
                          class: {
                            "is-invalid": _vm.$v.data_operacao.$error,
                            "is-valid": !_vm.$v.data_operacao.$invalid
                          },
                          attrs: { type: "datetime-local" },
                          domProps: { value: _vm.$v.data_operacao.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.data_operacao,
                                "$model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          !_vm.$v.data_operacao.required
                            ? _c("span", [_vm._v("A data deve ser fornecida")])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Tempo de Acção")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.tempo_acao.$model,
                                expression: "$v.tempo_acao.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select custom-select-sm ",
                            class: {
                              "is-invalid": _vm.$v.tempo_acao.$error,
                              "is-valid": !_vm.$v.tempo_acao.$invalid
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.$v.tempo_acao,
                                  "$model",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: { selected: "", disabled: "" },
                                domProps: { value: "" }
                              },
                              [_vm._v("Escolha o tempo")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "5" } }, [
                              _vm._v("0:05")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "10" } }, [
                              _vm._v("0:10")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "15" } }, [
                              _vm._v("0:15")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "20" } }, [
                              _vm._v("0:20")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "30" } }, [
                              _vm._v("0:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "40" } }, [
                              _vm._v("0:40")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "50" } }, [
                              _vm._v("0:50")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "60" } }, [
                              _vm._v("1:00")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "90" } }, [
                              _vm._v("1:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "120" } }, [
                              _vm._v("2:00")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "150" } }, [
                              _vm._v("2:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "180" } }, [
                              _vm._v("3:00")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "210" } }, [
                              _vm._v("3:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "240" } }, [
                              _vm._v("4:00")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "270" } }, [
                              _vm._v("4:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "300" } }, [
                              _vm._v("5:00")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "330" } }, [
                              _vm._v("5:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "360" } }, [
                              _vm._v("6:00")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "390" } }, [
                              _vm._v("6:30")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "420" } }, [
                              _vm._v("7:00")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Utilizador")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.utilizador_codigo.$model,
                                expression: "$v.utilizador_codigo.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select custom-select-sm",
                            class: {
                              "is-invalid": _vm.$v.utilizador_codigo.$error,
                              "is-valid": !_vm.$v.utilizador_codigo.$invalid
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.$v.utilizador_codigo,
                                  "$model",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: { disabled: "", selected: "" },
                                domProps: { value: "" }
                              },
                              [_vm._v("Escolha o utilizador")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.utilizadores, function(utilizador) {
                              return _c(
                                "option",
                                {
                                  key: utilizador.id,
                                  domProps: { value: utilizador.username }
                                },
                                [_vm._v(_vm._s(utilizador.username))]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Tipo Origem")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.$v.id_origem.$model,
                                  expression: "$v.id_origem.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "custom-select custom-select-sm",
                              class: {
                                "is-invalid": _vm.$v.id_origem.$error,
                                "is-valid": !_vm.$v.id_origem.$invalid
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.$v.id_origem,
                                    "$model",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: { disabled: "", selected: "" },
                                  domProps: { value: "" }
                                },
                                [_vm._v("Selecione a origem")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.origens, function(origem) {
                                return _c(
                                  "option",
                                  { domProps: { value: origem.titulo } },
                                  [_vm._v(_vm._s(origem.titulo))]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Dado Origem")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.acOrigemDado.$model,
                                expression: "$v.acOrigemDado.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass:
                              "form-control form-control-sm corInput",
                            class: {
                              "is-invalid": _vm.$v.acOrigemDado.$error,
                              "is-valid": !_vm.$v.acOrigemDado.$invalid
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Informe o dado de contacto"
                            },
                            domProps: { value: _vm.$v.acOrigemDado.$model },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.$v.acOrigemDado,
                                  "$model",
                                  $event.target.value.trim()
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "invalid-feedback" }, [
                            !_vm.$v.acOrigemDado.required
                              ? _c("span", [
                                  _vm._v("O Dado de origem deve ser fornecido")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$v.acOrigemDado.minLength
                              ? _c("span", [
                                  _vm._v(
                                    "O Dado de origem deve possuír um tamanho maior que 5 dígitos"
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Estado")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.estado.$model,
                                expression: "$v.estado.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select custom-select-sm",
                            class: {
                              "is-invalid": _vm.$v.estado.$error,
                              "is-valid": !_vm.$v.estado.$invalid
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.$v.estado,
                                    "$model",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.onChangeEstado($event)
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: { selected: "", disabled: "" },
                                domProps: { value: "" }
                              },
                              [_vm._v("Escolha o estado")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ACCO" } }, [
                              _vm._v("Actividade Concluída")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ACCU" } }, [
                              _vm._v("Actividade em Curso")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ACRG" } }, [
                              _vm._v("Actividade Reagendada")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ACRT" } }, [
                              _vm._v("Actividade Reativada")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "CUSS" } }, [
                              _vm._v("Em Curso(Solicitar Suporte)")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "CURS" } }, [
                              _vm._v("Em Curso(Responder Suporte)")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.tipo_accao == 1
                        ? _c("div", { staticClass: "col-3" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Utilizador Suporte")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: _vm.utilizador_pergunta,
                                    expression: "utilizador_pergunta",
                                    modifiers: { trim: true }
                                  }
                                ],
                                staticClass: "custom-select custom-select-sm",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.utilizador_pergunta = $event.target
                                      .multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    attrs: { disabled: "", selected: "" },
                                    domProps: { value: "" }
                                  },
                                  [_vm._v("Solicitante")]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.utilizadores, function(utilizador) {
                                  return _c(
                                    "option",
                                    {
                                      attrs: { selected: "" },
                                      domProps: { value: utilizador.username }
                                    },
                                    [_vm._v(_vm._s(utilizador.username))]
                                  )
                                })
                              ],
                              2
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.showAvanco == 1
                        ? _c("div", { staticClass: "col-3" }, [
                            _c(
                              "div",
                              { staticClass: "form-group mb-3" },
                              [
                                _c("label", [_vm._v("Avanço")]),
                                _c("br"),
                                _vm._v(" "),
                                _c("range-slider", {
                                  staticClass: "slider form-control",
                                  attrs: { min: "0", max: "100", step: "1" },
                                  model: {
                                    value: _vm.avanco,
                                    callback: function($$v) {
                                      _vm.avanco = $$v
                                    },
                                    expression: "avanco"
                                  }
                                }),
                                _vm._v(" "),
                                _c("br"),
                                _c("span", { staticClass: "slider-value" }, [
                                  _vm._v(_vm._s(_vm.avanco) + " %")
                                ])
                              ],
                              1
                            )
                          ])
                        : _c("div", { staticClass: "col-3" }, [_vm._m(2)])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Descrição da Acção")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.$v.descricao_accao.$model,
                              expression: "$v.descricao_accao.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control form-control-sm corInput",
                          class: {
                            "is-invalid": _vm.$v.descricao_accao.$error,
                            "is-valid": !_vm.$v.descricao_accao.$invalid
                          },
                          attrs: { rows: "5" },
                          domProps: { value: _vm.$v.descricao_accao.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.descricao_accao,
                                "$model",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" }, [
                          !_vm.$v.descricao_accao.required
                            ? _c("span", [
                                _vm._v("A descricao deve ser fornecida")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.descricao_accao.minLength
                            ? _c("span", [
                                _vm._v(
                                  "A descricao deve possuír um tamanho maior"
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: {
                        height: "1px",
                        "background-color": "#c9d4ce"
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card-box" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              {
                staticClass: "tab-pane fade show active",
                attrs: { id: "dados" }
              },
              [
                _vm.visualizar
                  ? _c("div", { attrs: { id: "VerActividade" } }, [
                      _c("hr", {
                        staticStyle: {
                          height: "1px",
                          "background-color": "#d3d6d5"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-4" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Tipo de Actividade")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.selectedTipo,
                                  expression: "selectedTipo",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", id: "InputMostrar" },
                              domProps: { value: _vm.selectedTipo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.selectedTipo = $event.target.value.trim()
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-8" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Objecto da Actividade")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.titulo,
                                  expression: "titulo",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", id: "InputMostrar" },
                              domProps: { value: _vm.titulo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.titulo = $event.target.value.trim()
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-2" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Código")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.codigo,
                                  expression: "codigo",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", id: "InputMostrar" },
                              domProps: { value: _vm.codigo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.codigo = $event.target.value.trim()
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-3" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Tipo Origem")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.selectedOrigem,
                                  expression: "selectedOrigem",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", id: "InputMostrar" },
                              domProps: { value: _vm.selectedOrigem },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.selectedOrigem = $event.target.value.trim()
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-5" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Dado Origem")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.dado_origem,
                                  expression: "dado_origem",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", id: "InputMostrar" },
                              domProps: { value: _vm.dado_origem },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.dado_origem = $event.target.value.trim()
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-2" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Tempo de Registo")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: _vm.tempo,
                                  expression: "tempo",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control form-control-sm",
                              attrs: { type: "text", id: "InputMostrar" },
                              domProps: { value: _vm.tempo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.tempo = $event.target.value.trim()
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6" }, [
                          _c("fieldset", { staticClass: "border p-2" }, [
                            _c(
                              "legend",
                              {
                                staticClass: "w-auto",
                                staticStyle: { "font-size": "16px" }
                              },
                              [_vm._v("DE: ")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-row" }, [
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: _vm.departamento_origem,
                                          expression: "departamento_origem",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      attrs: {
                                        type: "text",
                                        id: "InputMostrar"
                                      },
                                      domProps: {
                                        value: _vm.departamento_origem
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.departamento_origem = $event.target.value.trim()
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    })
                                  ]),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-5" }, [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Solicitante")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: _vm.selectedSolicitante,
                                          expression: "selectedSolicitante",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      attrs: {
                                        type: "text",
                                        id: "InputMostrar"
                                      },
                                      domProps: {
                                        value: _vm.selectedSolicitante
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.selectedSolicitante = $event.target.value.trim()
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-7" }, [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Data Solicitação")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: _vm.data_solicitacao,
                                          expression: "data_solicitacao",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      attrs: {
                                        type: "text",
                                        id: "InputMostrar"
                                      },
                                      domProps: { value: _vm.data_solicitacao },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.data_solicitacao = $event.target.value.trim()
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  staticStyle: { border: "solid #d0d5dc 1px" },
                                  attrs: {
                                    src: "/images/users/" + _vm.fotoSolicitante,
                                    alt: "user-image",
                                    width: "112px",
                                    height: "112px"
                                  }
                                })
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c("fieldset", { staticClass: "border p-2" }, [
                            _c(
                              "legend",
                              {
                                staticClass: "w-auto",
                                staticStyle: { "font-size": "16px" }
                              },
                              [_vm._v("PARA: ")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-row" }, [
                              _c("div", { staticClass: "col-md-8" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: _vm.departamento_destino,
                                          expression: "departamento_destino",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      attrs: {
                                        type: "text",
                                        id: "InputMostrar"
                                      },
                                      domProps: {
                                        value: _vm.departamento_destino
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.departamento_destino = $event.target.value.trim()
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    })
                                  ]),
                                  _c("br"),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-5" }, [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Responsável")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: _vm.selectedResponsavel,
                                          expression: "selectedResponsavel",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      attrs: {
                                        type: "text",
                                        id: "InputMostrar"
                                      },
                                      domProps: {
                                        value: _vm.selectedResponsavel
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.selectedResponsavel = $event.target.value.trim()
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-7" }, [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Data Prevista")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: _vm.data_prevista,
                                          expression: "data_prevista",
                                          modifiers: { trim: true }
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm",
                                      attrs: {
                                        type: "text",
                                        id: "InputMostrar"
                                      },
                                      domProps: { value: _vm.data_prevista },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.data_prevista = $event.target.value.trim()
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c("img", {
                                  staticClass: "rounded-circle foto",
                                  staticStyle: { border: "solid #d0d5dc 1px" },
                                  attrs: {
                                    src: "/images/users/" + _vm.fotoResponsavel,
                                    alt: "user-image",
                                    width: "114px",
                                    height: "114px"
                                  }
                                })
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Descrição")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.descricao,
                                expression: "descricao",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "form-control form-control-sm",
                            attrs: { rows: "5", id: "InputMostrar" },
                            domProps: { value: _vm.descricao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.descricao = $event.target.value.trim()
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ])
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-pane fade", attrs: { id: "accao" } },
              [
                _vm._m(5),
                _vm._v(" "),
                _c("hr", {
                  staticStyle: { height: "1px", "background-color": "#d3d6d5" }
                }),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table table-sm table-bordeless",
                    attrs: { cellspacing: "0", width: "100%" }
                  },
                  [
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.accoes, function(accao) {
                        return _c(
                          "tr",
                          {
                            staticClass: "tabelaClicked",
                            attrs: { title: "Clique aqui para Editar acção" }
                          },
                          [
                            _c("td", [_vm._v(_vm._s(accao.created_at))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(accao.descricao))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(accao.utilizador_codigo))]),
                            _vm._v(" "),
                            _c("td", [
                              accao.utilizador_pergunta == null
                                ? _c(
                                    "p",
                                    { staticStyle: { color: "#f5b602" } },
                                    [_vm._v("Sem Suporte")]
                                  )
                                : _c("p", [
                                    _vm._v(_vm._s(accao.utilizador_pergunta))
                                  ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              accao.estado == "ACCO"
                                ? _c("p", [_vm._v("Actividade Concluída")])
                                : _vm._e(),
                              _vm._v(" "),
                              accao.estado == "ACCU"
                                ? _c("p", [_vm._v("Actividade em Curso")])
                                : _vm._e(),
                              _vm._v(" "),
                              accao.estado == "ACRG"
                                ? _c("p", [_vm._v("Actividade Reagendada")])
                                : _vm._e(),
                              _vm._v(" "),
                              accao.estado == "ACRT"
                                ? _c("p", [_vm._v("Actividade Reativada")])
                                : _vm._e(),
                              _vm._v(" "),
                              accao.estado == "CUSS"
                                ? _c("p", [_vm._v("Em Curso Solic. Suporte")])
                                : _vm._e(),
                              _vm._v(" "),
                              accao.estado == "CURS"
                                ? _c("p", [_vm._v("Em Curso Resp. Suporte")])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "div",
                                { staticClass: "progress mb-1 progress-xl" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "progress-bar bg-success",
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        role: "progressbar",
                                        "aria-valuenow": "50",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(accao.avanco) +
                                          " %\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(accao.tempo_acao))])
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "page-title-box" }, [
          _c("div", { staticClass: "page-title-right" }, [
            _c("ol", { staticClass: "breadcrumb m-0" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("KIXIAGENDA")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Minhas Actividades")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Ver Actividade")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "page-title" }, [_vm._v("Ver Actividade")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal-header", attrs: { id: "cabeca-modal" } },
      [
        _c(
          "h4",
          {
            staticClass: "modal-title",
            attrs: { id: "exampleModalScrollableTitle" }
          },
          [
            _c("i", { staticClass: "mdi mdi-plus-circle mr-1" }),
            _vm._v("Registar Acção")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "close",
            staticStyle: { "margin-top": "-20px" },
            attrs: {
              id: "modalCloseAccao",
              type: "button",
              "data-dismiss": "modal",
              "aria-label": "Close"
            }
          },
          [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mb-3" }, [
      _c("label", [_vm._v("Avanço")]),
      _c("br"),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control form-control-sm",
        staticStyle: {
          "text-align": "center",
          background: "#21FB92",
          "font-size": "15px",
          color: "#000"
        },
        attrs: { disabled: "", value: "100 %" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-rounded btn-secondary waves-effect",
          attrs: {
            id: "modalCloseAccao",
            type: "button",
            "data-dismiss": "modal"
          }
        },
        [
          _c("i", { staticClass: "mdi mdi-close mr-1" }),
          _vm._v("Fechar\n                            ")
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-rounded btn-warning waves-effect waves-light",
          attrs: { type: "submit" }
        },
        [
          _c("i", { staticClass: "mdi mdi-content-save mr-1" }),
          _vm._v("Registar\n                            ")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("ul", { staticClass: "nav nav-tabs" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  href: "#dados",
                  "data-toggle": "tab",
                  "aria-expanded": "true"
                }
              },
              [
                _c("span", { staticClass: "d-inline-block d-sm-none" }, [
                  _c("i", { staticClass: "fas fa-home" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "d-none d-sm-inline-block" }, [
                  _c("i", { staticClass: "fas fa-file-signature" }),
                  _vm._v(" Dados da Actividade")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link ",
                attrs: {
                  href: "#accao",
                  "data-toggle": "tab",
                  "aria-expanded": "false"
                }
              },
              [
                _c("span", { staticClass: "d-inline-block d-sm-none" }, [
                  _c("i", { staticClass: "far fa-user" })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "d-none d-sm-inline-block" }, [
                  _c("i", { staticClass: "fas fa-cog" }),
                  _vm._v(" Accção da Actividade")
                ])
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c(
          "button",
          {
            staticClass:
              "btn btn-sm btn-rounded btn-success waves-effect waves-light",
            staticStyle: { float: "right", margin: "5px" },
            attrs: {
              type: "submit",
              "data-backdrop": "static",
              "data-keyboard": "false",
              "data-toggle": "modal",
              "data-target": "#modalNovaAccao"
            }
          },
          [
            _c("i", { staticClass: "mdi mdi-plus-circle mr-1" }),
            _vm._v("Adicionar Acção\n                                ")
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { attrs: { id: "cabecatabela" } }, [
      _c("tr", [
        _c("th", [_vm._v("Data")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mensagem")]),
        _vm._v(" "),
        _c("th", [_vm._v("Utilizador")]),
        _vm._v(" "),
        _c("th", [_vm._v("Suporte a")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Avanço")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tempo")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/VerActividade.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/VerActividade.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerActividade_vue_vue_type_template_id_739debbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerActividade.vue?vue&type=template&id=739debbc& */ "./resources/js/views/VerActividade.vue?vue&type=template&id=739debbc&");
/* harmony import */ var _VerActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerActividade.vue?vue&type=script&lang=js& */ "./resources/js/views/VerActividade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerActividade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerActividade.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerActividade_vue_vue_type_template_id_739debbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerActividade_vue_vue_type_template_id_739debbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/VerActividade.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/VerActividade.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/VerActividade.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VerActividade.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./VerActividade.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/VerActividade.vue?vue&type=template&id=739debbc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/VerActividade.vue?vue&type=template&id=739debbc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_template_id_739debbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VerActividade.vue?vue&type=template&id=739debbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VerActividade.vue?vue&type=template&id=739debbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_template_id_739debbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerActividade_vue_vue_type_template_id_739debbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);