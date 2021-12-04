// Usually when you buy something or sign up for a new account, you’re asked for your credit card number, phone number, or answer to your most secret question. However, since someone could look over your shoulder, you don’t want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters of a given string into ‘#’.

// Examples

// maskify("4556364607935616") --> "############5616"

// maskify("Skippy") --> "##ippy"

// maskify("1") --> "1"

// maskify("") --> ""


function maskify(str) {
    let lastFour = str.slice(-4)

    for (let i = 0; i < str.length; i++) {
        str += str.replace(str[i], '#')
    }

    return str + lastFour
}

// let str = 'skippy'
// let lastFour = str.slice(-4)
// console.log(lastFour)

// console.log(maskify("4556364607935616"))


/////////////////////////////////////////////////////////////////////
// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// Decimal

// Roman

// 1

// I

// 5

// V

// 10

// X

// 50

// L

// 100

// C

// 500

// D

// 1,000

// M

// For example:

// toRoman(5)
// 'V'

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:

// toRoman(99)
// 'LXXXXVIIII'



//////////////////////////////////////////////////////////////
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to write a function that returns an object which includes the count of food options selected by the developers on the meetup sign-up form.

// For example, given the following input array:

var list1 = [
{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian' },
];
// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

function developerData(array) {
     let results = {
         vegetarian: 0,
         standard: 0,
         vegan: 0,
     }
     
    for (let i = 0; i < array.length; i++) {
        let meal = array[i].meal
        if (meal = 'standard') {
            results.standard++
        } else if (meal = 'vegetarian') {
            results.vegetarian++
        } else {
            results.vegan++
        }
    }

    return results
}

console.log(developerData(list1))

////////////////////////////////////////////////////
// You might know some pretty large perfect squares. But what about the NEXT one?

// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// For example:

// perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

// perfectSquare(289) // should return 324 (17x17=289 18x18=324)

// perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)


//////////////////////////////////////////////////////////
// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.