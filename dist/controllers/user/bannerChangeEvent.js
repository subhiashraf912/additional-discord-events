"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildMemberUpdate", (oldMember, newMember) => {
        if (oldMember.user.banner !== newMember.user.banner) {
            client.emit("guildMemberBannerChange", newMember, oldMember.user.bannerURL(), newMember.user.bannerURL());
        }
    });
};
