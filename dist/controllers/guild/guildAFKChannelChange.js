"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildUpdate", (oldGuild, newGuild) => {
        var _a, _b;
        if (((_a = oldGuild.afkChannel) === null || _a === void 0 ? void 0 : _a.id) !== ((_b = newGuild.afkChannel) === null || _b === void 0 ? void 0 : _b.id)) {
            client.emit("guildAFKChannelChange", oldGuild.afkChannel, newGuild.afkChannel);
        }
    });
};
