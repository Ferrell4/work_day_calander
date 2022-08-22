$('#currentDay').html(moment().format('LLLL'));
const time1 = 8
const time2 = 9
const time3 = 10
const time4 = 11
const time5 = 12
const time6 = 13
const time7 = 14
const time8 = 15
const time9 = 16
const time10 = 17
// check for current hour
const d = new Date();
let hour = d.getHours();

document.getElementById("demo").innerHTML = hour;