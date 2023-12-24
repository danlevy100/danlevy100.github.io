let cMode = '1';
var dateFormat = 'dd.MM.yyyy';
var timeDisplayMethod = 0;

// Page duration elements
var durationElement = document.getElementById("time-duration");
var pageLoadTime = new Date();

// Clock functions
const clockModeGroup = document.getElementById('clock-mode-group');

function updateTime() {
    const time = luxon.DateTime.now();
    const hrs = cMode === '0' ? time.toFormat('h') : time.toFormat('HH');
    const min = time.toFormat('mm');
    const sec = time.toFormat('ss');
    const ind = cMode === '0' ? time.toFormat('a') : '';

    dtdisplay.hourSlot.textContent = hrs;
    dtdisplay.minuteSlot.textContent = min;
    dtdisplay.secondSlot.textContent = sec;
}

function updateDate() {
    const time = luxon.DateTime.now();
    dtdisplay.date.innerHTML = time.toFormat(dateFormat);
}


// Update on load, then start interval
updateTime();
updateDate();

setInterval(function() {
    updateTime();
}, 250);

setInterval(function() {
    updateDate();
}, 5000);
