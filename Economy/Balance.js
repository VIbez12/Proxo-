module.exports = ({
  name: "bal",
  aliases: ['balance','wallet'],
  code: `

$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$color[$random[00000;99999]]

$title[ $username[$mentioned[1;yes]]'s Balance]

$description[**Wallet:** $getUserVar[Balance;$mentioned[1;yes]]
**Bank:** $getUserVar[bank;$mentioned[1;yes]]]
$footer[$randomText[what a scrub;depressing life huh]]
$addTimestamp

`
})