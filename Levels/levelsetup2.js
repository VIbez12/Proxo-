module.exports = {
type: "awaitedCommand",
name: "levelsetup2",
code: `
$sendMessage[Level up channel set to <#$get[ch]>;no]
$setServerVar[LevelChannel;$get[ch]]

$if[$toLowerCase[$message[1]]==current]
$let[ch;$channelID]
$else
$let[ch;$findChannel[$message[1];no]]
$onlyIf[$findChannel[$message[1];no]!=undefined; provide valid channel]
$endif
`
}