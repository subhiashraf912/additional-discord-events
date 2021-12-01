"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.permissions !== newMember.permissions) {
            client.emit("guildMemberPermissionsChange", newMember, oldMember.permissions, newMember.permissions);
        }
    });
};
