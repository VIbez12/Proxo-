module.exports = ({
  name: "ticket",
  type: "awaitedCommand",
  code: `

$awaitMessages[$authorID;30s;everything;ticket2;Command has been cancelled]

$sendMessage[{description:$channelName[$message] has been set.
Provide the Ticket Message.

 Format:
 *Message When no subject is Provided|Message In Ticket|Message to User in The Channel \`$getServerVar[Prefix]ticket\` is used*};no]

$setServerVar[TicketChannel;$message]

  $onlyIf[$channelExists[$message]==true; That Category Doesn't Exist]

 $onlyIf[$isNumber[$message]==true;Please provide a Category ID]`
});