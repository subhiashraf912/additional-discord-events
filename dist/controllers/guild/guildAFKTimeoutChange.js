"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("guildUpdate", (oldGuild, newGuild) => {
        if (oldGuild.afkTimeout !== newGuild.afkTimeout) {
            client.emit("guildAFKTimeoutChange", newGuild, oldGuild.afkTimeout, newGuild.afkTimeout);
        }
    });
};
