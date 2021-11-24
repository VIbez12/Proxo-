module.exports = ({
  name: "maxexp",
  code: `

  $description[I have given you max EXP.]
  $footer[This command is only for developers.]
  
  $setUserVar[EXP;$getServerVar[MaxEXP]
  
  $onlyForIDs[$getVar[Developers];You're not a developer.]
 
 `
})