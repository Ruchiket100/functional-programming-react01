// Import stylesheets
import './style.css';

// dummy object
let Ruchiket = {
  data: {
    name: {
      firstName: 'Ruchiket',
      lastName: 'Borse',
    },
  },
};

// search function
function deepSearch(searchIn, object = {}) {
  // .split convert string into array by replaysing .
  const [first, ...remaining] = searchIn.split('.');
  return remaining.length > 0
    ? deepSearch(remaining.join('.'), object[first])
    : object[first];
}

let searchIn = 'data.name.firstName';
let serachResult = deepSearch(searchIn, Ruchiket);

// ---------------------- clock
let clockDiv = document.querySelector('.clock-div');
// call setClockTime
setInterval(setClockTime, 1000);

// setClockTime
function setClockTime() {
  clockDiv.innerHTML = '';
  let time = getClockTime();
  let h1 = document.createElement('h1');
  h1.innerText = time;
  clockDiv.append(h1);
}

// getClockTime
function getClockTime() {
  let time = '';
  let date = new Date();

  // set time object
  time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: 'AM',
  };

  // change ampm and and make 12 hrs clock
  if (time.hours === 12) {
    time.ampm = 'PM';
  } else if (time.hours > 12) {
    time.ampm = 'PM';
    time.hours -= 12;
  }

  // add 0 if no is less than 10
  //   hr
  if (time.hours < 10) {
    time.hours = '0' + time.hours;
  }
  //   min
  if (time.minutes < 10) {
    time.minutes = '0' + time.minutes;
  }
  //   sec
  if (time.seconds < 10) {
    time.seconds = '0' + time.seconds;
  }

  return `${time.hours} : ${time.minutes} : ${time.seconds}`;
}
