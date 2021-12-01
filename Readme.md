<p align="center">
  <a href="https://github.com/subhiashraf912">
    <img src="https://cdn.discordapp.com/attachments/900321704289656872/913816621724876820/Comp_1_00000.png" height="128">
    <h1 align="center">More Discord.JS Events</h1>
  </a>
</p>

<p align="center">
  <a aria-label="More Discord.JS Events logo" href="https://github.com/subhiashraf912">
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

//Avaliable Events (For now).
client.on("guildMemberVoiceConnect", (member, channel) => {});

client.on("guildMemberVoiceDisconnect", (member, oldChannel) => {});

client.on("guildMemberVoiceSwitch", (member, oldChannel, newChannel) => {});

client.login("token");
```

## Are there more events?

We're just setting the bases of this package for now, We'll add a lot events soon.

## Community

You can join our discord server to give us suggestions or reports [Discord Server](https://discord.gg/nQ55ZUSavA).

## Github

Soon

<!-- You can find the source code on [Github](https://github.com/subhiashraf912).
 -->
