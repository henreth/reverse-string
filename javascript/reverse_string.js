function reverseString(str) {
  function reverseString(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){newStr=str[i]+newStr;
    }
    return newStr
}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
