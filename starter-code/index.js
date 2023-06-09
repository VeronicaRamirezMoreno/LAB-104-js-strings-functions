
//1.1/ removeFirstAndLastChar(string)
function removeFirstAndLastChar(string) {
  let newString = string.slice(1, -1)
    return newString
}
const result = removeFirstAndLastChar('123456789')
console.log(result)
// 2345678   


//1.2/ moreNerdy(string)
function moreNerdy(string2){
  let result2= string2.replaceAll(/[aA]/g, '4').replaceAll(/[eE]/g,'3').replaceAll("l","1")
   return result2 
}
console.log(moreNerdy(`FundAmentals`))

//1.3/ noVowels(string).
function noVowels(string3){
  let result3= string3.replaceAll(/[aeiouAEIOU]/g, '')
   return result3
}
console.log(noVowels(`HELLO`))

//Iteración 2 - Generador de apodos
function nicknameGenerator(name){
  let nickname = ""
    if(name[2] === /[aeiouAEIOU]/g) {
      nickname= name.slice(0,4)
      return nickname

    } else if (name.length <= 4){
      nickname = "Error: Name too short"
      return nickname

    }else  {
      nickname = name.slice(0,3)
      return nickname
    }
}
console.log(nicknameGenerator(`Guacimara`))

//Iteration 3 - High and low

function highAndLow(number){
    let arr = number.split(" ").sort()
    let result = [arr[arr.length-1],arr[0]].join(" ")
    return result

}
console.log(highAndLow("1 6 0 -4 5"))

//Iteration 4 - Reverse it
function reversi(word){
  let arr2 = word.trim().split(/\s+/)
  let result2 = arr2.reverse().join(" ")
  return result2

}
console.log(reversi("Hi    There."))
