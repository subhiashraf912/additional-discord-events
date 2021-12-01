import { Client } from "discord.js";

export default (client: Client) => {
  client.on("guildMemberUpdate", (oldMember, newMember) => {
    if (!oldMember.voice.channel && newMember.voice.channel) {
      client.emit(
        "guildMemberVoiceConnect",
        newMember,
        newMember.voice.channel
      );
    }
  });
};
