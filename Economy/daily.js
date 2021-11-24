module.exports = ({
  name: "daily",
  code: `

  $onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$if[$getVar[Premium]==Valid]

$title[Here are your coins, __**$username**__]

$description[<:LeekCash:891020668332814358> $multi[$random[200;2000];2] was placed in your wallet

You can get more rewards by voting! (Coming Soon)]

$setUserVar[Balance;$sum[$getUserVar[Balance];$random[200;2000]]]
$footer[Premium Bonus: + $divide[$multi[$random[200;2000];2];2]]

$cooldown[24h;Wait %time% before trying daily again]

$else

$title[Here are your coins, __**$username**__]

$description[$random[200;2000] was placed in your wallet

You can get more rewards by voting! (Coming Soon)]

$setUserVar[Balance;$sum[$getUserVar[Balance];$random[200;2000]]]

$cooldown[24h;Wait %time% before trying daily again]

$endif

`

})