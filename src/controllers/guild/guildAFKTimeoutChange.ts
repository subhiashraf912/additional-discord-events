import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildUpdate", (oldGuild, newGuild) => {
    if (oldGuild.afkTimeout !== newGuild.afkTimeout) {
      client.emit(
        "guildAFKTimeoutChange",
        newGuild,
        oldGuild.afkTimeout,
        newGuild.afkTimeout
      );
    }
  });
};
