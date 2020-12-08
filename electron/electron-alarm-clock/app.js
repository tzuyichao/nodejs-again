const moment = require('moment')

const elNow = document.querySelector('.now-time')
const elAlarm = document.querySelector('.alarm-time')
elAlarm.addEventListener('change', onAlarmTextChange)

let time = moment()
let nowTime
let alarmTime

const now = moment(time).format('HH:mm:ss')
nowTime = now
elNow.innerText = now

const alarm = moment(time).add(5, 'second').format('HH:mm:ss')
alarmTime = alarm
elAlarm.value = now

timer()

function timer() {
    time = moment().format('HH:mm:ss')
    nowTime = time
    elNow.innerText = time

    setTimeout(() => {
        timer()
    }, 1000)
}

function onAlarmTextChange(event) {
    alarmTime = event.target.value
}