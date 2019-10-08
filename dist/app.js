"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = express_1.default();
//setting
app.set('port', 4000);
//middleware
app.use(morgan_1.default('dev'));
//routes
app.use(auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map