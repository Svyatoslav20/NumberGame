console.log("Загадали число от 1 до 10. Попробуй угадать его!");
let secretNum = Math.floor(Math.random() * 10) +1;
// console.log(secretNum)
let attempt = 3;
while(attempt > 0) {
    let userNum = Number(prompt("Введите код"));
    if(userNum < secretNum) {
        console.log("Загаданное число больше..")
        attempt = attempt - 1;
        console.log("Осталось еще чуть чуть! Всего-лишь " + attempt + " попытки! У вас получиться")
    }
    else if(userNum === secretNum) {
        console.log("Вы угадали! Сэкономили целых " + attempt + " попытки...");
        break;
    }
    else {
        console.log("Загаданное число меньше..")
        attempt = attempt - 1;
        console.log("Осталось еще чуть чуть! Всего-лишь " + attempt + " попытки! У вас получиться")
    }
}
if(attempt === 0) {
    console.log("Увы, но вы проиграли...")
} 