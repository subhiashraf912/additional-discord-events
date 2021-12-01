import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.nickname !== newMember.nickname) {
      client.emit(
        "guildMemberNicknameChange",
        newMember,
        oldMember.nickname,
        newMember.nickname
      );
    }
  });
};
