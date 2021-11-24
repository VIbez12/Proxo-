module.exports = ({
 name: "cyes",
 type: "awaitedCommand",
 code: `

 $if[$hasRole[$authorID;$roleName[$getServerVar[TicketStaff]]]==true]
 $elseif[$getServerVar[TicketStaff]!=none]
$deleteChannels[$channelID]
$onlyIf[$checkContains[$channelName;ticket]==true;only in tickets]

$endelseif
$else

$if[$hasPerms[$authorID;managechannels]==true]
$deleteChannels[$channelID]
$onlyIf[$checkContains[$channelName;ticket]==true;only in tickets]

$else

$if[$hasPerms[$authorID;managechannels]==false]
$description[You're missing required permissions \`Manage Channels\`]

$endif
$endif
$endif

 `
});