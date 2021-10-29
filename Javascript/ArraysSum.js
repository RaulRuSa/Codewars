
function arrayPlusArray(arr1, arr2) {
    let result = 0
    arr1 = arr1.concat(arr2)
    console.log(arr1)
    for (let number of arr1)
      result += number
    return result
  }
