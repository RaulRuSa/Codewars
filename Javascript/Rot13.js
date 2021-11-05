/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message){
    let aux
    let str = ''
    for (let index in message){
      aux = message.charCodeAt(index)
      if( aux >= 65 && aux <= 90){
        aux += 13
        if(aux > 90){
          aux = aux -26
        }
        str += String.fromCharCode(aux)
        console.log(str)
      } 
      else if(aux >= 97 && aux <= 122) {
        aux += 13
        if(aux > 122){
          aux = aux -26
        }
        str +=String.fromCharCode(aux)
      }
        
      else 
        str +=String.fromCharCode(aux)
    }
    return str
  }