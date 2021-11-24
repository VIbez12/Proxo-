module.exports = ({
  name: "ticket4",
  type: "awaitedCommand",
  code: `

$sendMessage[{description:$roleName[$message] has been set.};no]

$setServerVar[TicketStaff;$message]

$if[$message==none]
$sendMessage[{description:$roleName[$message] has been set to <@&$message>;no]
$setServerVar[TicketStaff;none]

  $onlyIf[$roleExists[$message]==true; That Role Doesn't Exist]

 $onlyIf[$isNumber[$message]==true;Please provide a Role ID or type none]
 
 $endif
 
 
 `
});