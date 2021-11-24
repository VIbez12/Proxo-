module.exports = ({
  name: "resume",
  code: `

$resumeSong

$title[Song Resumed]

$description[<a:Icons_Check:898902238410469397> Resumed **$songInfo[title]**]
$footer[Requested by $username]
$addTimestamp
$color[$random[00000;99999]]

   $onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]

   $onlyIf[$queueStatus==paused;There is no song paused]

   $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
  
  $suppressErrors[There is no song paused]`
})