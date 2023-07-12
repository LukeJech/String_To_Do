// Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

const removeBlanks = string => {
    let new_string = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            new_string += string[i]
        }
    }
    return new_string
}

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

const getDigits = string => {
    let number_string = ''
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            number_string += string[i]
        }
    }
    return Number(number_string) 
}

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680



// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

const acronym = string => {
    let answer = ''
    let word_array = string.split(" ")
    word_array.forEach(word => {
        if(word[0]) {

            answer += word[0].toUpperCase()
        }
    });
    return answer
}


// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".



// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

const countNonSpaces = string => {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            count++
        }
    }
    return count
}

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11



// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

const removeShorterStrings = (array, value) => {
    new_array = []
    array.forEach(word => {
        if(word.length >= value){
            new_array.push(word)
        }
    });
    return new_array
}

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']