//1. PRINT FULL NAME

function identity(){
    let firstName = "Ozan"
    let lastName = "Yuce"
    let space = ' '
    let age = 28
    let city = "Izmir"
    let married = true
    let fullPerson = firstName + space + lastName + space + age + space + city + space + `married : ${married}`  
    console.log(fullPerson)
}

identity()

//2. RETURN FULL NAME

function printfullname(firstName, lastName){
    let fullName = firstName+ lastName
    return fullName
}
console.log(printfullname("Ozan", " Yuce"))

//3. RETURN SUM OF TWO NUMBERS

function sumTwoNumbers(number1, number2){
    let sum = number1 + number2
    console.log(sum)
}
sumTwoNumbers(10,10)

//4. AREA OF A RECTANGLE

function area(length, width){
    let areaOfRectangle = length * width
    console.log(areaOfRectangle)
}
area(10,20)

//5. PERIMETER OF A RECTANGLE

function perimeter(width, length){
    let perimeterOfRectangle = 2*(width + length)
    console.log(perimeterOfRectangle)
}

perimeter(5,5)

//6. VOLUME OF A RECTANGULAR PRISM

function volumeOfRectPrism(length, height, width){
   let perimeter = length * height * width
   console.log(perimeter) 
}

volumeOfRectPrism(10,10,10)

//7. AREA OF A CIRCLE

function areaOfCircle(r){
    let area = Math.PI * r * r
    console.log(area)
}

areaOfCircle(10)

//8. CIRCUMFERENCE OF A CIRCLE

function circumOfCircle(r){
    let cir = 2 * Math.PI * r
    console.log(cir)
}

circumOfCircle(10)

//9. DENSITY OF A SUBSTANCE

function densityOfSubtance(mass, volume){
    let density = mass / volume
    console.log(density)
}
densityOfSubtance(100,10)

//10. SPEED OF MOVING OBJECT

function speed(distance, time){
    let totalSpeed = distance / time
    return totalSpeed
}

console.log(speed(100,60))

//11. WEIGTH OF A SUBSTANCE (ON EARTH)

function weightOfSubtance(mass){
    let gravity = 9.807 
    let weight = mass * gravity
    return weight
}

console.log(weightOfSubtance(10))

//12. TEMPERATURE ON oC to oF

function convertCelsiusToFahrenheit(oC){
    let fahrenheit = (oC * 9/5) + 32
    return fahrenheit
}

console.log(convertCelsiusToFahrenheit(15))

//13. BODY MASS INDEX

function bodyMassIndex(weight, height){
    let bmi = weight/(height*height)
    return bmi
}
console.log(bodyMassIndex(78, 1.72))

//14. SEASON FUNCTION

function checkSeason(month){
    if ((month === "december") || (month === "january") || (month === "february") ){
        return "The season is Winter"
    } else if((month === "march") || (month === "april") || (month === "mai")){
        return "The season is Spring"
    } else if((month === "june") || (month === "july") || (month === "august")){
        return "The season is Summer"
    } else if((month === "september") || (month === "october") || (month === "november")){
        return "The season is Fall"
    } else {
        return "Make sure to write the month of the year in lower case (example : january)"
    }
}

console.log(checkSeason("october"))

//15. RETURN THE MAXIMUM VALUE

function findMax(a, b, c){
    let max = a
    if((b>a) && (b>c)){
        max = b
    }
    if((c>a) && (c>b)){
        max = c
    }
    return max
}

console.log(findMax(15,71,70))

