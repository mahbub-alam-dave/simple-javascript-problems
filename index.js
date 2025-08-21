// problem one: Write a function that takes a string and returns it reversed


const stringReverse = (input) => {
    const output = input.split("").reverse().join("")
    console.log(output)
    return output
}

// stringReverse("Hello")











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

// vowelsOfString("mahbub alam")







// Problem 3: Check for Palindrome




function checkPalindrome (input) {
    const reversedString = input.split("").reverse().join("")
    const palindrome = input === reversedString
    console.log(palindrome)
    return palindrome
}


// checkPalindrome("Hello")











// Problem 4: Find the Maximum Number



function maxNumber (input) {
    let maxNum = input[0];
    for(let num of input) {
        if(num> maxNum) {
            maxNum = num
        }
    }
    console.log(maxNum)
    return maxNum
}

maxNumber([1,2 ,3])






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



// Problem 6: Sum of All Numbers in an Array

function sum(input){
    let sum = 0;
    for(let i of input){
        sum +=i;
    }
    console.log(sum)
    return sum;
}




// Problem 4: Find Even Numbers in an Array



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


// findEvenNumbers([1, 2, 3, 4, 5])










// Problem 5: Capitalize First Letter of Each Word



function wordsFirstCharCapitalization (input) {
    // const output 
    const output = input.split(" ").map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(" ")

    console.log(output)
    return output   
}

wordsFirstCharCapitalization("hello world")














// Problem 9: Find the Factorial of a Number


function factorialNumber (input) {
    let result = 1
    for(let i = input; i >=1; i--) {
      result = result * i
    }
    console.log(result)
    return result
}




// Problem 10: PingPong Challenge


function pingPong () {
    const pingPongNumbers = []
    for(let i =1; i <= 20; i++) {
        if (i %5 === 0 && i %3 === 0) {
            pingPongNumbers.push("pingPong")
        }
        else if(i %3 === 0) {
            pingPongNumbers.push("ping")
        }
        else if (i %5 === 0) {
            pingPongNumbers.push("pong")
        }
        else {
            pingPongNumbers.push(i)
        }
    }
    console.log(pingPongNumbers)
    return pingPongNumbers
}

pingPong()





// the first problem was to write a function which takes a string as a parameter and returns  the string by reversing the order of the input. So I have created a function which name is stringReverse, inside the function I have used the split reverse and join method. the split method makes an array of the input, the reverse method reverse the order of the array and the join method turns the array back to a string. Finally the function returns the string by reversing its order.

// Now, the last and fifth problem was to write a function which can take a string of words as a function parameter and return the string by capitalizing the first charater of every words of the string. at first I have used the split method which turns the string to an array of words. Then I have used the map method that runs over every words of the array and Inside the map I have used the chartAt(0) and toUpperCase method to capitalize the first character of every word of the array and then added the rest of the word using slice(1) method. Lastly I have used the join(" ") method to turn  the array back to a string again and return the string

// The fourth problem was to write a function which can take an array of numbers as a function parameter and return a new array of even numbers among the inputted array. Similarly, I have created a function and the name of the function is findEvenNumbers. The function takes an array of numbers as input. Inside in the function, Initially,I have set a variable with a value of empty array. Then I loop over the input array using javascript map method which checks every element of the input array one by one whether the element is divisible by two or not. If the element is divisible by 2 then the element will be added to the new array that has been created to store the even numbers. Finally the function returns the new array of even numbers.

// then the third problem was to write a function which can check the function parameter whether it is a palindrome or not. If the input is a palindrome, the function return true otherwise it will return false. So, I have created a function which name is checkPalindrome. inside the function I have set a variable which keeps the reversed value of the input string. Here I used the same methodologies as like as I did in the first problem. Then I check the reversedValue with the input whether they both are equal or not and stored the bollean value to a variable. Lastly the function returns the bollean value whether it is a palindrome or not.

// The second problem was to write a function that also take a string as a parameter and count how many vowels are in the string. So, I have created a function which name is vowelOfString, Inside the function I have declared all the vowels in a variable, I have also, declared a count variable and initially, the value of the variable will be 0. Then I have used the for of  loop method which runs over the input for its every character one by one and  checks whether the charter is a vowel or not. If it is vowel then the count value will increase 1. if the character is not a vowel then it does nothing and continuing the checking and finally the function returns the total vowels count of the string.