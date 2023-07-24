"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = __importDefault(require("./server"));
const logger_1 = require("./utils/logger");
(async () => {
    server_1.default.listen(process.env.PORT, () => {
        logger_1.Logger.info(`Server started on port http://localhost:${process.env.PORT}`);
    });
})();
//# sourceMappingURL=index.js.map