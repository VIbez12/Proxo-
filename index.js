const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[Prefix]"
})

bot.onMessage()

bot.loadCommands(`./commands/`)
bot.loadCommands(`./Economy/`)
bot.loadCommands(`./Moderation/`)
bot.loadCommands(`./Utility/`)
bot.loadCommands(`./Music/`)
bot.loadCommands(`./Logs/`)
bot.loadCommands(`./developers/`)
bot.loadCommands(`./Ticket/`)
bot.loadCommands(`./Mute/`)
bot.loadCommands(`./Levels/`)
bot.loadCommands(`./Afk/`)
bot.loadCommands(`./Games/`)
bot.loadCommands(`./awaitFunctions/`)
bot.loadCommands(`./counting/`)

//-- CALLBACKS --\\

bot.readyCommand({
    code: `$log[Ready on $userTag[$clientID]]`
})
bot.status({
  text: "the Proxo Team",
  type: "LISTENING",
  status: "online",
  time: 12
})
bot.status({
  text: "$allMembersCount users | $serverCount servers",
  type: "LISTENING",
  status: "online",
  time: 12
})
bot.onMessageDelete();
  
//-- VARIABLES --\\

bot.variables({
  Balance: "0",
  bank: "0",
  Prefix: "!",
  LogChannel: "",
  Pickaxe: "0",
  Premium: "Invalid",
  CountChannel: "",
  lastcount: "",
  counting: "",
  Warns: "0",
  Anti: "off",
  Developers: "738988218002964581;766868093795565578;808368246600368169",
  Blacklisted: "no",
  TicketSystem: "no",
  ticketmsg: "",
  TicketChannel: "",
  TicketNum: "1",
  Ticket: "",
  TickOpen: "no",
  TicketStaff: "none",
  MuteRole: "none",
  Level: "0",
  EXP: "0",
  XPEARNED: "1",
  MaxEXP: "100",
  LevelEnabled: "yes",
  LevelChannel: "none",
  afk: 'n',
  afkts: '',
  afkwhy: 'AFK',
  CompleteTrivia: "no",
})