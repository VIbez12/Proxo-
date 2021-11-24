module.exports  = ({
name: "withdraw",
aliases: ['with'],
code: `

$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$onlyIf[$checkContains[$message;-;+;.;,;:;'';/;~;=;_]==false;{title:Command: $getServerVar[Prefix]remove-warn} {description: **Description:** Removes a warn from a user in the server
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]remove-warn
**Example:**
$getServerVar[Prefix]remove-warn @Pot 2}]

$onlyIf[$isNumber[$message[1]]==true;{description: Enter a valid amount to withdraw.}]

$onlyIf[$message[1]!=;{description: You can't withdraw nothing, enter a valid amount.}]

$if[$getUserVar[bank]>=$message[1]]

$setUserVar[bank;$sub[$getUserVar[bank];$message[1]]]
$setUserVar[Balance;$sum[$getUserVar[Balance];$message[1]]]
$description[$message[1] has been withdrawed into your Balance]

$else

$if[$getUserVar[bank]<$message[1]]
$description[You don't have that much to withdraw.]

$endif
$endif

$suppressErrors[{title:Command: $getServerVar[Prefix]withdraw} {description: **Description:** Withdraw money out your bank.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]withdraw
**Example:**
$getServerVar[Prefix]withdraw 5}]


`

})