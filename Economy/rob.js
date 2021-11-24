module.exports = ({
  name: "rob",
  code: `
  
  
$onlyIf[$getUserVar[Balance]>=500;{description: <:Icons_X:897206293570404442> You cannot rob **$username[$mentioned[1]]#$discriminator[$mentioned[1], you have less than <:LeekCash:891020668332814358> 500}]

  $onlyIf[$getUserVar[Balance;$mentioned[1]]>=500;{description: <:Icons_X:897206293570404442> That user cannot be robbed, they have less than <:LeekCash:891020668332814358> 500 coins}]
  
  $suppressErrors[{title: Error Command: \`rob\`}
  {description: **Usage:**
  $getServerVar[Prefix]rob @user
  
  **Description:** Robs a user for a randon amount, you can earn a boost in the shop (soon) or a boost with premium.
  
  }]
  
  
  `
  
})