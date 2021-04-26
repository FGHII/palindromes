const palindromes = function(string) {
  string = string.toLowerCase();
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  string = string.replace(regex, '');
  console.log(string);
  let palindromeFlag = true;
  let spaceBetween = string.length - 2;
  let stringStart = 0;
  let stringEnd = string.length - 1;
  while (spaceBetween >= 1) {
  if (string.charAt(stringStart) == string.charAt(stringEnd)) {
    console.log("Space between: " + spaceBetween);
    console.log("match");
    console.log(string.charAt(stringStart) + "," + string.charAt(stringEnd));
    stringStart++;
    stringEnd--;
    spaceBetween -= 2;
  } else {
    console.log("not a match");
    console.log(string.charAt(stringStart) + "," + string.charAt(stringEnd));
    spaceBetween = 0;
    palindromeFlag = false;
  }
  console.log(palindromeFlag);
}
}

let string = prompt("Enter a string:")
palindromes(string);


// module.exports = palindromes
