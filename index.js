// Hi, there, I am Mahbub Alam, today I am going to explain how, I have solved the js problems, that was assigned me to do. I will explain 5 problems step by steps. So, let's get started.


// problem one: Write a function that takes a string and returns it reversed
// const input = "hello"
const stringReverse = (input) => {
    const output = input.split("").reverse().join("")
    console.log(output)
}
stringReverse("Hello")

// 1.So, the first challenge was to create a js function, that will take a string as input and returns by reversing the input. I have created a (stringReverse) function which take any string input and provide the expected output. At first, I have used js split method(which turns the input into an array). Then, the reverse method (reverse the element of the array) and lastly I have used the join method which turns the array back to a string. This is how the function works. 

// Problem 2: Count Vowels in a String

const vowelsOfString = (input) => {
    const vowels = "aeiouAEIOU"
    let count = 0;
    for(let char of input) {
        if(vowels.includes(char)){
            count++
        }
    }
    console.log(count)
    return count
}

vowelsOfString("mahabub Alam")


// Problem 3: Check for Palindrome

function checkPalindrome (input) {
    const reversedString = input.split("").reverse().join("")
    const palindrome = input === reversedString
    console.log(palindrome)
    return palindrome
}

checkPalindrome("level")


// Problem 4: Find the Maximum Number

function maxNumber (input) {
    let maxNum = 0;
    for(let num of input) {
        if(num> maxNum) {
            maxNum = num
        }
    }
    console.log(maxNum)
    return maxNum
}
maxNumber([100, 2 , 3, 21])

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(input) {
    const newArray = []
    for(let i of input) {
        if(!newArray.includes(i)) {
            newArray.push(i)
        }
    }
    console.log(newArray)
    return newArray
}

removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5,])


// Problem 6: Sum of All Numbers in an Array
function sum(input){
    let sum = 0;
    for(let i of input){
        sum +=i;
    }
    console.log(sum)
    return sum;
}
sum([1, 2, 3, 4, 5, 15])

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(input) {
    const evenNumbers = []
    input.map(i => {
        if(i % 2 === 0){
            evenNumbers.push(i)
        }
    });
    console.log(evenNumbers)
    return evenNumbers
}
findEvenNumbers([1, 2, 3, 4, 5])

// Problem 8: Capitalize First Letter of Each Word
function wordsFirstCharCapitalization (input) {
    // const output 
    const output = input.split(" ").map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(" ")

    console.log(output)
    return output   
}
wordsFirstCharCapitalization("hello world bangladesh")

// Problem 9: Find the Factorial of a Number
function factorialNumber (input) {
    let result = 1
    for(let i = input; i >=1; i--) {
      result = result * i
    }
    console.log(result)
    return result
}

factorialNumber(4)

// Problem 10: PingPong Challenge
function pingPong () {
    const pingPontNumbers = []
    for(let i =1; i <= 20; i++) {
        if(i %3 === 0) {
            pingPontNumbers.push("ping")
        }
        else if (i %5 === 0) {
            pingPontNumbers.push("pong")
        }
        else {
            pingPontNumbers.push(i)
        }
    }
    console.log(pingPontNumbers)
    return pingPontNumbers
}

pingPong()