"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.pending !== newMember.pending) {
            client.emit("guildMemberPendingChange", newMember, oldMember.pending, newMember.pending);
        }
    });
};
