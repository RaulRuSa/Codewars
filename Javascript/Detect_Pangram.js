/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string){
    let letters = []
    for(let i=65; i<=90; i++)
      letters.push(String.fromCharCode(i))
    
    for (let letter of letters)
      if(!string.includes(letter) && !string.includes(letter.toLowerCase()))
        return false
    return true
  }
  