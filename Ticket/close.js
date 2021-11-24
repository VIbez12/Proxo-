module.exports = {
 name: "close",
 code: `

$if[$hasPerms[$authorID;managechannels]==true]

 $awaitMessages[$authorID;30s;yes,no;cyes,cno; {description: Command Expired}]
 $sendMessage[{title:Confirmation}{description:Type yes or no to confirm this action}
 {footer: Command will expire after 30 sec} {color:RANDOM} {timestamp};no]

 $onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets]

 $else

 $if[$hasRole[$authorID;$roleName[$getServerVar[TicketStaff]]]]
 $elseif[$getServerVar[TicketStaff]!=none]

 $awaitMessages[$authorID;30s;yes,no;cyes,cno; {description: Command Expired}]
 $sendMessage[{title:Confirmation}{description:Type yes or no to confirm this action}
 {footer: Command will expire after \`30 secs\`} {color:RANDOM} {timestamp};no]

 $onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets]

 $endelseif

 

$endif
$endif
 `
};