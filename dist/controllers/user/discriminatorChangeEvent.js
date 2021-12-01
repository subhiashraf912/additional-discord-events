"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.user.discriminator !== newMember.user.discriminator) {
            client.emit("guildMemberDiscriminatorChange", newMember, oldMember.user.discriminator, newMember.user.discriminator);
        }
    });
};
