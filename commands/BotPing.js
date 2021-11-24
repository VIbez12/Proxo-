module.exports = ({
  name: "$alwaysExecute",
  code: `

  $title[Server: $serverName[$guildID]]

  $description[
   Proxo commands in this server start with \`$getServerVar[Prefix]\`
  ]

  $footer[ID: $authorID | Pot | PO#COLON#$random[200;600]]

  $addField[Help & Support;[Server](https://discord.gg/kRESCcp5xb);no]

  $addField[Get Proxo;[Add Proxo to your server](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot);no]

  $onlyIf[896376786785538059==$mentioned[1];]`
})