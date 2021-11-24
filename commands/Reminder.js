module.exports = ({
 name: "reminder",
 aliases: ["remindme"],
 code: `

$onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]

 $sendDM[$authorID;{title: Reminder}
 
 {description: $messageSlice[1]} 

 $addTimestamp

  {footer: $month}]

$wait[$getObjectProperty[duration]ms]

$sendMessage[Okay, I will remind you in $message[1] : $messageSlice[1];no]

$createObject[{}]

$argsCheck[>2;Correct usage: \`$getServerVar[Prefix]reminder <duration> <reason>\`]`
})