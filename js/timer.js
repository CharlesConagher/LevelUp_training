document.addEventListener('DOMContentLoaded', ()=> {
    let minutesVal = document.querySelector('.timer-minutes .timer__content-val').innerHTML
    let secondsVal = document.querySelector('.timer-seconds .timer__content-val').innerHTML

    const secondsCount = () => {
        if (secondsVal !== 0) {
            secondsVal--;
            document.querySelector('.timer-seconds .timer__content-val').innerHTML = secondsVal.toString();
        } else {
            secondsVal = 60;
            minutesVal--;
            document.querySelector('.timer-minutes .timer__content-val').innerHTML = minutesVal.toString();
        }
    }
    setInterval(secondsCount, 1000)
});
