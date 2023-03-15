const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array;
}

const sizes = {
    "tiny": getSizedArray(10),
    "small": getSizedArray(100),
    "medium": getSizedArray(1000),
    "large": getSizedArray(10000),
    "extraLarge": getSizedArray(100000)
};

let table = [['Array Size', 'Append Time', 'Insert Time']];

for (let size in sizes) {
    const arr = sizes[size];

    perf.start();
    doublerAppend(arr);
    const appendResult = perf.stop();

    perf.start();
    doublerInsert(arr);
    const insertResult = perf.stop();

    table.push([size, appendResult.preciseWords, insertResult.preciseWords]);
}

console.table(table);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?


//Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?
//Looking at the timing results, we can see that both functions take longer to execute as the size of the input array increases. Specifically, we see a roughly linear increase in execution time with respect to the size of the input array.

//do some review / research on why the slower function is so slow, and summarize the reasoning for this.
//The slower function in this case is doublerInsert. This function takes longer to execute than doublerAppend because it uses the unshift() method to add each doubled element to the beginning of the new_nums array, rather than using the push() method to add each element to the end of the array. 

//1) Sum Zero
//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
function addToZero(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(-num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }

  //Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
  function hasUniqueChars(word) {
    const charSet = new Set();
    for (const char of word) {
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
    return true;
  }

  //Panagram Sentence
  //A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”, Write a function to check a sentence to see if it is a pangram or not
  function isPangram(sentence) {
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    const sentenceLower = sentence.toLowerCase();
    for (const char of sentenceLower) {
      alphabet.delete(char);
      if (alphabet.size === 0) {
        return true;
      }
    }
    return false;
  }

//Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
function findLongestWord(words) {
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }






