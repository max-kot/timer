/*---Stopwatch---*/

const counterHourField = document.querySelector('.counter__hour');
const counterMinField = document.querySelector('.counter__min');
const counterSecField = document.querySelector('.counter__sec');
const pauseBtn = document.querySelector('.stopwatch__pause-btn');
const startBtn = document.querySelector('.stopwatch__start-btn');
const stopBtn = document.querySelector('.stopwatch__stop-btn');
const stopwatchList = document.querySelector('.stopwatch__list')
let counterSec = 0;
let counterMin = 0;
let counterHour = 0;
let stopwatchSecID;
let resultSec;
let resultMin;
let resultHour;

// Start
startBtn.addEventListener('click', function () {
	stopwatchSecID = setInterval(function () {
		counterSec++;
		if (counterSec >= 60) {
			counterSec = 0;
			counterSecField.innerText = '0' + counterSec;
			counterMin++;
			if (counterMin >= 60) {
				counterMin = 0;
				counterMinField.innerText = '0' + counterMin;
				counterHour++;
				if (counterHour >= 60) {
					counterHour = 0;
					counterHourField.innerText = '0' + counterHour;
				} else if (counterHour > 9) {
					counterHourField.innerText = counterHour;
				} else {
					counterHourField.innerText = '0' + counterHour;
				}
			} else if (counterMin > 9) {
				counterMinField.innerText = counterMin;
			} else {
				counterMinField.innerText = '0' + counterMin;
			}
		} else if (counterSec > 9) {
			counterSecField.innerText = counterSec;
		} else {
			counterSecField.innerText = '0' + counterSec;
		}
	}, 1000);
});

// Pause
pauseBtn.addEventListener('click', function () {
	clearInterval(stopwatchSecID);
});

//Stop and Save result

stopBtn.addEventListener('click', function () {
	resultSec = counterSecField.innerText;
	resultMin = counterMinField.innerText;
	resultHour = counterHourField.innerText;
	clearInterval(stopwatchSecID);
	counterSec = 0;
	counterMin = 0;
	counterHour = 0;
	counterSecField.innerText = '0' + counterSec;
	counterMinField.innerText = '0' + counterMin;
	counterHourField.innerText = '0' + counterHour;
	console.log(resultSec, resultMin, resultHour);
	//Output results
	const resultElement = document.createElement('li');
	let result = `${resultHour}:${resultMin}:${resultSec}`;
	resultElement.innerText = result;
	stopwatchList.append(resultElement);
})

