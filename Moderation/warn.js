module.exports = {
  name: "warn",
  code: `

  $onlyIf[$message[1]!=;{title:Command: $getServerVar[Prefix]warn} {description: **Description:** Warns a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]warn
**Example:**
$getServerVar[Prefix]warn @Pot}]

$if[$message[2]==]

  $description[$username[$mentioned[1]] was warned for \`No Reason Given\`]
  $footer[Moderator: $username]
  $setUserVar[Warns;$sum[$getUserVar[Warns];1];$mentioned[1]] 

  $else

  $if[$message[2]!=]
   $description[$username[$mentioned[1]] was warned for \`$messageSlice[2;900]\`]
   $setUserVar[Warns;$sum[$getUserVar[Warns];1];$mentioned[1]] 
  $footer[Moderator: $username]

  $onlyPerms[manageroles;You're missing required permissions \`Manage Roles\`]

  $suppressErrors[{title:Command: $getServerVar[Prefix]warn} {description: **Description:** Warns a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]warn
**Example:**
$getServerVar[Prefix]warn @Pot}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than you.**}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than me.**}]

$endif
$endif

$cooldown[3s;{description: Calm down, wait %time% before trying again.}]`

}