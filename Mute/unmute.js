module.exports = ({
  name: "unmute",
  code: `

  $onlyIf[$message[1]!=;]
  
$if[$isNumber[$message[1]]==true]
$takeRole[$message[1];$getServerVar[MuteRole]]
$description[$username[$message[1]] has been unmuted]

$onlyIf[$hasRole[$message[1];$getServerVar[MuteRole]]==true;{description: That user isn't muted.}]

  $else


$if[$isNumber[$message[1]]==false]
$takeRole[$mentioned[1];$getServerVar[MuteRole]]
$description[$username[$mentioned[1]] has been unmuted]

$onlyIf[$hasRole[$mentioned[1];$getServerVar[MuteRole]]==true;{description: That user isn't muted.}

$onlyIf[$userExists[$mentioned[1]]==true;{description: <:Icons_X:897206293570404442> That user doesn't exist.}]

$argsCheck[1;{title:Command: $getServerVar[Prefix]unmute} {description: **Description:** Unmute a user in the server so they can speak/talk
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]unmute
**Example:**
$getServerVar[Prefix]unmute @Pot
$getServerVar[Prefix]unmute 738988218002964581}]

  $onlyIf[$message[1]!=;Mention a valid user to Unmute]
  $onlyBotPerms[manageroles;I'm missing required permissions \`Manage Roles\`]
  $onlyPerms[manageroles;You're missing required permissions \`Manage Roles\`]

  $suppressErrors[{title:Command: $getServerVar[Prefix]unmute} {description: **Description:** Unmute a user in the server so they can speak/talk
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]unmute
**Example:**
$getServerVar[Prefix]unmute @Pot
$getServerVar[Prefix]unmute 738988218002964581}]

$onlyIf[$getServerVar[MuteRole]!=none;{description: You have not setup a mute role yet, you can do so by doing $getServerVar[Prefix]setup muterole}
{color: #F32626}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than you.**}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than me.**}]

$endif
$endif`

})