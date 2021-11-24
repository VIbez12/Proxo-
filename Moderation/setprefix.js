module.exports = ({
  name: "setprefix",
  aliases: ['changeprefix','newprefix'],
  code:`

$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$if[$authorID==766868093795565578]
$setServerVar[Prefix;$message]
$description[Changed prefix to $message
$argsCheck[1;\`CommandError: $getServerVar[Prefix]setprefix <prefix>\`]

$else

$if[$hasPerms[$authorID;managemessages]==true]
$setServerVar[Prefix;$message]
$description[Changed prefix to $message
$argsCheck[1;\`CommandError: $getServerVar[Prefix]setprefix <prefix>\`]

$else

$if[$hasPerms[$authorID;managemessages]==false]
You don't have the required permission /Manage Messages/

$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$endif
$endif
$endif`
})