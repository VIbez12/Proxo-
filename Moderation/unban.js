module.exports = ({
  name: "unban",
  code: `

  $onlyIf[$message[1]!=;]
  
$if[$isNumber[$message[1]]==true]
$unban[$message[1]]
$description[$username[$message[1]] has been unbanned]
$footer[Moderator: $username]

  $else


$if[$isNumber[$message[1]]==false]
$unban[$mentioned[1]]
$description[$username[$mentioned[1]] has been unbanned]
$footer[Moderator: $username]

$onlyIf[$userExists[$mentioned[1]]==true;{description: <:Icons_X:897206293570404442> That user doesn't exist.}]

$argsCheck[1;{title:Command: $getServerVar[Prefix]unban} {description: **Description:** Unbans a user from the server.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]unban
**Example:**
$getServerVar[Prefix]unban @Pot
$getServerVar[Prefix]unban 738988218002964581
$getServerVar[Prefix]unban @Pot Yes}]

  $onlyIf[$message[1]!=;Mention a valid user to unban]
  $onlyBotPerms[ban;I'm missing required permissions \`Ban\`]
  $onlyPerms[ban;You're missing required permissions \`Ban\`]

  $suppressErrors[{title:Command: $getServerVar[Prefix]unban} {description: **Description:** Unbans a user from the server.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]unban
**Example:**
$getServerVar[Prefix]unban @Pot
$getServerVar[Prefix]unban 738988218002964581
$getServerVar[Prefix]unban @Pot Yes}]

$endif
$endif

$cooldown[3s;{description: Calm down, wait %time% before trying again.}]$cooldown[3s;{description: Calm down, wait %time% before trying again.}]

`

})