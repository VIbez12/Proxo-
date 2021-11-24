module.exports = {
  name: "anti-link",
  aliases: ['antilink'],
  code: `

  $onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$onlyPerms[manageserver;Your missing required permissions
\`Manage Server\`]
$onlyBotPerms[manageserver;Im missing required permissions
\`Manage Server\`]

$if[$getServerVar[Anti]==on]
$description[<a:BotName_Check:897108791982686228> AntiLink has been disabled]
$color[#EB8E7D]
$setServerVar[Anti;off]

$else

$if[$getServerVar[Anti]==off]
$description[<a:BotName_Check:897108791982686228> AntiLink has been enabled]
$setServerVar[Anti;on]
$color[#8BEB7D]

$endif
$endif`
}