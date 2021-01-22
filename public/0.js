(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalActividade.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalActividade.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
      titulo: '',
      dado_origem: '',
      descricao: '',
      data_execucao: '',
      data_solicitacao: '',
      tempo: '',
      departamento_origem: '',
      departamento_destino: '',
      submitStatus: null
    };
  },
  validations: {
    titulo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(5)
    },
    dado_origem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(5)
    },
    descricao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(10)
    },
    data_execucao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    data_solicitacao: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    selectedSolicitante: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    selectedResponsavel: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    selectedTipo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    selectedOrigem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    tempo: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    departamento_origem: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    departamento_destino: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  },
  mounted: function mounted() {
    this.pegaTipos();
    this.pegaOrigens();
    this.pegaUtilizador();
    this.pegaTarefas();
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
    pegaTarefas: function () {
      var _pegaTarefas = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = this;
                this.$axios.get('auth/pegaTarefas').then(function (response) {
                  if (response.status == 200) {
                    self.tarefas = response.data;
                    console.log('YYY: ' + response.data);
                  }
                })["catch"](function (error) {//alert("Erro ao carregar dados do perfil");
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function pegaTarefas() {
        return _pegaTarefas.apply(this, arguments);
      }

      return pegaTarefas;
    }(),
    limaparCampos: function limaparCampos() {
      var _this = this;

      this.selectedTipo = null;
      this.titulo = null;
      this.selectedOrigem = null;
      this.dado_origem = null;
      this.tempo = null;
      this.departamento_origem = null, this.selectedSolicitante = null, this.data_solicitacao = null, this.departamento_destino = null, this.selectedResponsavel = null, this.data_execucao = null, this.descricao = null, this.fotoSolicitante = 'default.jpg';
      this.fotoResponsavel = 'default.jpg';
      this.$nextTick(function () {
        _this.$v.$reset();
      });
    },
    registarTarefa: function () {
      var _registarTarefa = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(e) {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.$v.$touch();

                if (this.$v.$invalid) {
                  this.submitStatus = 'ERROR';
                } else {
                  //this.$v.$reset();
                  self = this;
                  this.$axios.post('auth/registarTarefa', {
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
                    'descricao': this.descricao
                  }).then(function (response) {
                    if (response.status == 200) {
                      //e.target.reset(); //also clean input
                      self.limaparCampos();
                      $('#modalClose').click();
                      Swal.fire({
                        text: "Actividade registada com sucesso.",
                        icon: 'success',
                        confirmButtonText: 'Fechar'
                      }), location.reload();
                    } else {
                      alert("LITTLE ERROR ");
                    }
                  })["catch"](function (error) {
                    self.limaparCampos();
                    $('#modalClose').click();
                    Swal.fire({
                      text: "Erro ao registar actividade.",
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

      function registarTarefa(_x) {
        return _registarTarefa.apply(this, arguments);
      }

      return registarTarefa;
    }(),
    //Metodo de troca de username para escolher foto
    onChangeSolicitante: function onChangeSolicitante(event) {
      //alert(event.target.value+'.jpg');
      this.fotoSolicitante = event.target.value + '.jpg';
    },
    onChangeResponsavel: function onChangeResponsavel(event) {
      //alert(event.target.value+'.jpg');
      this.fotoResponsavel = event.target.value + '.jpg';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalActividade.vue?vue&type=template&id=3d32d43a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalActividade.vue?vue&type=template&id=3d32d43a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "modalNovaActividade",
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
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  ref: "formTarefa",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.registarTarefa($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Tipo de Actividade")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.selectedTipo.$model,
                                expression: "$v.selectedTipo.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select custom-select-sm",
                            class: {
                              "is-invalid": _vm.$v.selectedTipo.$error,
                              "is-valid": !_vm.$v.selectedTipo.$invalid
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
                                  _vm.$v.selectedTipo,
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
                              [_vm._v("Selecione o tipo")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.tipos, function(tipo) {
                              return _c(
                                "option",
                                { key: tipo.id, domProps: { value: tipo.id } },
                                [_vm._v(_vm._s(tipo.tipo))]
                              )
                            })
                          ],
                          2
                        )
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
                              value: _vm.$v.titulo.$model,
                              expression: "$v.titulo.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control form-control-sm corInput",
                          class: {
                            "is-invalid": _vm.$v.titulo.$error,
                            "is-valid": !_vm.$v.titulo.$invalid
                          },
                          attrs: {
                            type: "text",
                            placeholder: "informe objecto da actividade"
                          },
                          domProps: { value: _vm.$v.titulo.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.titulo,
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
                          !_vm.$v.titulo.required
                            ? _c("span", [
                                _vm._v("O Título deve ser fornecido")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.titulo.minLength
                            ? _c("span", [
                                _vm._v(
                                  "O Título deve possuír um tamanho maior que 5 dígitos"
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-4" }, [
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
                                value: _vm.$v.selectedOrigem.$model,
                                expression: "$v.selectedOrigem.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select custom-select-sm",
                            class: {
                              "is-invalid": _vm.$v.selectedOrigem.$error,
                              "is-valid": !_vm.$v.selectedOrigem.$invalid
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
                                  _vm.$v.selectedOrigem,
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
                                {
                                  key: origem.id,
                                  domProps: { value: origem.id }
                                },
                                [_vm._v(_vm._s(origem.titulo))]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
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
                              value: _vm.$v.dado_origem.$model,
                              expression: "$v.dado_origem.$model",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control form-control-sm corInput",
                          class: {
                            "is-invalid": _vm.$v.dado_origem.$error,
                            "is-valid": !_vm.$v.dado_origem.$invalid
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Informe o dado de contacto"
                          },
                          domProps: { value: _vm.$v.dado_origem.$model },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.$v.dado_origem,
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
                          !_vm.$v.dado_origem.required
                            ? _c("span", [
                                _vm._v("O Dado de origem deve ser fornecido")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.dado_origem.minLength
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
                    _c("div", { staticClass: "col-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Tempo de Registo")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.$v.tempo.$model,
                                expression: "$v.tempo.$model",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select custom-select-sm",
                            class: {
                              "is-invalid": _vm.$v.tempo.$error,
                              "is-valid": !_vm.$v.tempo.$invalid
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
                                  _vm.$v.tempo,
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
                            ])
                          ]
                        )
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
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value:
                                          _vm.$v.departamento_origem.$model,
                                        expression:
                                          "$v.departamento_origem.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass:
                                      "custom-select custom-select-sm ",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.departamento_origem.$error,
                                      "is-valid": !_vm.$v.departamento_origem
                                        .$invalid
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.departamento_origem,
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
                                      [_vm._v("Escolha a origem")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Contabilidade & Finanças"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          " 01 SEDE | Contabilidade & Finanças"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Administração & Marketing"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Administração & Marketing"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Auditoria Interna" } },
                                      [_vm._v("01 SEDE | Auditoria Interna")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("01 SEDE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value:
                                            "Presidente do Comitê Executivo"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Presidente do Comitê Executivo"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Recursos Humanos" } },
                                      [_vm._v("01 SEDE | Recursos Humanos")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Sistemas & Organização"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Sistemas & Organização"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Cadeia Produtiva - Zango"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Cadeia Produtiva - Zango"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("01 SEDE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("02 HUAMBO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("03 MABOR | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("04 HOJI-YA-HENDA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("05 MORRO BENTO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("06 VIANA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("07 KILAMBA KIAXI | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("08 BENGUELA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("09 CABINDA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("10 LUBANGO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("11 NAMIBE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("12 KUITO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("13 UIGE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("15 LOBITO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("16 MALANGE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("18 SUMBE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("19 ZANGO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("21 BENFICA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("22 PANGUILA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value:
                                            "Sub-Direcção de Pequenas Empresas"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "26 BOA VIDA | Sub-Direcção de Pequenas Empresas"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Benguela" } },
                                      [_vm._v("99 DDP | DPP-Benguela")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Kuito" } },
                                      [_vm._v("99 DDP | DPP-Kuito")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Lobito" } },
                                      [_vm._v("99 DDP | DPP-Lobito")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Marginal" } },
                                      [_vm._v("99 DDP | DPP-Marginal")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Namibe" } },
                                      [_vm._v("99 DDP | DPP-Namibe")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Soyo" } },
                                      [_vm._v("99 DDP | DPP-Soyo")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Uige" } },
                                      [_vm._v("99 DDP | DPP-Uige")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Zango" } },
                                      [_vm._v("99 DDP | DPP-Zango")]
                                    )
                                  ]
                                )
                              ]),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Solicitante")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value:
                                          _vm.$v.selectedSolicitante.$model,
                                        expression:
                                          "$v.selectedSolicitante.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass:
                                      "custom-select custom-select-sm",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.selectedSolicitante.$error,
                                      "is-valid": !_vm.$v.selectedSolicitante
                                        .$invalid
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.selectedSolicitante,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.onChangeSolicitante($event)
                                        }
                                      ]
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
                                    _vm._l(_vm.utilizadores, function(
                                      utilizador
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: utilizador.id,
                                          domProps: {
                                            value: utilizador.username
                                          }
                                        },
                                        [_vm._v(_vm._s(utilizador.username))]
                                      )
                                    })
                                  ],
                                  2
                                )
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
                                      value: _vm.$v.data_solicitacao.$model,
                                      expression: "$v.data_solicitacao.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  class: {
                                    "is-invalid":
                                      _vm.$v.data_solicitacao.$error,
                                    "is-valid": !_vm.$v.data_solicitacao
                                      .$invalid
                                  },
                                  attrs: { type: "datetime-local" },
                                  domProps: {
                                    value: _vm.$v.data_solicitacao.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.data_solicitacao,
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
                                  !_vm.$v.data_solicitacao.required
                                    ? _c("span", [
                                        _vm._v("A data deve ser fornecida")
                                      ])
                                    : _vm._e()
                                ])
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
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value:
                                          _vm.$v.departamento_destino.$model,
                                        expression:
                                          "$v.departamento_destino.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass:
                                      "custom-select custom-select-sm",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.departamento_destino.$error,
                                      "is-valid": !_vm.$v.departamento_destino
                                        .$invalid
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.$v.departamento_destino,
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
                                      [_vm._v("Escolha o destino")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Contabilidade & Finanças"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          " 01 SEDE | Contabilidade & Finanças"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Administração & Marketing"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Administração & Marketing"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Auditoria Interna" } },
                                      [_vm._v("01 SEDE | Auditoria Interna")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("01 SEDE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value:
                                            "Presidente do Comitê Executivo"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Presidente do Comitê Executivo"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Recursos Humanos" } },
                                      [_vm._v("01 SEDE | Recursos Humanos")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Sistemas & Organização"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Sistemas & Organização"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "Cadeia Produtiva - Zango"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "01 SEDE | Cadeia Produtiva - Zango"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("01 SEDE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("02 HUAMBO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("03 MABOR | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("04 HOJI-YA-HENDA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("05 MORRO BENTO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("06 VIANA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("07 KILAMBA KIAXI | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("08 BENGUELA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("09 CABINDA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("10 LUBANGO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("11 NAMIBE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("12 KUITO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("13 UIGE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("15 LOBITO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("16 MALANGE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("18 SUMBE | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("19 ZANGO | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("21 BENFICA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Operações" } },
                                      [_vm._v("22 PANGUILA | Operações")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value:
                                            "Sub-Direcção de Pequenas Empresas"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "26 BOA VIDA | Sub-Direcção de Pequenas Empresas"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Benguela" } },
                                      [_vm._v("99 DDP | DPP-Benguela")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Kuito" } },
                                      [_vm._v("99 DDP | DPP-Kuito")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Lobito" } },
                                      [_vm._v("99 DDP | DPP-Lobito")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Marginal" } },
                                      [_vm._v("99 DDP | DPP-Marginal")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Namibe" } },
                                      [_vm._v("99 DDP | DPP-Namibe")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Soyo" } },
                                      [_vm._v("99 DDP | DPP-Soyo")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Uige" } },
                                      [_vm._v("99 DDP | DPP-Uige")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "DPP-Zango" } },
                                      [_vm._v("99 DDP | DPP-Zango")]
                                    )
                                  ]
                                )
                              ]),
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-5" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Responsável")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value:
                                          _vm.$v.selectedResponsavel.$model,
                                        expression:
                                          "$v.selectedResponsavel.$model",
                                        modifiers: { trim: true }
                                      }
                                    ],
                                    staticClass:
                                      "custom-select custom-select-sm",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.selectedResponsavel.$error,
                                      "is-valid": !_vm.$v.selectedResponsavel
                                        .$invalid
                                    },
                                    on: {
                                      change: [
                                        function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.$v.selectedResponsavel,
                                            "$model",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                        function($event) {
                                          return _vm.onChangeResponsavel($event)
                                        }
                                      ]
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: { disabled: "", selected: "" },
                                        domProps: { value: "" }
                                      },
                                      [_vm._v("Responsável")]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.utilizadores, function(
                                      utilizador
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: utilizador.id,
                                          domProps: {
                                            value: utilizador.username
                                          }
                                        },
                                        [_vm._v(_vm._s(utilizador.username))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-7" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Data Execução")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.trim",
                                      value: _vm.$v.data_execucao.$model,
                                      expression: "$v.data_execucao.$model",
                                      modifiers: { trim: true }
                                    }
                                  ],
                                  staticClass: "form-control form-control-sm",
                                  class: {
                                    "is-invalid": _vm.$v.data_execucao.$error,
                                    "is-valid": !_vm.$v.data_execucao.$invalid
                                  },
                                  attrs: { type: "datetime-local" },
                                  domProps: {
                                    value: _vm.$v.data_execucao.$model
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.$v.data_execucao,
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
                                  !_vm.$v.data_execucao.required
                                    ? _c("span", [
                                        _vm._v("A data deve ser fornecida")
                                      ])
                                    : _vm._e()
                                ])
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
                            value: _vm.$v.descricao.$model,
                            expression: "$v.descricao.$model",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control form-control-sm corInput",
                        class: {
                          "is-invalid": _vm.$v.descricao.$error,
                          "is-valid": !_vm.$v.descricao.$invalid
                        },
                        attrs: { rows: "5" },
                        domProps: { value: _vm.$v.descricao.$model },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.$v.descricao,
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
                        !_vm.$v.descricao.required
                          ? _c("span", [
                              _vm._v("A descricao deve ser fornecida")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.descricao.minLength
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
                  _vm._m(1)
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
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
            _vm._v("Registar Actividade")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "close",
            staticStyle: { "margin-top": "-20px" },
            attrs: {
              id: "modalClose",
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
    return _c("div", { staticClass: "text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-rounded btn-secondary waves-effect",
          attrs: { id: "modalClose", type: "button", "data-dismiss": "modal" }
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ModalActividade.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ModalActividade.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalActividade_vue_vue_type_template_id_3d32d43a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalActividade.vue?vue&type=template&id=3d32d43a& */ "./resources/js/components/ModalActividade.vue?vue&type=template&id=3d32d43a&");
/* harmony import */ var _ModalActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalActividade.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalActividade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalActividade_vue_vue_type_template_id_3d32d43a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalActividade_vue_vue_type_template_id_3d32d43a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalActividade.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalActividade.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ModalActividade.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalActividade.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalActividade.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalActividade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalActividade.vue?vue&type=template&id=3d32d43a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ModalActividade.vue?vue&type=template&id=3d32d43a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalActividade_vue_vue_type_template_id_3d32d43a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalActividade.vue?vue&type=template&id=3d32d43a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalActividade.vue?vue&type=template&id=3d32d43a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalActividade_vue_vue_type_template_id_3d32d43a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalActividade_vue_vue_type_template_id_3d32d43a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);