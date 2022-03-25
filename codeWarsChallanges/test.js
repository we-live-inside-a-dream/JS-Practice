/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    const arr = Array.from(str);
    const resultArray = []
    
    for(i = 0; i < arr.length; i += 2)
      if(i +1 == arr.length) {
        resultArray.push(arr[i] + "_")
      }else {
        resultArray.push(arr[i] + arr[i + 1])
      }
      
      
     return resultArray
    }