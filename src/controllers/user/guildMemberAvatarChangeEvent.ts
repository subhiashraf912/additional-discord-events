import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.avatar !== newMember.avatar) {
      client.emit(
        "guildMemberAvatarChange",
        newMember,
        oldMember.avatarURL(),
        newMember.avatarURL()
      );
    }
  });
};
