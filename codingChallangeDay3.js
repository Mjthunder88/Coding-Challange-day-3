function wordCheck (word) {
  
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1;j < word.length; j++)
      if (word[i] === word[j]) {
        return false
      } else {
        continue
      }
    }
    return true 
  }
  
  // console.log(wordCheck('word'))
  // console.log(wordCheck('cool'))
  // The for loops will check the current one and the one ahead of it to see if they're equal. If they're then it returns false. If it is not equal then it returns true, once the for loop is finished. 
  
  //------------------------------------------
  
  function check (str) {
    let mySet = new set()
    for (let i = 0;i < str.length; i++)
      if (!mySet.has(i)) ) {
        mySet.add(str[i])
        
      }
      
  }
  