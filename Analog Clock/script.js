const hours = document.querySelector(".hour-hand");
const minutes = document.querySelector('.minute-hand');
const seconds = document.querySelector('.second-hand');

const myClock = setInterval ( () => {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    let secondDegree = second * 6
    seconds.style.transform =  `translateY(-100%) rotate(${secondDegree}deg)`;

    let minuteDegree = (minute * 6) + (second * 0.1)
    minutes.style.transform =  `translateY(-100%) rotate(${minuteDegree}deg)`;


    let adjustHour = hour % 12;
    let hourDegree = (adjustHour * 30) + (minute * 0.5) + (second * (0.5/60));
    hours.style.transform =  `translateY(-100%) rotate(${hourDegree}deg)`;


}, 1000);
