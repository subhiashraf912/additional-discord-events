import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.presence !== newMember.presence) {
      client.emit(
        "guildMemberPresenceChange",
        newMember,
        oldMember.presence,
        newMember.presence
      );
    }
  });
};
