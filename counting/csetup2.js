module.exports = {
type: "awaitedCommand",
name: "countsetup2",
code: `
$sendMessage[Counting Channel set to <#$get[ch]>;no]

$setServerVar[CountChannel;$get[ch]]

$if[$toLowerCase[$message[1]]==current]

$let[ch;$channelID]

$else

$let[ch;$findChannel[$message[1];no]]

$onlyIf[$findChannel[$message[1];no]!=undefined;{description: <:Icons_X:897206293570404442> Provide a valid channel!}]

$endif
`
}