"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.presence !== newMember.presence) {
            client.emit("guildMemberPresenceChange", newMember, oldMember.presence, newMember.presence);
        }
    });
};
