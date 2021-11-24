module.exports = ({
  name: "new",
  code: `

  $setServerVar[TicketNum;$sum[$getServerVar[TicketNum];1]]

  $textSplit[$getServerVar[Ticket];|]

  $description[Opened a ticket <#$channelID[ticket-$getServerVar[TicketNum]]>]

  $setUserVar[TickOpen;yes]
  
  $textSplit[$createChannel[Ticket $getServerVar[TicketNum];text;yes;$getServerVar[TicketChannel]]; ]

$createObject[{}]
$addObjectProperty[id;$splitText[1]]

$onlyIf[$getServerVar[TicketChannel]!=; Ticket System is not set yet]
`

});