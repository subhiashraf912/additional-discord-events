"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.partial !== newMember.partial) {
            client.emit("guildMemberPartialChange", newMember, oldMember.partial, newMember.partial);
        }
    });
};
