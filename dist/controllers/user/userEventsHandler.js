"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client === null || client === void 0 ? void 0 : client.on("guildMemberUpdate", (oldMember, newMember) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (((_a = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _a === void 0 ? void 0 : _a.accentColor) !== ((_b = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _b === void 0 ? void 0 : _b.accentColor)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberAccentChange", newMember, (_c = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _c === void 0 ? void 0 : _c.accentColor, (_d = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _d === void 0 ? void 0 : _d.accentColor);
        }
        if (((_e = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _e === void 0 ? void 0 : _e.username) !== ((_f = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _f === void 0 ? void 0 : _f.username)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberUsernameChange", newMember, (_g = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _g === void 0 ? void 0 : _g.username, (_h = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _h === void 0 ? void 0 : _h.username);
        }
        if (((_j = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _j === void 0 ? void 0 : _j.avatar) !== ((_k = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _k === void 0 ? void 0 : _k.avatar)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberUserAvatarChange", newMember, (_l = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _l === void 0 ? void 0 : _l.avatarURL(), (_m = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _m === void 0 ? void 0 : _m.avatarURL());
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.deleted) !== (newMember === null || newMember === void 0 ? void 0 : newMember.deleted)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberUserDelete", newMember);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.premiumSince) && !(newMember === null || newMember === void 0 ? void 0 : newMember.premiumSince)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberUnsubscribedToNitro", newMember);
        }
        if (!(oldMember === null || oldMember === void 0 ? void 0 : oldMember.premiumSince) && (newMember === null || newMember === void 0 ? void 0 : newMember.premiumSince)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberSubscribedToNitro", newMember);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.presence) !== (newMember === null || newMember === void 0 ? void 0 : newMember.presence)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberPresenceChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.presence, newMember === null || newMember === void 0 ? void 0 : newMember.presence);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.permissions) !== (newMember === null || newMember === void 0 ? void 0 : newMember.permissions)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberPermissionsChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.permissions, newMember === null || newMember === void 0 ? void 0 : newMember.permissions);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.pending) !== (newMember === null || newMember === void 0 ? void 0 : newMember.pending)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberPendingChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.pending, newMember === null || newMember === void 0 ? void 0 : newMember.pending);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.partial) !== (newMember === null || newMember === void 0 ? void 0 : newMember.partial)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberPartialChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.partial, newMember === null || newMember === void 0 ? void 0 : newMember.partial);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.nickname) !== (newMember === null || newMember === void 0 ? void 0 : newMember.nickname)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberNicknameChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.nickname, newMember === null || newMember === void 0 ? void 0 : newMember.nickname);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.displayHexColor) !== (newMember === null || newMember === void 0 ? void 0 : newMember.displayHexColor)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberHexColorChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.displayHexColor, newMember === null || newMember === void 0 ? void 0 : newMember.displayHexColor);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.displayName) !== (newMember === null || newMember === void 0 ? void 0 : newMember.displayName)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberDisplayNameChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.displayName, newMember === null || newMember === void 0 ? void 0 : newMember.displayName);
        }
        if ((oldMember === null || oldMember === void 0 ? void 0 : oldMember.avatar) !== (newMember === null || newMember === void 0 ? void 0 : newMember.avatar)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberAvatarChange", newMember, oldMember === null || oldMember === void 0 ? void 0 : oldMember.avatarURL(), newMember === null || newMember === void 0 ? void 0 : newMember.avatarURL());
        }
        if (((_o = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _o === void 0 ? void 0 : _o.discriminator) !== ((_p = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _p === void 0 ? void 0 : _p.discriminator)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberDiscriminatorChange", newMember, (_q = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _q === void 0 ? void 0 : _q.discriminator, (_r = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _r === void 0 ? void 0 : _r.discriminator);
        }
        if (((_s = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _s === void 0 ? void 0 : _s.banner) !== ((_t = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _t === void 0 ? void 0 : _t.banner)) {
            client === null || client === void 0 ? void 0 : client.emit("guildMemberBannerChange", newMember, (_u = oldMember === null || oldMember === void 0 ? void 0 : oldMember.user) === null || _u === void 0 ? void 0 : _u.bannerURL(), (_v = newMember === null || newMember === void 0 ? void 0 : newMember.user) === null || _v === void 0 ? void 0 : _v.bannerURL());
        }
    });
};
