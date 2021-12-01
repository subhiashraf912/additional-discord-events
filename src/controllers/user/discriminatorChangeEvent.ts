import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.user.discriminator !== newMember.user.discriminator) {
      client.emit(
        "guildMemberDiscriminatorChange",
        newMember,
        oldMember.user.discriminator,
        newMember.user.discriminator
      );
    }
  });
};
