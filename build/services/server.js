"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../routes/index"));

var _http = _interopRequireDefault(require("http"));

var _path = _interopRequireDefault(require("path"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

var _auth = require("./auth");

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _index2 = _interopRequireDefault(require("./config/index"));

var _compression = _interopRequireDefault(require("compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _compression["default"])());
var ttlSeconds = 180;
var storeOptions = {
  store: _connectMongo["default"].create({
    mongoUrl: _index2["default"].MONGO_ATLAS_URL,
    crypto: {
      secret: 'squirrel'
    }
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000
  }
};
app.use((0, _expressSession["default"])(storeOptions));
app.use('/', _index["default"]);

var publicPath = _path["default"].resolve(__dirname, '../../public');

app.use(_express["default"]["static"](publicPath));
app.set('view engine', 'ejs');

var viewsPath = _path["default"].resolve(__dirname, '../../views');

app.set('views', viewsPath); //Indicamos que vamos a usar passport en todas nuestras rutas

app.use(_passport["default"].initialize()); //Permitimos que passport pueda manipular las sessiones de nuestra app

app.use(_passport["default"].session()); // Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario

_passport["default"].use('login', _auth.loginFunc); //signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios


_passport["default"].use('signup', _auth.signUpFunc);

var myServer = _http["default"].Server(app);

var _default = myServer;
exports["default"] = _default;
//# sourceMappingURL=server.js.map