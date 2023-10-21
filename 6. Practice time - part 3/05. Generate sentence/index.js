// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//   console.log(`The ${arr.length} ${desc} are ${arr}`);
// }

// generateSentence("largest country", ["china", "india", "usa"]);

function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  console.log(`The arr.length ${arr.length}`);
  const lastIndex = arr.length - 1;
  console.log(`The last index is ${lastIndex}`);

  for (let i = 0; i < arr.length; i++) {
    console.log(`The value of i is ${i}`);
    if (i === lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ",";
    }
  }
  return baseString;
}

let sentence = generateSentence("largest country", ["china", "india", "usa"]);
console.log(sentence);
