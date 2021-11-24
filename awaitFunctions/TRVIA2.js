module.exports = ({
  name: "trivia2",
  type: "awaitedCommand",
  code: `
  
  $if[$message==Pot, Dr, Lighter, iMat]
 $description[You have completed the trivia.]

 $else

 $if[$message!=Pot, Dr, Lighter, iMat]
 $description[Incorrect, command cancelled]

 $endif
 $endif`
})