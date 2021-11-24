module.exports = ({
  name: "$alwaysExecute",
  code: `
$deletecommand
$description[You cant send links here!]
$footer[Anti Link • Proxo | $getServerVar[Prefix]help]
$color[#FB5D3F]
$onlyIf[$checkContains[$message;https#COLON#//discord.gg/;https#COLON#dsc.gg;https#COLON#dsc.gg/;https#COLON#discord.;http#COLON#]==true;]

$onlyIf[$getServerVar[Anti]==on;]
`
})