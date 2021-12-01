"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client === null || client === void 0 ? void 0 : client.on("voiceStateUpdate", (oldMember, newMember) => {
        const oldVoiceChannel = oldMember.channelId;
        const newVoiceChannel = newMember.channelId;
        if (oldVoiceChannel && !newVoiceChannel) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberVoiceDisconnect", newMember === null || newMember === void 0 ? void 0 : newMember.member, oldMember === null || oldMember === void 0 ? void 0 : oldMember.channel);
        }
        if (!oldVoiceChannel && newVoiceChannel) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberVoiceConnect", newMember === null || newMember === void 0 ? void 0 : newMember.member, newMember === null || newMember === void 0 ? void 0 : newMember.channel);
        }
        if (oldVoiceChannel &&
            newVoiceChannel &&
            oldVoiceChannel !== newVoiceChannel) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberVoiceSwitch", newMember === null || newMember === void 0 ? void 0 : newMember.member, oldMember === null || oldMember === void 0 ? void 0 : oldMember.channel, newMember === null || newMember === void 0 ? void 0 : newMember.channel);
        }
    });
};
