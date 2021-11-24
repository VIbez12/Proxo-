module.exports = ({
  name: "reset",
  code: `

$if[$message[1]==]
Enter a valid item to reset \`Coins, Bank\`

$else

$if[$message[2]==]
Mention a user to reset!

$else

$if[$message[1]==Coins]
$description[$username has reset $username[$mentioned[1]]'s Coins]
$setUserVar[Balance;0;$mentioned[1]]

$else

$if[$message[1]==Bank]
$description[$username has reset $username[$mentioned[1]]'s Coins]
$setUserVar[bank;0;$mentioned[1]]

$else

  $if[$message[1]!=]
  "$message" doesn't exist!
  $onlyForIDs[$getVar[Developers];You're not a developer.]

  $endif
  $endif
  $endif
  $endif
  $endif`
})