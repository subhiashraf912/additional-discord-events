import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.user.username !== newMember.user.username) {
      client.emit(
        "guildMemberUsernameChange",
        newMember,
        oldMember.user.username,
        newMember.user.username
      );
    }
  });
};
