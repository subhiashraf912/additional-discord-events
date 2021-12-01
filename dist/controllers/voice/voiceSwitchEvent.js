"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.voice.channel && newMember.voice.channel) {
            client.emit("guildMemberVoiceSwitch", newMember, oldMember.voice.channel, newMember.voice.channel);
        }
    });
};