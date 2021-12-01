"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client === null || client === void 0 ? void 0 : client.on("guildUpdate", (oldGuild, newGuild) => {
        var _a, _b;
        if (((_a = oldGuild === null || oldGuild === void 0 ? void 0 : oldGuild.afkChannel) === null || _a === void 0 ? void 0 : _a.id) !== ((_b = newGuild === null || newGuild === void 0 ? void 0 : newGuild.afkChannel) === null || _b === void 0 ? void 0 : _b.id)) {
            client === null || client === void 0 ? void 0 : client.emit("guildAFKChannelChange", oldGuild === null || oldGuild === void 0 ? void 0 : oldGuild.afkChannel, newGuild === null || newGuild === void 0 ? void 0 : newGuild.afkChannel);
        }
        if ((oldGuild === null || oldGuild === void 0 ? void 0 : oldGuild.afkTimeout) !== (newGuild === null || newGuild === void 0 ? void 0 : newGuild.afkTimeout)) {
            client === null || client === void 0 ? void 0 : client.emit("guildAFKTimeoutChange", newGuild, oldGuild === null || oldGuild === void 0 ? void 0 : oldGuild.afkTimeout, newGuild === null || newGuild === void 0 ? void 0 : newGuild.afkTimeout);
        }
        if ((oldGuild === null || oldGuild === void 0 ? void 0 : oldGuild.banner) !== (newGuild === null || newGuild === void 0 ? void 0 : newGuild.banner)) {
            client === null || client === void 0 ? void 0 : client.emit("guildBannerChange", newGuild, oldGuild === null || oldGuild === void 0 ? void 0 : oldGuild.bannerURL(), newGuild === null || newGuild === void 0 ? void 0 : newGuild.bannerURL());
        }
    });
};
