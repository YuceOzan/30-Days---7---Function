//1. LINEAR EQUATION

function solveEquation(a, b, c, x){
    let y = (-a * x - c) / b;
    return y;
}
console.log("The value for y is : " + solveEquation(10, 5, 7, 60))

//2. QUADRATIC EQUATION

function solveQuadEquation1(a, b, c) {
    let discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2*a);
        return [root];
    } else {
        const realPart = -b / (2*a);
        const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2*a);
        const root1 = `${realPart} + ${imaginaryPart}i`;
        const root2 = `${realPart} - ${imaginaryPart}i`;
        return [root1, root2];
    }
}


console.log(solveQuadEquation1(1, -1, -2));

//3. ARRAY FUNCTION

function printArray(array){
    
    for(let i = 0; i<array.length; i++){
        console.log(array[i]) 
    }
}
let arrayContent = ["apple", "tree", "green", "hornet", "bee"]
printArray(arrayContent)

//4. DATE OBJECT ARRAY

function showDateTime(){
    let currentDate = new Date()
    let day = currentDate.getDay().toString().padStart(2, '0')
    let month = (currentDate.getMonth() +1).toString().padStart(2, '0')
    let year = currentDate.getFullYear()
    let hour = currentDate.getHours().toString().padStart(2, '0')
    let minute = currentDate.getMinutes().toString().padStart(2, '0')
    let time = `${day}/${month}/${year} ${hour}:${minute}`
    console.log(time)
}
showDateTime()

//5. SWAP VALUES

function swapValues(x, y){
    [x,y] = [y,x]
    return `x = ${y} y = ${x}`
}

console.log(swapValues(1,3))

//6. REVERSE ARRAY FUNCTION WITHOUT METHOD

function reverseArray(array){
    let emptyArr =[]
    for(let i = array.length - 1 ; i >= 0 ; i--){
        emptyArr.push(array[i])
        
    }
    return emptyArr   
}

let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]
console.log(reverseArray(pokemons))

//7. CAPITALIZE ARRAY FUNCTION

function capitalizeArray(array){
    let capitalizedArray = []
    for (let i = 0; i < array.length; i++ ){
        let capitalizedElements = array[i].toUpperCase();
        capitalizedArray.push(capitalizedElements)    
    }
    return capitalizedArray
}

console.log(capitalizeArray(pokemons))

//8. ADD ITEM FUNCTION

function addItem(item){
    let array = []
    array.push(item)
    return array
}

console.log(addItem("fire"))

//9. REMOVE ITEM FUNCTION

function removeItem(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    }
    return array;
}

let myArray = ["apple", "banana", "orange", "grape"];
console.log(removeItem(myArray, 1));

//10. SUM OF NUMBERS FUNCTION

function sumOfNumbers(number){
    let sum = 0
    for(let i = 1; i<=number; i++){
        sum += i
    }
    return sum
}
let result = sumOfNumbers(13)
console.log(result)
 

//11. SUM OF ODD NUMBERS

function sumOfOdds(number){
    let sum = 0
    for(let i = 1; i<= number; i+= 2){
        sum += i
    }
    return sum
}
let result1 = sumOfOdds(10)
console.log(result1)

//12. SUM OF EVEN NUMBERS 

function sumOfEvens(number){
    let sum = 0
    for(let i = 0; i<= number; i+= 2){
        sum += i
    }
    return sum
}
let result2 = sumOfEvens(10)
console.log(result2)

//13. EVENS AND ODDS

function evensAndOdds(number) {
    if (number < 0 || !Number.isInteger(number)) {
        return "Please provide a positive integer.";
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return `The number of odds are ${oddCount}.\nThe number of evens are ${evenCount}.`;
}


let result3 = evensAndOdds(100);
console.log(result3);

//14. SUM OF ARGUMENTS FUNCTION

function sumOfArguments(){
    let sum = 0
    for (let i = 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumOfArguments(1,2,3,4,5))

//15. RANDOM USER IP

function randomUserIP(){
    let array = []
    let rando1 = Math.floor(Math.random()*256)
    let rando2 = Math.floor(Math.random()*256)
    let rando3 = Math.floor(Math.random()*256)
    let rando4 = Math.floor(Math.random()*256)
    array.push(`${rando1}.${rando2}.${rando3}.${rando4}`)
    return array
}
console.log(randomUserIP())

//16. RANDOM MAC ADDRESSES

function randomMacAddress() {
    let randomAddress = '0123456789ABCDEF';
    console.log(randomAddress.length)
    let macAddress = '';
    for (let i = 0; i < 6; i++) {
        let pair = '';
        for (let j = 0; j < 2; j++) {
            let randomContent = randomAddress[Math.floor(Math.random() * 16)];
            pair += Math.random() < 0.5 ? randomContent.toUpperCase() : randomContent.toLowerCase();
        }
        macAddress += pair;

        if (i < 5) {
            macAddress += ':';
        }
    }

    return macAddress;
}

let randomMac = randomMacAddress();
console.log("Random MAC Address:", randomMac);

//17. RANDOM HEXADECIMAL NUMBER FUNCTION

function randomHexaNumberGenerator(){
    let result = "#"
    for(let i = 0; i<6; i++){
        result += Math.floor(Math.random()*16).toString(16)
    }
    return result
}

console.log(randomHexaNumberGenerator())

//18. SEVEN CHARACTER ID

function userIdGenerator(){
    let random = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    console.log(random.length)
    let IP = '';
    
    for (let i = 0; i<7 ; i++){
        let randomIP = random[Math.floor(Math.random()*16)]
        IP += Math.random() < 0.5 ? randomIP.toUpperCase() : randomIP.toLowerCase()
    }
       
    return IP
    
}
console.log(userIdGenerator())