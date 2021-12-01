import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildUpdate", (oldGuild, newGuild) => {
    if (oldGuild.banner !== newGuild.banner) {
      client.emit(
        "guildBannerChange",
        newGuild,
        oldGuild.bannerURL(),
        newGuild.bannerURL()
      );
    }
  });
};
