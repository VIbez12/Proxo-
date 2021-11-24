module.exports = {
  name: "buy pickaxe",
  code: `

  $onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$if[$getUserVar[Balance]<2000]
You don't have enough Cash, check >shop before buying items you can't afford.

$else

$if[$getUserVar[Balance]>=2000]
$setUserVar[Pickaxe;$sum[$getUserVar[Pickaxe];1]]
$username bought a Pickaxe. ($sum[$getUserVar[Pickaxe];1])
$setUserVar[Balance;$sub[$getUserVar[Balance];2000]]

$onlyIf[$getUserVar[Pickaxe]==0;You already have a Pickaxe.]

$endif
$endif
`
}