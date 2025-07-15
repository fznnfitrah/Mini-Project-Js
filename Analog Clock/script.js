const hours = document.querySelector(".hour-hand");
const minutes = document.querySelector('.minute-hand');
const seconds = document.querySelector('.second-hand');

const myClock = setInterval ( () => {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();
    
    seconds.style.transform =  `translateY(-100%) rotate(${second*6}deg)`;
    minutes.style.transform =  `translateY(-100%) rotate(${minute*6}deg)`;
    hours.style.transform =  `translateY(-100%) rotate(${hour*6}deg)`;

}, 1000);
