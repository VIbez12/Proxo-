module.exports = ({
  name: "level",
  code: `
$color[$random[00000;99999]]
$title[$username[$mentioned[1;yes]]]

$description[]

$addField[Misc;\`Soon\` commands issued (used)]
$thumbnail[$userAvatar[$mentioned[1;yes]];no]

$addField[Premium Bonus:; \`Soon\`;yes]

$addField[Level;\`$getUserVar[Level;$mentioned[1;yes]]\`;yes]

$addField[Experience;\`$getUserVar[EXP;$mentioned[1;yes]]/$getServerVar[MaxEXP]\`;yes]

$addField[Coins;**Wallet:** $getUserVar[Balance;$mentioned[1;yes];yes]
**Bank:** $getUserVar[bank;$mentioned[1;yes]];yes]

$onlyIf[$getServerVar[LevelEnabled]==yes;{description: Level is disabled, you can enable it using $getServerVar[Prefix]enable  level}]

$onlyIf[$getServerVar[LevelChannel]!=none;{description: Level Setup wasn't completed!}]

`

})