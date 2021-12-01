import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (oldMember.displayHexColor !== newMember.displayHexColor) {
      client.emit(
        "guildMemberHexColorChange",
        newMember,
        oldMember.displayHexColor,
        newMember.displayHexColor
      );
    }
  });
};
