"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productsCollectionName = 'productos';
var productossSchema = new _mongoose["default"].Schema({
  titulo: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var productosModel = _mongoose["default"].model(productsCollectionName, productossSchema);

var _default = productosModel;
exports["default"] = _default;
//# sourceMappingURL=productos.js.map