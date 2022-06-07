// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  //Shuffle It
  //   Convert it into a array
  const fullName = str.split(" ");
  // return first and last name by index
  // let shuffle = [fullName[1], fullName[0]];
  let shuffle = fullName.reverse();
  //   then convert it again to string
  return shuffle.join(" ");
}

console.log(nameShuffler("john McClane"));

// better solution
// function nameSuffle(str){
//   return str.split(' ').reverse().join(' ')
// }
