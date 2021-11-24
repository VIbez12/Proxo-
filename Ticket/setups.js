module.exports = {
  name: "setup",
  code: `
  
  $onlyIf[$message[1]!=;{description: Here's a list of setups
  
  Ticket
  Muterole
  level
  counting}]
  
  $if[$message[1]==ticket]

  $awaitMessages[$authorID;30s;everything;ticket;Command has been cancelled]
  $sendMessage[Please provide the category ID you would like tickets to be sent, make sure not everyone can see it.;no]

  $onlyPerms[managechannels;You're missing required permissions \`Manage Channels\`]

  $onlyBotPerms[managechannels;I'm missing required permissions \`Manage Channels\`]

  $else

   $if[$message[1]==muterole]

   $awaitMessages[$authorID;30s;everything;mutesetup1;Command has expired]
  $sendMessage[Please mention the role you would like to use for muting.;no]

  $else

  $if[$message[1]==level]

   $awaitMessages[$authorID;30s;everything;levelsetup1;Command has expired]
  $sendMessage[How many messages would you liked earned per message?;no]

  $onlyPerms[managemessages;You're missing required permissions \`Manage Messages\`]

  $else

  $if[$message[1]==counting]

  $awaitMessages[$authorID;30s;everything;countsetup1;Command has expired]
  $sendMessage[How much do you want the last count to be?;no]

  $else

  $if[$message[1]!=]
  "$message" does not exist!

  $onlyPerms[manageroles;You're missing required permissions \`Manage Roles\`]
   $onlyBotPerms[manageroles;I'm missing required permissions \`Manage Roles\`]

  $endif
  $endif
  $endif
  $endif
  $endif
  `
};