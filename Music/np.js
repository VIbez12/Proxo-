module.exports = ({
    name: "nowplaying",
    aliases: ['np'],
    code: `

    $onlyIf[$getGlobalUserVar[Blacklisted]==no;You are blacklisted by a developer.]
    
$color[RANDOM]
    $description[⏯ Current playing song - **[$songInfo[title]\\]($songInfo[url])**]
    $thumbnail[$songinfo[thumbnail]]
    $addTimestamp
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ I require these permissions - **Embed Links**}{color:RANDOM}]
})`
})