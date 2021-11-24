module.exports = ({
  name: "fish",
  code: `

  $description[You caught <:LeekBoxfish:888953765258989588> **1 fish and achieved $random[1;30] EXP**]
  $setUserVar[EXP;$sum[$getUserVar[EXP];$random[1;30]]]
  
  $onlyIf[$getUserVar[Rod]>=1;{description: You cannot fish, you do not own a fishing rod.}
  {footer: $getServerVar[Prefix]shop to view all the items you can purchase}`
})