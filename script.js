// // 1 - filtering the user name with length less than 10

// const usernames = ['mark','carrie98','staceysmom1978', 'q29832128238983', 'carrieg8','MoanaFan']
// const filtered_usernames = usernames.filter((username) => {
//     return username.length<10
// })
// console.log(filtered_usernames);

// // 2- Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const numbers = [3, 6, 8, 2]
// const filtered_numbers = numbers.filter((number) => number>5)
// console.log(filtered_numbers)

// // 3 - Given an array of numbers, return a new array that only includes the even numbers.

// const numbers = [3, 6, 8, 2]
// const filtered_numbers = numbers.filter((number) => number%2 == 0)
// console.log(filtered_numbers)

// // 4 - Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]
// const filtered_strings = strings.filter((string) => string.length <= 5)
// console.log(filtered_strings)

// // 5 - Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

//     const people = [
//         { name: "Angelina Jolie", member: true },
//         { name: "Eric Jones", member: false },
//         { name: "Paris Hilton", member: true },
//         { name: "Kayne West", member: false },
//         { name: "Bob Ziroll", member: true }
//     ]

//     const filtered_people = people.filter((people) => people.member)
//     console.log(filtered_people)

// // 6 - Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

//     const people = [
//         { name: "Angelina Jolie", age: 80 },
//         { name: "Eric Jones", age: 2 },
//         { name: "Paris Hilton", age: 5 },
//         { name: "Kayne West", age: 16 },
//         { name: "Bob Ziroll", age: 100 }
//     ]
//     const filtered_people = people.filter((people) => people.age>18)
//     console.log(filtered_people)

// // 7 - Square the value of every element in the array. Presume that you will only get numbers in the input array.

//     const numbers = [ 1, 2, 3, 4, 5 ]
//     const output = numbers.map((num) => Math.pow(num, 2))
//     console.log(output);

// // 8 - If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

//         const numbers = [ 1, -4, 12, 0, -3, 29, -150]
//         let output = numbers.filter((num) => num > 0).reduce((acc, num) => {
//             return acc = acc + num
//         },0)

//         console.log(output)

// // 9 - Calculate the mean and median values of the number elements from the input array.

//         const numbers = [12, 46, 32, 64]
//         const output = numbers.sort((a,b) => a-b).reduce((acc, curr, index, array) => {
//             acc.mean += curr / array.length
//             if(Math.abs(index+1 - array.length/2) < 1){
//                 acc.median = curr
//             }
//             return acc
//         }, {mean: 0, median: 0})
//         console.log(output)

// // 10 - The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

//         const input = 'George Raymond Richard Martin';
//         const output = input.split(' ').map((name) => name.charAt(0)).join('')
//         console.log(output)

// 11- Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jeniffer",
//     age: 65,
//   },
// ]

// const ages = input.map((person) => person.age)

// const output = [Math.min(...ages), Math.max(...ages),Math.max(...ages) - Math.min(...ages)]

// console.log(output)

//12 - Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

// const input = 'Every developer likes to mix kubernetes and javascript'

// let words = input.split(" ").map((word) => {
//     if(word.length > 4){
//         let first = word.charAt(0)
//         let last = word.charAt(word.length-1)
//         let number = word.length-2
//         return first+number+last
//     }
//     return word
    
// })
// console.log(words)

// 13 - If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// const input = 6

// const arr = new Array(input).fill(null)

// const fact = arr.map((number, index) => index+1).reduce((acc, num) => {
//     return acc*num
// },1)
// console.log(fact)

// 14 - Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g', 'a'],]

//  const output =  input.flat().reduce((acc, curr, index, array) => {
//     if(acc[curr]){
//         acc[curr] += 1
//     }
//     else{
//         acc[curr] = 1
//     }

//     return acc
//  },{})
// console.log(output)