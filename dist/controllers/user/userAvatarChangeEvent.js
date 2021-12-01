"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.user.avatar !== newMember.user.avatar) {
            client.emit("guildMemberUserAvatarChange", newMember, oldMember.user.avatarURL(), newMember.user.avatarURL());
        }
    });
};
