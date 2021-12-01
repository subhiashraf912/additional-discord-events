import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.permissions !== newMember.permissions) {
      client.emit(
        "guildMemberPermissionsChange",
        newMember,
        oldMember.permissions,
        newMember.permissions
      );
    }
  });
};
