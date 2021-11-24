module.exports = ({
  name: "$alwaysExecute",
  code: `
  
  $if[$getServerVar[LevelEnabled]==no]

$else

$if[$getUserVar[EXP]>=$sub[$getServerVar[MaxEXP];1]]
$setUserVar[Level;$sum[$getUserVar[Level];1]]
<@$authorID> Congrats, you leveled up to level $sum[$getUserVar[Level];1]
$useChannel[$getServerVar[LevelChannel]]
$setServerVar[MaxEXP;$sum[$getServerVar[MaxEXP];$random[400;850]]]

$else

$if[$getGlobalUserVar[Premium]==Valid]
$setUserVar[EXP;$sum[$getUserVar[EXP];$random[0;10]]]

$else

$if[$getGlobalUserVar[Premium]==Invalid]
$setUserVar[EXP;$sum[$getUserVar[EXP];$getServerVar[XPEARNED]]]

$else

$if[$getGlobalUserVar[Premium]==Paused]
$setUserVar[EXP;$sum[$getUserVar[EXP];$random[0;10]]]

$onlyIf[$getServerVar[LevelChannel]!=none;]


$endif
$endif
$endif
$endif
$endif`
})