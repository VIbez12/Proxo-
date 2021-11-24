module.exports = ({
name: "warnings",
code: 
`
$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

$title[$username[$mentioned[1;yes]]'s Warnings]

$description[Amount: $getUserVar[Warns;$mentioned[1;yes]]]`

  
})