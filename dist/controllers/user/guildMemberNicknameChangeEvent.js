"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.nickname !== newMember.nickname) {
            client.emit("guildMemberNicknameChange", newMember, oldMember.nickname, newMember.nickname);
        }
    });
};
