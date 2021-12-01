<p align="center">
  <a href="https://github.com/subhiashraf912/additional-discord-events">
    <img src="https://cdn.discordapp.com/attachments/900321704289656872/913816621724876820/Comp_1_00000.png" height="128">
    <h1 align="center">More Discord.JS Events</h1>
  </a>
</p>

<p align="center">
  <a aria-label="More Discord.JS Events logo" href="https://github.com/subhiashraf912/additional-discord-events">
    <img src="https://img.shields.io/badge/Made%20Tracker-Made%20By%20Aze-000?style=for-the-badge&logo=discord">
  </a>
  <a aria-label="ES Version" href="https://www.ecma-international.org/">
    <img alt="" src="https://img.shields.io/badge/ES%20Version-2015-000?style=for-the-badge&logo=javascript">
  </a>
  <a aria-label="License">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on Discord" href="https://discord.gg/nQ55ZUSavA">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=discord&labelColor=000000&logoWidth=20">
  </a>
</p>

## Getting Started

Use this command in your terminal to install the package.

```js
cd project-path
npm i --save more-djs-events
```

## How to use

```js
const Discord = require("discord.js");
const moreDJSEvents = require("more-djs-events").default;

const intents = ["GUILDS", "GUILD_INVITES", "GUILD_MEMBERS"];
const partials = ["USER", "GUILD_MEMBER"];

const client = new Discord.Client({
  intents,
  partials,
});

moreDJSEvents(client);

//Example Events:
client.on("guildMemberVoiceConnect", (member, channel) => {

});

client.on("guildMemberVoiceDisconnect", (member, oldChannel) => {

});

client.on("guildMemberVoiceSwitch", (member, oldChannel, newChannel) => {

});

client.login("token");
```
## Avaliable Events
Here are the current events with their types.
```ts

    interface ClientEvents {
        guildMemberVoiceDisconnect: [
            member: GuildMember,
            oldVoiceChannel: VoiceChannel | StageChannel
        ];
        guildMemberVoiceConnect: [
            member: GuildMember,
            voiceChannel: VoiceChannel | StageChannel
        ];
        guildMemberVoiceSwitch: [
            member: GuildMember,
            oldVoiceChannel: VoiceChannel | StageChannel,
            newVoiceChannel: VoiceChannel | StageChannel
        ];
        guildMemberUsernameChange: [
            member: GuildMember,
            oldUsername: string,
            newUsername: string
        ];
        guildMemberDiscrminatorChange: [
            member: GuildMember,
            oldUsername: string,
            newUsername: string
        ];
        guildMemberAvatarChange: [
            member: GuildMember,
            oldAvatarURL: string | null,
            newAvatarURL: string | null
        ];
        guildMemberAvatarUserChange: [
            member: GuildMember,
            oldAvatarURL: string | null,
            newAvatarURL: string | null
        ];
        guildMemberBannerChange: [
            member: GuildMember,
            oldAvatarURL: string | null,
            newAvatarURL: string | null
        ];
        guildMemberUserDelete: [member: GuildMember];
        guildMemberHexColorChange: [
            member: GuildMember,
            oldHexColor: `#${string}`,
            newHexColor: `#${string}`
        ];
        guildMemberDisplayNameChange: [
            member: GuildMember,
            oldNickname: string,
            newNickname: string
        ];
        guildMemberNicknameChange: [
            member: GuildMember,
            oldNickname: string | null,
            newNickname: string | null
        ];
        guildMemberPartialChange: [
            member: GuildMember,
            oldPartial: boolean,
            newPartial: boolean
        ];
        guildMemberPendingChange: [
            member: GuildMember,
            oldPending: boolean,
            newPending: boolean
        ];
        guildMemberPermissionsChange: [
            member: GuildMember,
            oldPermissions: Readonly<Permissions>,
            newPermissions: Readonly<Permissions>
        ];
        guildMemberSubscribedToNitro: [member: GuildMember];
        guildMemberUnsubscribedToNitro: [member: GuildMember];
        guildMemberPresenceChange: [
            member: GuildMember,
            oldPresense: Presence | null,
            newPresense: Presence | null
        ];
        guildAFKChannelChange: [
            oldChannel: VoiceChannel | null,
            newChannel: VoiceChannel | null
        ];
        guildAFKTimeoutChange: [
            guild: Guild,
            oldTimeout: number,
            newTimeout: number
        ];
        guildBannerChange: [
            guild: Guild,
            oldBanner: string | null,
            newBanner: string | null
        ];
    }



```

## Are there more events?

We're just setting the bases of this package for now, We'll add a lot events soon.

## Community

You can join our discord server to give us suggestions or reports [Discord Server](https://discord.gg/nQ55ZUSavA).

## Github

You can find the source code on [Github](https://github.com/subhiashraf912/additional-discord-events).

