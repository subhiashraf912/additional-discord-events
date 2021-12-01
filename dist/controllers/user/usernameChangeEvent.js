"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.user.username !== newMember.user.username) {
            client.emit("guildMemberUsernameChange", newMember, oldMember.user.username, newMember.user.username);
        }
    });
};
