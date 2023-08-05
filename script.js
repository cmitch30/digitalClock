const showTime = () => {
let date = new Date()
let h = date.getHours()
let min = date.getMinutes()
let secs = date.getSeconds()
let session = 'AM'

if (h === 0) {
    h = 12;
}

if (h > 12) {
    h = h - 12
    session = "PM"
}

h = (h < 10) ? "0" + h: h
min = (min < 10) ? "0" + min: min
secs = (secs < 10) ? "0" + secs: secs

document.getElementById('digitalClock').innerHTML = h + ':' + min + ':' + secs + session;

setTimeout(showTime, 1000)
}

showTime();
  