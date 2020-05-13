// JavaScript Review


function myFunction(){
    console.log("This is my function")
}

// myFunction();

// Strings

// split, join

var sentence = "This is a sentence that has multiple words";
var role = "Instructor";
sentence.length

// console.log(name, "This is what is in my name variable");

// console.log(role.length)

// console.log(sentence.split(' '))
// console.log(sentence.length)

// console.log(sentence.split(' ').length)

let sent_arr = sentence.split(' ');
sent_arr.length
// console.log(sent_arr)

// console.log(sent_arr.join(' '));


// for(let i = 0; i<sentence.split(' ').length; i++){
//     console.log(sentence.split(' ')[i]);
// }





// Arrays

// push, pop, shift, unshift

let student_arr = ['mitchell', 'danny', 'john', 'pamela', 'kelly', 'nico'];

// console.log(student_arr[3].length);

student_arr.push("steve");

student_arr.push('asdf');

// console.log(student_arr);

student_arr.pop();
student_arr.splice(2, 3);

// console.log(student_arr);


// Objects

var truck = {
    'make': 'Toyota',
    'model': 'Tacoma',
    'color': 'black',
    'year': 2010
}

// console.log(truck['color']);

truck['color'] = 'red';

// console.log(truck['color']);





// Loops and Conditionals

// for key in object
// for(key in truck){
//     console.log(key, truck[key])
// }

// for(student in student_arr){
//     console.log(student_arr[student])
// }

for(let i = 0; i<student_arr.length; i++){
    console.log(student_arr[i])
}


let j = 10
while(j > 0){
    console.log(j);
    j--;
}

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// create function take in arr, max, min
// for loop
    // if arr[i] > max or arr[i] < min
        // while(arr[i+1])
            // do a temp swap
        // arr.pop()
    // return arr

function filter(arr, max, min){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max || arr[i]<min){
            console.log(arr, "This is my array", arr[i], "This value was out of bounds");
            var j = i;
            while(arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                j++;
            }
            arr.pop();
            i--;
        }
    }
    return arr
}

console.log(filter([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 12, 5))

// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

// declare function, given a string str
// declare count
// loop through the string
    // test if character is a open paren
        // increase count
    // test if character close paren
        // decrease count
    // if ever count is negative
        // return false

function parensValid(str){
    var count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] == '('){
            count ++;
        }
        else if(str[i] == ')'){
            count --;
        }
        if(count < 0){
            return false
        }
    }
    if(count == 0){
        return true
    }
    return false
}

console.log(parensValid("N(0)t )0(k"))





// Zip Arrays into Map
// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

// write a function given two arrays
    // create an empty object
    // test for length: if arr1 length > arr2 length
        // iteration = arr2 length
    // else
        // iteration = arr1 length
    // for loop: loop up to iteration
        // object[arr1[i]] = arr2[i];
    // return object


function zip(arrOne, arrTwo){
    zipped = {};
    if(arrOne.length >= arrTwo.length){
        var iteration = arrTwo.length;
    } else {
        var iteration = arrOne.length;
    }
    for(let i = 0; i < iteration; i++){
        zipped[arrOne[i]] = arrTwo[i];
        console.log(zipped)
    }
    return zipped
}

// console.log(zip(["abc", 3, "yo", 7, 'z'], [42, "wassup", true, 'anything', 'else']))

