"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.avatar !== newMember.avatar) {
            client.emit("guildMemberAvatarChange", newMember, oldMember.avatarURL(), newMember.avatarURL());
        }
    });
};
