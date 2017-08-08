/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Struct = function Struct() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return function () {
    function _class() {
      _classCallCheck(this, _class);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      for (var i = 0; i < params.length; i++) {
        this[params[i]] = args[i];
      }
    }

    _createClass(_class, [{
      key: "toString",
      value: function toString() {
        var _this = this;

        var properties = this.members().map(function (name) {
          return name + ": " + _this[name];
        }).join(", ");
        return "{ " + this.constructor.name + " [ " + properties + " ] }";
      }
    }, {
      key: "inspect",
      value: function inspect() {
        return this.toString();
      }
    }, {
      key: "toArray",
      value: function toArray() {
        var _this2 = this;

        return this.members().map(function (name) {
          return _this2[name];
        });
      }
    }, {
      key: "values",
      value: function values() {
        return this.toArray();
      }
    }, {
      key: "members",
      value: function members() {
        return params;
      }
    }, {
      key: "length",
      value: function length() {
        return this.size();
      }
    }, {
      key: "size",
      value: function size() {
        return params.length;
      }
    }, {
      key: "eachPair",
      value: function eachPair(fn) {
        var _this3 = this;

        this.members().forEach(function (name) {
          return fn(name, _this3[name]);
        });
      }
    }]);

    return _class;
  }();
};

exports.default = Struct;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InspectMixin = function InspectMixin(BaseClass) {
  return function (_BaseClass) {
    _inherits(_class, _BaseClass);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "inspect",
      value: function inspect() {
        return "\xAB " + this.toString() + " \xBB";
      }
    }]);

    return _class;
  }(BaseClass);
};

exports.InspectMixin = InspectMixin;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boolean = exports.Number = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _struct = __webpack_require__(0);

var _struct2 = _interopRequireDefault(_struct);

var _mixins = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Primitive = function (_InspectMixin) {
  _inherits(Primitive, _InspectMixin);

  function Primitive() {
    _classCallCheck(this, Primitive);

    return _possibleConstructorReturn(this, (Primitive.__proto__ || Object.getPrototypeOf(Primitive)).apply(this, arguments));
  }

  _createClass(Primitive, [{
    key: 'toString',
    value: function toString() {
      return this.value;
    }
  }, {
    key: 'isReducible',
    value: function isReducible() {
      return false;
    }
  }]);

  return Primitive;
}((0, _mixins.InspectMixin)((0, _struct2.default)('value')));

var Number = function (_Primitive) {
  _inherits(Number, _Primitive);

  function Number() {
    _classCallCheck(this, Number);

    return _possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).apply(this, arguments));
  }

  return Number;
}(Primitive);

var Boolean = function (_Primitive2) {
  _inherits(Boolean, _Primitive2);

  function Boolean() {
    _classCallCheck(this, Boolean);

    return _possibleConstructorReturn(this, (Boolean.__proto__ || Object.getPrototypeOf(Boolean)).apply(this, arguments));
  }

  return Boolean;
}(Primitive);

exports.Number = Number;
exports.Boolean = Boolean;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _simple = __webpack_require__(4);

var _machine = __webpack_require__(8);

var _machine2 = _interopRequireDefault(_machine);

var _consolex = __webpack_require__(9);

var consolex = _interopRequireWildcard(_consolex);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var machine = new _machine2.default(new _simple.Add(new _simple.Multiply(new _simple.Number(1), new _simple.Number(2)), new _simple.Multiply(new _simple.Number(3), new _simple.Number(4))), {});
machine.run(consolex.log);

machine = new _machine2.default(new _simple.LessThan(new _simple.Number(5), new _simple.Add(new _simple.Number(2), new _simple.Number(2))), {});
machine.run(consolex.log);

machine = new _machine2.default(new _simple.Add(new _simple.Variable('x'), new _simple.Variable('y')), { x: new _simple.Number(3), y: new _simple.Number(4) });
machine.run(consolex.log);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = _extends({}, __webpack_require__(2), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessThan = exports.Multiply = exports.Add = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _struct = __webpack_require__(0);

var _struct2 = _interopRequireDefault(_struct);

var _mixins = __webpack_require__(1);

var _primitives = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_InspectMixin) {
  _inherits(Add, _InspectMixin);

  function Add() {
    _classCallCheck(this, Add);

    return _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).apply(this, arguments));
  }

  _createClass(Add, [{
    key: 'toString',
    value: function toString() {
      return this.left + ' + ' + this.right;
    }
  }, {
    key: 'isReducible',
    value: function isReducible() {
      return true;
    }
  }, {
    key: 'reduce',
    value: function reduce(environment) {
      if (this.left.isReducible()) return new Add(this.left.reduce(environment), this.right);else if (this.right.isReducible()) return new Add(this.left, this.right.reduce(environment));else return new _primitives.Number(this.left + this.right);
    }
  }]);

  return Add;
}((0, _mixins.InspectMixin)((0, _struct2.default)('left', 'right')));

