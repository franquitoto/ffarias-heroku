"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var _default = {
  MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV'
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map