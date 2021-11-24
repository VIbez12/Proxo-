module.exports = ({
  name: "help",
   aliases: ['cmds','commands'],
   code: `
   $if[$message[1]==warn]
   $description[<:Icons_Moderation:896843893822324786> [Warn](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Warn:
  \`$getServerVar[Prefix]warn <user mention or ID> <reason>\`

  What does Warn do:
  \`Warn allows you to give people a heads up and to fix what they did before a bigger action is used, all warnings are saved (SOON)\`]

  $thumbnail[$serverIcon]

  $else

     $if[$message[1]==mute]
   $description[<:Icons_Moderation:896843893822324786> [Mute](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Mute:
  \`$getServerVar[Prefix]mute <user mention> <reason>\`

  What does Mute do:
  \`Mute allows you to silence people from talking or speaking.\`]

  $thumbnail[$serverIcon]

  $else

$if[$message[1]==warn]
   $description[<:Icons_Moderation:896843893822324786> [Warn](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Warn:
  \`$getServerVar[Prefix]warn <user mention or ID> <reason>\`

  What does Warn do:
  \`Warn allows you to give people a heads up and to fix what they did before a bigger action is used, all warnings are saved (SOON)\`]

  $thumbnail[$serverIcon]

  $else

     $if[$message[1]==unmute]
   $description[<:Icons_Moderation:896843893822324786> [Unmute](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Unmute:
  \`$getServerVar[Prefix]unmute <user mention>\`

  What does Unmute do:
  \`Unmute allows you to unsilence people and lets them talk.\`]

  $thumbnail[$serverIcon]

  $else

  
     $if[$message[1]==remove-warn]
   $description[<:Icons_Moderation:896843893822324786> [Remove-Warn](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Remove-warn:
  \`$getServerVar[Prefix]remove-warn <user mention> / <user ID>\`

  What does remove-warn do:
  \`Remove-warn allows you to remove a warn a user was given from a moderator / user..\`]

  $thumbnail[$serverIcon]

  $else

 $if[$message[1]==clear]
   $description[<:Icons_Moderation:896843893822324786> [Clear](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Clear:
  \`$getServerVar[Prefix]clear <amount>\`

  What does Clear do:
  \`Clear is used for deleting an amount of messages sent by a user with manage messages permission.\`]

  $thumbnail[$serverIcon]

  $else

  $if[$message[1]==tempmute]
   $description[<:Icons_Moderation:896843893822324786> [TempMute](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  How to use Tempmute:
  \`$getServerVar[Prefix]Tempmute <user mention/ID> <TIME> <Reason (Optional)>\`

  What does TempMute do:
  \`Tempmute temporarily mutes a user so they cannot speak/talk for a duration of time.\`]

  $thumbnail[$serverIcon]

  $else

      $if[$message[1]==economy]
 $description[<:Icons_GlobalCash:897110829290377296> [Assistance](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  \`balance, buypickaxe, daily, deposit, withdraw\`]
  $thumbnail[$serverIcon]
  $footer[For More Information on a command use $getServerVar[Prefix]help <command>]

  $else

   $if[$message[1]==utility]
 $description[<:Icon_todolist:896843743532052530> [Assistance](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  \`reminder, warnings, invite\`]
  $thumbnail[$serverIcon]
  $footer[For More Information on a command use $getServerVar[Prefix]help <command>]

  $else

$if[$message[1]==music]
 $description[<:Icons_Music:897665845575172136> [Assistance](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  \`play <song name/url>, nowplaying, pause, resume\`]
  $thumbnail[$serverIcon]
  $footer[For More Information on a command use $getServerVar[Prefix]help <command>]

  $else
   
 $if[$message[1]==mod]
 $description[<:Icons_Moderation:896843893822324786> [Assistance](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  \`ban, unban, clear, setcount, setprefix, anti-link, warn, remove-warn, mute, unmute, tempmute, lock, unlock\`]
  $thumbnail[$serverIcon]
  $footer[For More Information on a command use $getServerVar[Prefix]help <command>]

  $else

$if[$message[1]==setup]
 $description[<:Icons_Thumbs:898925843244515338>
 [Assistance](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  \`setup ticket, setup muterole, setup level, setup counting\`]
  $thumbnail[$serverIcon]
  $footer[For More Information on a command use $getServerVar[Prefix]help <command>]

$else

$if[$message[1]==ticket]
 $description[:mailbox: [Assistance](https://discord.com/api/oauth2/authorize?client_id=896376786785538059&permissions=8&scope=bot)
  
Prefix: \`$getServerVar[Prefix]\`

  \`new, close\`]
  $thumbnail[$serverIcon]
  $footer[For More Information on a command use $getServerVar[Prefix]help <command>]

  $else

  $if[$message[1]==]
   
   $title[Panel Help]
   $thumbnail[$serverIcon]
   $description[<:Icon_todolist:896843743532052530> Thank you for using Proxo, **$username**
   
   <:Icons_WaveIDK:896843960734085161> To view the help commands use \`$getServerVar[Prefix]help <Command ID>\`

   <:Icons_Moderation:896843893822324786> Moderation Commands \`(13)\`
   *ID* \`mod\`
   
  <:Icon_todolist:896843743532052530> Utility Commands \`(3)\`
  *ID* \`utility\`

  <:Icons_GlobalCash:897110829290377296> Economy Commands \`(5)\`
  *ID* \`economy\`

  <:Icons_Music:897665845575172136> Music Commands \`(4)\`
*ID* \`music\`

:mailbox: Ticket Commands \`(2)\`
*ID* \`ticket\`

<:Icons_Thumbs:898925843244515338> Setups \`(2)\`
*ID* \`setup\`]

$footer[Proxo was created 10/12/21]

  $else

  $if[$message[1]!=]
  "$message" does not exist!

  $endif
$endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif
  $endif

  $cooldown[3s;{description: Calm down, wait %time% before trying again.}]
`
})