var Multiply = function (_InspectMixin2) {
  _inherits(Multiply, _InspectMixin2);

  function Multiply() {
    _classCallCheck(this, Multiply);

    return _possibleConstructorReturn(this, (Multiply.__proto__ || Object.getPrototypeOf(Multiply)).apply(this, arguments));
  }

  _createClass(Multiply, [{
    key: 'toString',
    value: function toString() {
      return this.left + ' * ' + this.right;
    }
  }, {
    key: 'isReducible',
    value: function isReducible() {
      return true;
    }
  }, {
    key: 'reduce',
    value: function reduce(environment) {
      if (this.left.isReducible()) return new Multiply(this.left.reduce(environment), this.right);else if (this.right.isReducible()) return new Multiply(this.left, this.right.reduce(environment));else return new _primitives.Number(this.left * this.right);
    }
  }]);

  return Multiply;
}((0, _mixins.InspectMixin)((0, _struct2.default)('left', 'right')));

var LessThan = function (_InspectMixin3) {
  _inherits(LessThan, _InspectMixin3);

  function LessThan() {
    _classCallCheck(this, LessThan);

    return _possibleConstructorReturn(this, (LessThan.__proto__ || Object.getPrototypeOf(LessThan)).apply(this, arguments));
  }

  _createClass(LessThan, [{
    key: 'toString',
    value: function toString() {
      return this.left + ' < ' + this.right;
    }
  }, {
    key: 'isReducible',
    value: function isReducible() {
      return true;
    }
  }, {
    key: 'reduce',
    value: function reduce(environment) {
      if (this.left.isReducible()) return new LessThan(this.left.reduce(environment), this.right);else if (this.right.isReducible()) return new LessThan(this.left, this.right.reduce(environment));else return new _primitives.Boolean(this.left < this.right);
    }
  }]);

  return LessThan;
}((0, _mixins.InspectMixin)((0, _struct2.default)('left', 'right')));

exports.Add = Add;
exports.Multiply = Multiply;
exports.LessThan = LessThan;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoNothing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _struct = __webpack_require__(0);

var _struct2 = _interopRequireDefault(_struct);

var _mixins = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoNothing = function (_InspectMixin) {
  _inherits(DoNothing, _InspectMixin);

  function DoNothing() {
    _classCallCheck(this, DoNothing);

    return _possibleConstructorReturn(this, (DoNothing.__proto__ || Object.getPrototypeOf(DoNothing)).apply(this, arguments));
  }

  _createClass(DoNothing, [{
    key: 'toString',
    value: function toString() {
      return this.value;
    }
  }, {
    key: 'isReducible',
    value: function isReducible() {
      return false;
    }
  }]);

  return DoNothing;
}((0, _mixins.InspectMixin)((0, _struct2.default)('value')));

exports.DoNothing = DoNothing;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Variable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _struct = __webpack_require__(0);

var _struct2 = _interopRequireDefault(_struct);

var _mixins = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Variable = function (_InspectMixin) {
  _inherits(Variable, _InspectMixin);

  function Variable() {
    _classCallCheck(this, Variable);

    return _possibleConstructorReturn(this, (Variable.__proto__ || Object.getPrototypeOf(Variable)).apply(this, arguments));
  }

  _createClass(Variable, [{
    key: 'toString',
    value: function toString() {
      return this.name;
    }
  }, {
    key: 'isReducible',
    value: function isReducible() {
      return true;
    }
  }, {
    key: 'reduce',
    value: function reduce(environment) {
      return environment[this.name];
    }
  }]);

  return Variable;
}((0, _mixins.InspectMixin)((0, _struct2.default)('name')));

exports.Variable = Variable;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _struct = __webpack_require__(0);

var _struct2 = _interopRequireDefault(_struct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Machine = function (_Struct) {
  _inherits(Machine, _Struct);

  function Machine() {
    _classCallCheck(this, Machine);

    return _possibleConstructorReturn(this, (Machine.__proto__ || Object.getPrototypeOf(Machine)).apply(this, arguments));
  }

  _createClass(Machine, [{
    key: 'step',
    value: function step() {
      this.expression = this.expression.reduce(this.environment);
    }
  }, {
    key: 'run',
    value: function run(callback) {
      while (this.expression.isReducible()) {
        callback(this.expression);
        this.step();
      }
      callback(this.expression);
    }
  }]);

  return Machine;
}((0, _struct2.default)('expression', 'environment'));

exports.default = Machine;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = function log() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  params.map(function (param) {
    return console.log(param);
  });
};

exports.log = log;

/***/ })
/******/ ]);