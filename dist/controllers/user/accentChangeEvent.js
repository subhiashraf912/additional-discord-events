"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.user.accentColor !== newMember.user.accentColor) {
            client.emit("guildMemberAccentChange", newMember, oldMember.user.accentColor, newMember.user.accentColor);
        }
    });
};
