module.exports = ({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
  $onlyIf[$isNumber[$message]==true;]

$if[$getServerVar[counting]==$message]
$if[$getServerVar[lastcount]!=$authorID]
$setServerVar[counting;$sum[$message[1];1]]
$addCmdReactions[✅]
$setServerVar[lastcount;$authorID]
$else
$deletecommand
$endif
$else
$if[$getServerVar[lastcount]!=$authorID]
**$username** Ruined it at $getServerVar[counting], Type \`1\` to start.
$setServerVar[counting;1]
$deleteIn[2000]
$endif
$if[$getServerVar[counting]==undefined]
Setting up Counting Channel
$setServerVar[lastcount;79797979079]
$setServerVar[counting;1]
$endif
$endif

$onlyIf[$getServerVar[CountChannel]!=none;]

$onlyForChannels[$getServerVar[CountChannel];]`
})