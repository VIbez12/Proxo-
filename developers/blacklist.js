module.exports = ({
  name: "blacklist",
  code: `

  $onlyIf[$message[1]!=;$getServerVar[Prefix]blacklist <USER ID>]

$description[$username[$message[1]] has been blacklisted.]

$setGlobalUserVar[Blacklisted;yes;$message[1]]
  $onlyForIDs[$getVar[Developers];You're not a developer.]
  `
})