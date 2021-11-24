module.exports = ({
  name: "mute",
  code: `

  $onlyIf[$message[1]!=;]
  
$if[$isNumber[$message[1]]==true]
$giveRole[$message[1];$getServerVar[MuteRole]]
$description[$username[$message[1]] has been muted | **"$messageSlice[1;2]"**]

  $else


$if[$isNumber[$message[1]]==false]
$giveRole[$mentioned[1];$getServerVar[MuteRole]]
$description[$username[$mentioned[1]] has been muted | **"$messageSlice[1;2]"**]

$onlyIf[$userExists[$mentioned[1]]==true;{description: <:Icons_X:897206293570404442> That user doesn't exist.}]

$argsCheck[1;{title:Command: $getServerVar[Prefix]mute} {description: **Description:** Mute a user in the server so they cannot speak/talk
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]mute
**Example:**
$getServerVar[Prefix]mute @Pot
$getServerVar[Prefix]mute 738988218002964581
$getServerVar[Prefix]mute @Pot Silence}]

  $onlyIf[$message[1]!=;Mention a valid user to Mute]
  $onlyBotPerms[manageroles;I'm missing required permissions \`Manage Roles\`]
  $onlyPerms[manageroles;You're missing required permissions \`Manage Roles\`]

  $suppressErrors[{title:Command: $getServerVar[Prefix]mute} {description: **Description:** Mute a user in the server so they cannot speak/talk
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]mute
**Example:**
$getServerVar[Prefix]mute @Pot
$getServerVar[Prefix]mute 738988218002964581
$getServerVar[Prefix]mute @Pot Silence}]

$onlyIf[$getServerVar[MuteRole]!=none;{description: You have not setup a mute role yet, you can do so by doing $getServerVar[Prefix]setup muterole}
{color: #F32626}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than you.**}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than me.**}]

$endif
$endif`

})