let List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan']
let List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav']
let list1_length = List1.length
let list2_length = List2.length
let result = []
let result_2 = []
let result_3 = []
for (let i = 0; i < list1_length; i++) {
  if (!List2.includes(List1[i])) {
    result.push(List1[i])
  } else if (List2.includes(List1[i])) {
    result_3.push(List1[i])
  }
}
for (let j = 0; j < list2_length; j++) {
  if (!List1.includes(List2[j])) {
    result_2.push(List2[j])
  }
}
console.log(result)
console.log(result_2)
console.log(result_3)
