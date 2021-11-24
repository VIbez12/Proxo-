 module.exports = ({
  
  name: "countsetup1",
  type: "awaitedCommand",
  code: `

  $setUserVar[lastcount;$message]

  $description[<a:BotName_Check:897108791982686228> Last count was set to $message]
  $sendMessage[{description: Where do you want the counting channel to be set?
  
 If you would like the counting channel to be in the current channel, type \`current\`

 If not mention a channel.}
  {footer: 3 minutes before the command expires.};no]

  $awaitMessages[$authorID;3m;everything;countsetup2;Command has been cancelled]

  $onlyIf[$message>$getServerVar[counting];{description: <:Icons_X:897206293570404442> You can't set last count less or equal to $getServerVar[counting]}]

  $onlyIf[$isNumber[$message]==true;{description: <:Icons_X:897206293570404442> Enter a valid amount for last count!}]
  `

 })