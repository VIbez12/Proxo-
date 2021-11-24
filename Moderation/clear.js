module.exports = ({
  name: "clear",
  code: `

  $onlyIf[$isNumber[$message[1]]==true;{description: <:Icons_X:897206293570404442> enter a valid amount of messages to clear.}
  {color: #FF221E}]

  $onlyIf[$checkContains[$message;-;+;.;,;:;'';/;~;=;_]==false;{description: <:Icons_X:897206293570404442> enter a valid amount of messages to clear.}
  {color: #FF221E}]

    $if[$checkContains[$message;-;+;.;,;:;'';/;~;=;_]==true]
  $color[#67FE7C]
  $description[<a:BotName_Check:897108791982686228>
 cleared $message[1] messages]

 $else

  $if[$isNumber[$message[1]]==false]
  $description[<:Icons_X:897206293570404442> enter a valid amount of messages to clear.]
  $color[#FF221E]

$else

  $if[$isNumber[$message[1]]==true]
   $if[$checkContains[$message;-;+;.;,;:;'';/;~;=;_]==false]
  $clear[$message[1]]
 $description[<a:BotName_Check:897108791982686228> cleared $message[1] messages]
 $color[#67FE7C]

  $argsCheck[1;{title:Command: $getServerVar[Prefix]clear} {description: **Description:** Clear amount of messages given.
  Cooldown: 3 seconds
**Usage:** $getServerVar[Prefix]clear
**Example:**
$getServerVar[Prefix]clear 5}]

  $onlyBotPerms[managemessages;You're missing the required permissions \`Manage Messages\`]
  $onlyPerms[managemessages;You're missing the required permissions \`Manage Messages\`]

  $cooldown[3s;{description: Calm down, wait %time% before trying again.}]
  
  $endif
  $endif
  $endif
  $endif`
})