import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.displayName !== newMember.displayName) {
      client.emit(
        "guildMemberDisplayNameChange",
        newMember,
        oldMember.displayName,
        newMember.displayName
      );
    }
  });
};
