let celsius = -1
let fahrenheit = (celsius * 9/5) + 32
console.log(`Температура: ${celsius}°C = ${fahrenheit}°F`)


let daysInMonth = 30
let hoursInMonth = daysInMonth * 24
let minutesInMonth = hoursInMonth * 60
console.log(`У ${daysInMonth} днях: ${hoursInMonth} годин і ${minutesInMonth} хвилин`)


let health = 120
let energy = 80
health -= 30
energy -= 15
console.log(`Здоров'я: ${health}, Енергія: ${energy}`)


let purchaseAmount = 300
let discount = 10 / 100
let discountedAmount = purchaseAmount * (1 - discount)
console.log(`Сума після знижки: ${discountedAmount}`)


let floatNumber = 8.65
let roundedDown = Math.floor(floatNumber)
console.log(`Округлене вниз число: ${roundedDown}`)


let floatString = "14.57"
let parsedFloat = parseFloat(floatString)
console.log(`Перетворений у десяткове число: ${parsedFloat}`)


let intString = "52"
let parsedInt = parseInt(intString)
console.log(`Перетворений у ціле число: ${parsedInt}`)


let number = 108
let squareRoot = Math.sqrt(number)
console.log(`Квадратний корінь з ${number}: ${squareRoot}`)


let integer = 58
let numberString = "351"
let parsedNumber = parseInt(numberString)
let convertedToString = integer.toString()
console.log(`Перетворений рядок у число: ${parsedNumber}`)
console.log(`Перетворене число у рядок: "${convertedToString}"`)
