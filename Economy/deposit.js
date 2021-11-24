module.exports  = ({
name: "deposit",
aliases: ['dep'],
code: `

$onlyIf[$message[1]!=;{description: You can't deposit nothing, enter a valid amount.}]

$if[$getUserVar[Balance]>=$message[1]]

$setUserVar[Balance;$sub[$getUserVar[Balance];$message[1]]]
$setUserVar[bank;$sum[$getUserVar[bank];$message[1]]]
$description[$message[1] has been deposited into your bank]

$else

$if[$getUserVar[Balance]<$message[1]]
$description[You don't have that much to deposit.]

$else

$if[$message[1]==all]
$description[You have deposited $getUserVar[Balance] into your bank]
$setUserVar[Balance;$sub[$getUserVar[Balance];$getUserVar[Balance]]]
$setUserVar[bank;$sum[$getUserVar[bank];$getUserVar[Balance]]]

$endif

$endif
$endif


$suppressErrors[{title:Command: $getServerVar[Prefix]deposit} {description: **Description:** Deposit money into your bank.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]deposit
**Example:**
$getServerVar[Prefix]deposit 5}]

$onlyIf[$checkContains[$message;-;+;.;,;:;'';/;~;=;_]==false;]

$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

`

})