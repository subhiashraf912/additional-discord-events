import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.user.accentColor !== newMember.user.accentColor) {
      client.emit(
        "guildMemberAccentChange",
        newMember,
        oldMember.user.accentColor,
        newMember.user.accentColor
      );
    }
  });
};
