module.exports = ({
  name: "uptime",
  code: `
  
  $title[<a:Icons_Check:898902238410469397> **Proxo has been up for:**
  \`$uptime\`]
  $footer[Proxo;$userAvatar[896376786785538059]]
  
  $color[$random[00000;99999]]
  
  $cooldown[3s;{description: Calm down, wait %time% before trying again.}]`
})