module.exports = ({
  name: "ban",
  code: `

  $onlyIf[$message[1]!=;]
  
$if[$isNumber[$message[1]]==true]
$ban[$message[1]]
$description[$username[$message[1]] has been banned | **"$messageSlice[2;900]"**]

  $else


$if[$isNumber[$message[1]]==false]
$ban[$mentioned[1]]
$description[$username[$mentioned[1]] has been banned | **"$messageSlice[2;900]"**]

$onlyIf[$userExists[$mentioned[1]]==true;{description: <:Icons_X:897206293570404442> That user doesn't exist.}]

$argsCheck[1;{title:Command: $getServerVar[Prefix]ban} {description: **Description:** Bans a user from the server.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]ban
**Example:**
$getServerVar[Prefix]ban @Pot
$getServerVar[Prefix]ban 738988218002964581
$getServerVar[Prefix]ban @Pot View}]

  $onlyIf[$message[1]!=;Mention a valid user to ban]
  $onlyBotPerms[ban;I'm missing required permissions \`Ban\`]
  $onlyPerms[ban;You're missing required permissions \`Ban\`]

  $suppressErrors[{title:Command: $getServerVar[Prefix]ban} {description: **Description:** Bans a user from the server.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]ban
**Example:**
$getServerVar[Prefix]ban @Pot
$getServerVar[Prefix]ban 738988218002964581
$getServerVar[Prefix]ban @Pot View}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than you.**}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than me.**}]

$endif
$endif

$cooldown[3s;{description: Calm down, wait %time% before trying again.}]`

})