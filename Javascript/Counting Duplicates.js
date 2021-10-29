function duplicateCount(text){
    let counter = 0
    let charTimes = [] //times a char appears in text  
    for (let char of text){
      if(!charTimes[char.toLowerCase()])
        charTimes[char.toLowerCase()] = 1
      else
        charTimes[char.toLowerCase()]++
    }
    for (let key in charTimes)
      if (charTimes[key] > 1)
        counter ++
    return counter
  }
    
  