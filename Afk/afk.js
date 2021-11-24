module.exports = ({
  name: "afk",
  code: `
  $setUserVar[afk;y;$authorID]
  $setUserVar[afkwhy;$get[why];$authorID]
  $setUserVar[afkts;$get[ts];$authorID]
  $sendMessage[{title:I set your AFK} {description:Reason: $get[why]};no]
  $if[$message==]
  $let[why;AFK]
  $else
  $let[why;$message]
  $endif
  $let[ts;$djsEval[var second = new Date().getTime() / 1000;
  let seconds = Math.floor(second)
  seconds;yes]]
  $onlyIf[$getUserVar[afk;$authorID]==n;{title:ERROR!} {description:You are already AFK!}]
  $suppressErrors
`
})