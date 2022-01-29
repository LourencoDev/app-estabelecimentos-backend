"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./database/database"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var App = /** @class */ (function () {
    function App() {
        this.PORT = process.env.PORT || 3000;
        this.express = (0, express_1.default)();
        this.database();
        this.middleware();
        this.routes();
        this.listen();
    }
    App.prototype.getApp = function () {
        return this.express;
    };
    App.prototype.database = function () {
        database_1.default.connection();
    };
    App.prototype.middleware = function () {
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use(express_1.default.json());
    };
    App.prototype.routes = function () {
        this.express.use('/auth', authRoutes_1.default);
    };
    App.prototype.listen = function () {
        var _this = this;
        this.express.listen(this.PORT, function () {
            console.log("Servidor rodando na porta ".concat(_this.PORT));
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map