"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const pino_1 = __importDefault(require("pino"));
let logger = (0, pino_1.default)({
    formatters: {
        level: label => {
            return { level: label };
        },
    },
}, pino_1.default.transport({
    target: 'pino-pretty',
    options: {
        colorize: true,
        ignore: 'pid,hostname',
        translateTime: 'yyyy-mm-dd HH:MM:ss.l',
    },
}));
class Logger {
    static shardId;
    static info(message, obj) {
        obj ? logger.info(obj, message) : logger.info(message);
    }
    static warn(message, obj) {
        obj ? logger.warn(obj, message) : logger.warn(message);
    }
    static async error(message, obj) {
        if (!obj) {
            logger.error(message);
            return;
        }
        if (typeof obj === 'string') {
            logger
                .child({
                message: obj,
            })
                .error(message);
        }
        else if (obj) {
            const { body, status } = obj;
            logger
                .child({
                status,
                body,
            })
                .error(message);
        }
        else {
            logger.error(obj, message);
        }
    }
    static setShardId(shardId) {
        if (this.shardId !== shardId) {
            this.shardId = shardId;
            logger = logger.child({ shardId });
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map