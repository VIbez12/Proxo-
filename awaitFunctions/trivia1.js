module.exports = ({
 name: "trivia1",
 type: "awaitedCommand",
 code: `

 $if[$message==10/12/21]
$description[Correct! > Who are the developers of Proxo?]
$footer[3 minutes to answer | hint#COLON# answers in the support server, put it in the same order when found.]
 $awaitMessages[$authorID;3m;everything;trivia2;Command has expired]

$else

$if[$message!=10/12/21]
$description[Incorrect, command cancelled.]


$endif
$endif


`
})