module.exports = {
  name: "reload",
  code: `
  $sendMessage[{title:Success!} {description:Commands have been reloaded!};no]
  $addMessageReactions[$channelID;$messageID;👍]
  $updateCommands
  $onlyForIDs[$getVar[Developers];{title:ERROR!}{description:Reason: No Permission Found!}]
  `
}