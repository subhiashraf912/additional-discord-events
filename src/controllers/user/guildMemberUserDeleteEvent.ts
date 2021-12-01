import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.deleted !== newMember.deleted) {
      client.emit("guildMemberUserDelete", newMember);
    }
  });
};
