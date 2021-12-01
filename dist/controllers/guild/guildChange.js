"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildUpdate", (oldGuild, newGuild) => {
        if (oldGuild.banner !== newGuild.banner) {
            client.emit("guildBannerChange", newGuild, oldGuild.bannerURL(), newGuild.bannerURL());
        }
    });
};
