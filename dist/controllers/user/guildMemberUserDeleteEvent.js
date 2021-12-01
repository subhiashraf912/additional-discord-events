"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.deleted !== newMember.deleted) {
            client.emit("guildMemberUserDelete", newMember);
        }
    });
};
