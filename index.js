const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let winOrNah = undefined

  arr.find(function(record){
    if(record.result === "W") {
      winOrNah = record.year
    }
  })
  
  return winOrNah
}
