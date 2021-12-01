import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.pending !== newMember.pending) {
      client.emit(
        "guildMemberPendingChange",
        newMember,
        oldMember.pending,
        newMember.pending
      );
    }
  });
};
