function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line


console.log(convertToRoman(14));   // Output: "XIV"
console.log(convertToRoman(798));  // Output: "DCCXCVIII"
console.log(convertToRoman(3999)); // Output: "MMMCMXCIX"
console.log(convertToRoman(44));   // Out
console.log(convertToRoman(2023));




// do not edit below this line
module.exports = convertToRoman
