import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildUpdate", (oldGuild, newGuild) => {
    if (oldGuild.afkChannel?.id !== newGuild.afkChannel?.id) {
      client.emit(
        "guildAFKChannelChange",
        oldGuild.afkChannel,
        newGuild.afkChannel
      );
    }
  });
};
