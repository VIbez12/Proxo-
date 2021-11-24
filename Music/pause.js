module.exports = ({
  name: "pause",
  code: `

$pauseSong

$title[Song Paused]

$description[<a:Icons_Check:898902238410469397> Paused **$songInfo[title]**]
$footer[Requested by $username]
$addTimestamp
$color[$random[00000;99999]]

   $onlyBotPerms[speak;connect;{description:❌ I require these permissions - **Speak** and **Connect**}{color:RANDOM}]

   $onlyIf[$queueStatus==playing;There is no song playing]

   $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
  
  $suppressErrors[There is no song playing]`
})