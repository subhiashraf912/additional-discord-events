import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.user.banner !== newMember.user.banner) {
      client.emit(
        "guildMemberBannerChange",
        newMember,
        oldMember.user.bannerURL(),
        newMember.user.bannerURL()
      );
    }
  });
};
