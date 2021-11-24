  module.exports = ({
  
  name: "levelsetup1",
  type: "awaitedCommand",
  code: `

  $onlyIf[$message!=]

  $awaitMessages[$authorID;30s;everything;levelsetup2;Command has been cancelled]

  $sendMessage[{description: What channel would you like the level message to be sent to?
  
  If you would like to set the current channel: \`type "current"\`

  To set another channel \`mention the channel\`}
  {footer: If you don't want to set one, you can type no};no]
  
  $setServerVar[XPEARNED;$message]

  $onlyIf[$isNumber[$message]==true;That's not a valid amount! command has been cancelled]
`
});