module.exports = ({
  name: "$alwaysExecute",
  code: `
$deleteIn[10s]
$setUserVar[afk;n;$authorID]
$setUserVar[afkwhy;AFK;$authorID] 
$title[AFK Removed!]
$description[We have removed your AFK!]
$onlyIf[$sub[$djsEval[var second = new Date().getTime() / 1000;
  let seconds = Math.floor(second)
  seconds;yes];$getUserVar[afkts;$authorID]]>=5;]
$onlyIf[$getUserVar[afk;$authorID]==y;]`
})