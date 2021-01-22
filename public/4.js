(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ActividadesAtrasadas.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ActividadesAtrasadas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tarefas: []
    };
  },
  created: function created() {
    this.pegaTarefas();
  },
  methods: {
    carregaTabela: function carregaTabela() {
      this.$nextTick(function () {
        $('#paginationTarefa').DataTable();
      });
    },
    selectRow: function selectRow(id) {
      this.$router.push({
        name: 'verActividade',
        params: {
          id: id
        }
      });
    },
    pegaTarefas: function () {
      var _pegaTarefas = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                this.$axios.get('auth/pegaTarefasAtrasadas').then(function (response) {
                  if (response.status == 200) {
                    self.tarefas = response.data;
                    self.$nextTick(function () {
                      $('#paginationTarefa').DataTable();
                    });
                  }
                })["catch"](function (error) {//alert("Erro ao carregar dados");
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function pegaTarefas() {
        return _pegaTarefas.apply(this, arguments);
      }

      return pegaTarefas;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ActividadesAtrasadas.vue?vue&type=template&id=154bd0da&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ActividadesAtrasadas.vue?vue&type=template&id=154bd0da& ***!
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
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("br"),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card-box" }, [
          _c(
            "table",
            {
              staticClass: "table table-sm table-bordeless",
              attrs: { id: "paginationTarefa", cellspacing: "0", width: "100%" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.tarefas, function(tarefa) {
                  return _c(
                    "tr",
                    {
                      staticClass: "tabelaClicked",
                      attrs: { title: "Clique aqui para abrir actividade" },
                      on: {
                        click: function($event) {
                          return _vm.selectRow(tarefa.id)
                        }
                      }
                    },
                    [
                      _c("td", [_vm._v(_vm._s(tarefa.codigo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(tarefa.titulo))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(tarefa.solicitante))]),
                      _vm._v(" "),
                      _c("td", { attrs: { width: "20%" } }, [
                        _vm._v(_vm._s(tarefa.data_solicitacao))
                      ]),
                      _vm._v(" "),
                      tarefa.avanco == 100
                        ? _c("td", { attrs: { width: "10%" } }, [
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
                                      "\n                                        " +
                                        _vm._s(tarefa.data_cumprimento) +
                                        "\n                                    "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        : _c("td", { attrs: { width: "20%" } }, [
                            _c(
                              "div",
                              { staticClass: "progress mb-1 progress-xl" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "progress-bar bg-danger",
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
                                      "\n                                        " +
                                        _vm._s(tarefa.data_prevista) +
                                        "\n                                    "
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                    ]
                  )
                }),
                0
              )
            ]
          )
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
                  _vm._v("Actividades")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "page-title" }, [
            _vm._v("Actividades Atrasadas")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { attrs: { id: "cabecatabela" } }, [
      _c("tr", [
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Objecto de Actividade")]),
        _vm._v(" "),
        _c("th", [_vm._v("Solicitante")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data da Solicitação")]),
        _vm._v(" "),
        _c("th", [_vm._v("Data Prevista")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ActividadesAtrasadas.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/ActividadesAtrasadas.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActividadesAtrasadas_vue_vue_type_template_id_154bd0da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActividadesAtrasadas.vue?vue&type=template&id=154bd0da& */ "./resources/js/views/ActividadesAtrasadas.vue?vue&type=template&id=154bd0da&");
/* harmony import */ var _ActividadesAtrasadas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActividadesAtrasadas.vue?vue&type=script&lang=js& */ "./resources/js/views/ActividadesAtrasadas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActividadesAtrasadas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActividadesAtrasadas_vue_vue_type_template_id_154bd0da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActividadesAtrasadas_vue_vue_type_template_id_154bd0da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ActividadesAtrasadas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ActividadesAtrasadas.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ActividadesAtrasadas.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActividadesAtrasadas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ActividadesAtrasadas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ActividadesAtrasadas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActividadesAtrasadas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ActividadesAtrasadas.vue?vue&type=template&id=154bd0da&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/ActividadesAtrasadas.vue?vue&type=template&id=154bd0da& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActividadesAtrasadas_vue_vue_type_template_id_154bd0da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ActividadesAtrasadas.vue?vue&type=template&id=154bd0da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ActividadesAtrasadas.vue?vue&type=template&id=154bd0da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActividadesAtrasadas_vue_vue_type_template_id_154bd0da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActividadesAtrasadas_vue_vue_type_template_id_154bd0da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);