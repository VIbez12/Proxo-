module.exports = {
  name: "remove-warn",
  code: `

  $onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$onlyIf[$checkContains[$message;-;+;.;,;:;'';/;~;=;_]==false;]

  $onlyIf[$message[1]!=;{title:Command: $getServerVar[Prefix]remove-warn} {description: **Description:** Removes a warn from a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]remove-warn
**Example:**
$getServerVar[Prefix]remove-warn @Pot 2}]

$onlyIf[$message[2]!=;{title:Command: $getServerVar[Prefix]remove-warn} {description: **Description:** Removes a warn from a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]remove-warn
**Example:**
$getServerVar[Prefix]remove-warn @Pot 2}]

  $onlyIf[$isNumber[$message[2]]==true;{title:Command: $getServerVar[Prefix]remove-warn} {description: **Description:** Removes a warn from a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]remove-warn
**Example:**
$getServerVar[Prefix]remove-warn @Pot 2}]

$description[$message[2] warnings have been removed from $username[$mentioned[1]]]
$setUserVar[Warns;$sub[$getUserVar[Warns];$message[2]]]

$suppressErrors[{title:Command: $getServerVar[Prefix]remove-warn} {description: **Description:** Removes a warn from a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]remove-warn
**Example:**
$getServerVar[Prefix]remove-warn @Pot 2}]

  $onlyPerms[manageroles;You're missing required permissions \`Manage Roles\`]

  $cooldown[3s;{description: Calm down, wait %time% before trying again.}]
  `
}