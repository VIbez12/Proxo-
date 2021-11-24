module.exports = ({
 name: "cno",
 type: "awaitedCommand",
 code: `

 $if[$hasRole[$authorID;$roleName[$getServerVar[TicketStaff]]]==true]
 $elseif[$getServerVar[TicketStaff]!=none]
$description[Close has been Cancelled]
$footer[Executed by: $username]
$color[#55AEFC]
$onlyIf[$checkContains[$channelName;ticket]==true;only in tickets]

$endelseif
$else

$if[$hasPerms[$authorID;managechannels]==true]
$descriptio[Close has been Cancelled]
$footer[Executed by $username]
$color[#55AEFC]
$onlyIf[$checkContains[$channelName;ticket]==true;only in tickets]

$else

$if[$hasPerms[$authorID;managechannels]==false]
$description[You're missing required permissions \`Manage Channels\`]

$endif
$endif
$endif

 `
});