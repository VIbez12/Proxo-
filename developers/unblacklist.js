module.exports = ({
  name: "unblacklist",
  code: `

  $onlyIf[$message[1]!=;$getServerVar[Prefix]unblacklist <USER ID>]

$description[$username[$message[1]] has been unblacklisted.]

$setGlobalUserVar[Blacklisted;no;$message[1]]
  $onlyForIDs[$getVar[Developers];You're not a developer.]
  `
})