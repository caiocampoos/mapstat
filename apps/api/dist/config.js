"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const root = path_1.default.join.bind(process.cwd());
dotenv_1.default.config({
    path: root('/.env')
});
//# sourceMappingURL=config.js.map