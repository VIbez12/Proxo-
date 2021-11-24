  module.exports = ({
  
  name: "ticket2",
  type: "awaitedCommand",
  code: `

  $if[$message==]

$awaitMessages[$authorID;30s;everything;ticket4;Command has been cancelled]

  $sendMessage[{description: Please provide a Role ID};no]
  $setServerVar[ticketmsg;Thank you for creating a ticket, please wait while the moderation team assist you.]

  $else

  $if[$message!=]

$awaitMessages[$authorID;30s;everything;ticket4;Command has been cancelled]

  $setServerVar[ticketmsg;$message]
  $sendMessage[{description: Please provide a Role ID};no]

  $endif
  $endif`
});