"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const voiceConnectEvent_1 = __importDefault(require("./controllers/voice/voiceConnectEvent"));
const voiceDisconnectEvent_1 = __importDefault(require("./controllers/voice/voiceDisconnectEvent"));
const voiceSwitchEvent_1 = __importDefault(require("./controllers/voice/voiceSwitchEvent"));
const moreDJSEvents = (client) => {
    (0, voiceConnectEvent_1.default)(client);
    (0, voiceDisconnectEvent_1.default)(client);
    (0, voiceSwitchEvent_1.default)(client);
};
exports.default = moreDJSEvents;
