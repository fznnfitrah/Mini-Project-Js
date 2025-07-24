const daysOfWeek = ["Minggu", 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const monthOfYear = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const date = document.querySelector('#date');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');


const now = new Date();

let dates = now.getDate();
let dayName = daysOfWeek[now.getDay()];
let monthName = monthOfYear[now.getMonth()];
let years = now.getFullYear();


date.textContent = dates;
day.textContent = dayName;
month.textContent = monthName;
year.textContent = years;





