import { Client } from "discord.js";
declare module "discord.js" {
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
}
declare const moreDJSEvents: (client: Client) => Promise<void>;
export default moreDJSEvents;
