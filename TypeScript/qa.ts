function numberToDigitsArray(number: number): number[] {
    // Convert the number to a string to easily access its digits
    const numberString: string = Math.abs(number).toString();
  
    // Use the spread operator to convert the string into an array of digits
    const digitsArray: number[] = [...numberString].map((digit) => parseInt(digit, 10));
  
    return digitsArray;
  }
  
  // Example usage:
  const number = 1234590;
  const digits = numberToDigitsArray(number);
  console.log(digits); // Output: [1, 2, 3, 4, 5]
  