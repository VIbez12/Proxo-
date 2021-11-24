module.exports = {
  name: 'lock',
  code: `$modifyChannelPerms[$get[chan];-sendmessages;$guildID]
  
  $description[<#$get[chan]> has been locked]
  $footer[Moderator: $username[$authorID]]
  $color[#49F344]
  
$onlyIf[$get[chan]!=undefined;**Invalid channel**]

$let[chan;$replaceText[$replaceText[$checkCondition[$message==];true;$channelID];false;$findServerChannel[$message;no]]]

$onlyPerms[managechannels;You're missing required permissions \`Manage Channels\`]

$onlyBotPerms[managechannels;sendmessages;manageroles;viewchannel;I'm missing required permissions \`Manage Channels, Send Messages, Manage Roles, View Channel\`]`
}