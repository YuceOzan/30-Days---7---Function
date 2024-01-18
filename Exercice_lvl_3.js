//1. MODIFY ID FUNCTION

/*
function userIdGeneratedByUser() {
    const numCharacters = parseInt(prompt("Enter the number of characters for each ID:"));
    const numIds = parseInt(prompt("Enter the number of IDs to generate:"));
  
    const generateRandomId = (length) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomId = '';
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
      }
  
      return randomId;
    };
  
    for (let i = 0; i < numIds; i++) {
      console.log(generateRandomId(numCharacters));
    }
  }
  
  userIdGeneratedByUser();
  */
  //2. RANDOM RGB COLORS

  function rgbColorGenerator(){
    let rgb1 = Math.floor(Math.random()*256);
    let rgb2 = Math.floor(Math.random()*256);
    let rgb3 = Math.floor(Math.random()*256);

    let randomColor = `rgb(${rgb1},${rgb2},${rgb3})`;
    return randomColor
  }

  console.log(rgbColorGenerator())

  //3. ARRAY OF HEX COLORS

  function arrayOfHexaColors(){
    let array  = []
    let result = "#"
    for(let i = 0; i<6; i++){
        result += Math.floor(Math.random()*16).toString(16)
        
    }
    array.push(result)
    return array
  }

  console.log(arrayOfHexaColors())

  //4. ARRAY OF RGB COLORS

  function arrayOfRgbColors(){
    let array = []
    let rgb1 = Math.floor(Math.random()*256);
    let rgb2 = Math.floor(Math.random()*256);
    let rgb3 = Math.floor(Math.random()*256);
    array.push(rgb1, rgb2, rgb3)
    return array
  }

  console.log(arrayOfRgbColors())

  //5. CONVERT RGB TO HEX COLORS

  function convertRgbToHex(r, g, b) {
    
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  

    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  
    return '#' + hex;
  }
  
  const red = 255;
  const green = 0;
  const blue = 128;
  
  const hexColor = convertRgbToHex(red, green, blue);
  console.log(hexColor);

  
//6. CONVERT HEXA TO RGB COLORS

  function convertHexaToRgb(hex) {
  hex = hex.replace(/^#/, '');

  const intValue = parseInt(hex, 16);

  const red = (intValue >> 16) & 255;
  const green = (intValue >> 8) & 255;
  const blue = intValue & 255;

  return { red, green, blue };
}

const hexColor2 = '#ff0080';
const rgbValues = convertHexaToRgb(hexColor2);
console.log(rgbValues); 

//7. GENERATE COLORS 

function generateColors(type, numColors) {
    const generateHexColor = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return `#${randomColor}`;
    };
  
    const generateRgbColor = () => {
      const randomComponent = () => Math.floor(Math.random() * 256);
      return `rgb(${randomComponent()}, ${randomComponent()}, ${randomComponent()})`;
    };
  
    const generateColor = (generateFunction) => {
      if (numColors === 1) {
        return generateFunction();
      } else {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
          colors.push(generateFunction());
        }
        return colors;
      }
    };
  
    if (type === 'hexa') {
      return generateColor(generateHexColor);
    } else if (type === 'rgb') {
      return generateColor(generateRgbColor);
    } else {
      return 'Invalid color type. Use "hexa" or "rgb".';
    }
  }
  
  console.log(generateColors('hexa', 3)); 
  console.log(generateColors('hexa', 1));
  console.log(generateColors('rgb', 3));  
  console.log(generateColors('rgb', 1)); 
  
  //8. SHUFFLE ARRAY

  function shuffleArray(array) {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const shuffledResult = shuffleArray(originalArray);
  console.log(shuffledResult);
  
  //9. FACTORIRAL NUMBER

  function factorial(number) {
    if (number < 0) {
      return 'Undefined (Factorial is not defined for negative numbers)';
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  const num = 5;
  const result = factorial(num);
  console.log(`The factorial of ${num} is: ${result}`);
  
  //10. SUM FUNCTION

  function sum(){
    let result = 0;
    for(let i = 0; i<arguments.length; i++){
        result += arguments[i]
    }
    return result
  }

  console.log(sum(1,2,3,4,5))

  //11. EMPTY FUNCTION 
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
  
    if (typeof value === 'string' || Array.isArray(value)) {
      return value.length === 0;
    }
  
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
  
    return false;
  }
  
  const emptyString = '';
  const nonEmptyString = 'Hello, World!';
  const emptyArray = [];
  const nonEmptyArray = [1, 2, 3];
  const emptyObject = {};
  const nonEmptyObject = { key: 'value' };
  
  console.log(isEmpty(emptyString));      // true
  console.log(isEmpty(nonEmptyString));   // false
  console.log(isEmpty(emptyArray));        // true
  console.log(isEmpty(nonEmptyArray));     // false
  console.log(isEmpty(emptyObject));       // true
  console.log(isEmpty(nonEmptyObject));    // false
  console.log(isEmpty(null));              // true
  console.log(isEmpty(undefined));         // true
  console.log(isEmpty(42));                // false

  //12. SUM OF ARRAY ITEMS


  function sumOfArrayItems(arr) {
    if (!Array.isArray(arr)) {
      return 'Input is not an array.';
    }
  
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return 'Array contains non-numeric items.';
      }
  
      sum += arr[i];
    }
  
    return sum;
  }
  
  const numericArray = [1, 2, 3, 4, 5];
  const mixedArray = [1, 'two', 3, 4, 5];
  
  console.log(sumOfArrayItems(numericArray)); 
  console.log(sumOfArrayItems(mixedArray));   


  //13. ARRAY AVERAGE FUNCTION
  
  function average(arr) {
    if (!Array.isArray(arr)) return 'Input is not an array.';
    
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') return 'Array contains non-numeric items.';
      sum += arr[i];
    }
  
    if (arr.length === 0) return 'Array is empty.';
    
    return sum / arr.length;
  }
 
