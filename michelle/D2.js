// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

let input = function(list1, list2){
  let arr1 = list1.split("->").reverse();
  let arr2 = list2.split("->").reverse();
  let answer = [];

  for (var i = 0; i < arr1.length; i++) {

      let sum = parseInt(arr1[i]) + parseInt(arr2[i]);


      answer.push(sum);
    }

    for (var i = 0; i < answer.length; i++) {
      if (answer[i] >9){
        answer[i] -=10;
        answer[i+1] += 1;
      }
    }
    return(`Output: ${answer.join(' -> ')}`);

};

console.log(input("2->4->3", "5->6->4"))
