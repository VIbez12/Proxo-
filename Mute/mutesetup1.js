  module.exports = ({
  
  name: "mutesetup1",
  type: "awaitedCommand",
  code: `

  $onlyIf[$message!=]

  $sendMessage[{description: Mute Role has been set, thank you for using **Proxo**}
  {color: #55AEFC};no]
  $setServerVar[MuteRole;$mentionedRoles[1]]

  $onlyIf[$roleExists[$mentionedRoles[1]]==true;{description: That is a invalid role, setup has been cancelled.}
  {color: #F32626}]
`
});