let arr1 = [1,2,3,4,5]
let arr2 =[6,7,8,9, "ten"]
 console.log(average(arr1))
 console.log(average(arr2))

 //14. MODIFY ARRAYS FUNCTION

 function modifyArray(arr) {
    if (arr.length < 5) return 'Not Found';
  
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
  
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
  
  
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
 
  //15. CHECK IF A NUMBER IS PRIME FUNCTION

  function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); 
console.log(isPrime(14));  


//16. CHECH IF ARRAY ELEMENTS ARE UNIQUE FUNCTION

function areAllUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true; 
  }
  
  console.log(areAllUnique([1, 2, 3, 4, 5]));
  console.log(areAllUnique([1, 2, 2, 3, 4]));  
  
  //17. CHECH IF ALL ITEMS IN AN ARRAY ARE THE SAME TYPE FUNCTION

  function areAllSameType(arr) {
    if (arr.length <= 1) {
      return true;
    }
    const firstType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== firstType) {
        return false;
      }
    }
    return true;
  }

  console.log(areAllSameType([1, 2, 3, 4, 5]));
  console.log(areAllSameType([1, 'two', 3, 4, 5]));
  
  //18. CHECK IF VARIABLE IS VALID OR INVALIDE

  function isValidVariable(variableName) {
    if (!/^[a-zA-Z$_]/.test(variableName)) {
      return false;
    }
    if (!/^[a-zA-Z0-9$_]*$/.test(variableName)) {
      return false;
    }
    return true;
  }

  console.log(isValidVariable('validVariable'));
  console.log(isValidVariable('123invalidVar'));

  //19. SEVEN UNIQUE RANDOM NUMBER ARRAY

  function sevenRandomNumbers() {
    const uniqueNumbers = [];
    
    while (uniqueNumbers.length < 7) {
      const randomNumber = Math.floor(Math.random() * 10);
      
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    
    return uniqueNumbers;
  }
  
  const result1 = sevenRandomNumbers();
  console.log(result1);
  
  //20. REVERSE COUNTRY FUNCTION

  function reverseCountries(array){
    let emptyArr =[]
    for(let i = array.length - 1 ; i >= 0 ; i--){
        emptyArr.push(array[i])
        
    }
    return emptyArr  
  }

  let countryArr = ["France", "Japon", "China", "Spain", "England"]

  console.log(reverseCountries(countryArr))