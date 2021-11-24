module.exports = ({
 name: "unlock",
 usage: "unlock <channel>",
 description: "Unlocks a channel so people can speak/talk",
 category: "Moderation",
 code:` $modifyChannelPerms[$get[chan];+sendmessages;$guildID]

$description[<#$get[chan]> has been unlocked]
  $footer[Moderator: $username[$authorID]]
  $color[#49F344]

$onlyIf[$get[chan]!=undefined;**Send a valid channel**]

$let[chan;$replaceText[$replaceText[$checkCondition[$message==];true;$channelID];false;$findServerChannel[$message;no]]]

$onlyPerms[managechannels;You're missing required permissions \`Manage Channels\`]

$onlyBotPerms[managechannels;sendmessages;manageroles;viewchannel;I'm missing required permissions \`Manage Channels, Send Messages, Manage Roles, View Channel\`]`
});