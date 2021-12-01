import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.partial !== newMember.partial) {
      client.emit(
        "guildMemberPartialChange",
        newMember,
        oldMember.partial,
        newMember.partial
      );
    }
  });
};
