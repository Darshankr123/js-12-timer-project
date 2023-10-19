const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");

const tempDate = new Date();

const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

/* const futureDate = new Date(2023, 8, 5, 9, 35, 0); */

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

console.log(month);

if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

giveaway.innerHTML = `giveaway ends on ${weekday}, ${date} ${year} ${hours} ${minutes} am`;

/* future time in miliseconds */

const futureTime = futureDate.getTime();

function remainingTime() {
  const curTime = new Date().getTime();

  const t = futureTime - curTime;

  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const onemin = 60 * 1000;
  const onesec = 1000;

  let remDay = Math.floor(t / oneday);
  let remhour = Math.floor((t % oneday) / onehour);
  let remmin = Math.floor((t % onehour) / onemin);
  let remsec = Math.floor((t % onemin) / onesec);

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  const values = [remDay, remhour, remmin, remsec];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this give away is expired</h4>`;
  }
}

const countdown = setInterval(remainingTime, 1000);

remainingTime();
