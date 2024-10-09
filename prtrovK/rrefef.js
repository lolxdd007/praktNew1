let number = prompt("Введите любое число:");
alert(number);


let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let operation = prompt("Введите операцию (+, -, \*, /):");

let result = eval(num1 + operation + num2);
alert("Результат: " + result);




let result1 = prompt("Умножьте число на 2 и прибавьте 7:");
let number1 = (result1 - 7) / 2;
alert("Вы задумали число: " + number1);



let name = prompt("Введите ваше имя:");
let yearOfBirth = prompt("Введите год вашего рождения:");
let age = 2024 - yearOfBirth;
document.write(name + ": " + age);
