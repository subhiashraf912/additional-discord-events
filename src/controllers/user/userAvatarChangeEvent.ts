import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.user.avatar !== newMember.user.avatar) {
      client.emit(
        "guildMemberUserAvatarChange",
        newMember,
        oldMember.user.avatarURL(),
        newMember.user.avatarURL()
      );
    }
  });
};
