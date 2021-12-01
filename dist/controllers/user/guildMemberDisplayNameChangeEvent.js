"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.displayName !== newMember.displayName) {
            client.emit("guildMemberDisplayNameChange", newMember, oldMember.displayName, newMember.displayName);
        }
    });
};
