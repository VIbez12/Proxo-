module.exports = ({
  name: "tempmute",
  code: `


$if[$isNumber[$message[1]]==true]
$takeRole[$message[1];$getServerVar[MuteRole]]
$wait[$message[2]]
$giveRole[$message[1];$getServerVar[MuteRole]]
$sendMessage[{description: $username[$message[1]] has been temp muted for $message[2] | **"$messageSlice[2;3]"**};no]

$else

$if[$isNumber[$message[1]]==false]
$takeRole[$mentioned[1];$getServerVar[MuteRole]]
$wait[$message[2]]
$giveRole[$mentioned[1];$getServerVar[MuteRole]]
$sendMessage[{description: $username[$mentioned[1]] has been temp muted for $message[2] | **"$messageSlice[2;3]"**};no]

$onlyIf[$userExists[$mentioned[1]]==true;{description: <:Icons_X:897206293570404442> That user doesn't exist.}]

$onlyIf[$message[1]!=;{title:Command: $getServerVar[Prefix]tempmute} {description: **Description:** Temp Mute a user in the server so they cannot speak/talk for a duration of time
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]tempmute
**Example:**
$getServerVar[Prefix]tempmute @Pot 25s Silence
$getServerVar[Prefix]tempmute 738988218002964581 3d
$getServerVar[Prefix]tempmute @Pot 1d}]

$onlyIf[$isNumber[$findNumbers[$message[2]]]==true;{title:Command: $getServerVar[Prefix]tempmute} {description: **Description:** Temp Mute a user in the server so they cannot speak/talk for a duration of time
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]tempmute
**Example:**
$getServerVar[Prefix]tempmute @Pot 25s Silence
$getServerVar[Prefix]tempmute 738988218002964581 3d
$getServerVar[Prefix]tempmute @Pot 1d}]

$onlyIf[$checkContains[$message;s;m;d;w]==true;{title:Command: $getServerVar[Prefix]tempmute} {description: **Description:** Temp Mute a user in the server so they cannot speak/talk for a duration of time
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]tempmute
**Example:**
$getServerVar[Prefix]tempmute @Pot 25s Silence
$getServerVar[Prefix]tempmute 738988218002964581 3d
$getServerVar[Prefix]tempmute @Pot 1d}]

$onlyIf[$getServerVar[MuteRole]!=none;{description: You have not setup a mute role yet, you can do so by doing $getServerVar[Prefix]setup muterole}
{color: #F32626}]

 $onlyIf[$getServerVar[MuteRole]!=none;{description: You have not setup a mute role yet, you can do so by doing $getServerVar[Prefix]setup muterole}
{color: #F32626}]

  $onlyIf[$message[1]!=;Mention a valid user to Temp Mute]

  $onlyBotPerms[manageroles;I'm missing required permissions \`Manage Roles\`]
  $onlyPerms[manageroles;You're missing required permissions \`Manage Roles\`]

  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than you.**}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{description: **<:Icons_X:897206293570404442> That user has a higher role than me.**}]
  
  $endif
  $endif`
})