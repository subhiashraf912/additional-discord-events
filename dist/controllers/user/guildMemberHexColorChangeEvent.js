"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.displayHexColor !== newMember.displayHexColor) {
            client.emit("guildMemberHexColorChange", newMember, oldMember.displayHexColor, newMember.displayHexColor);
        }
    });
};
