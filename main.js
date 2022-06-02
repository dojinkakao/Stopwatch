'use strict' ;
{
    var time = 0;
    var timeScreen = document.getElementById('Timer');
    var btnStart = document.getElementById('btnStart');
    var btnStop = document.getElementById('btnStop');
    var btnReset = document.getElementById('btnReset');
    var info;

    const start = () => {
        btnStart.disabled = true;
        time++;

        var min = Math.floor(time/100/60);
        var sec = Math.floor(time/100);
        var mSec = time % 100;

        if (min < 10) {
            min = '0' + min;
        }
        if (sec >= 60) {
            sec = sec % 60;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (mSec < 10) {
            mSec = '0' + mSec;
        }

        timeScreen.innerHTML = min + ':' + sec + ':' + mSec;
        info = setTimeout(start, 10);
    }

    const stop = () => {
        clearTimeout(info);

        btnStart.disabled = false;
    }

    const reset = () => {
        clearTimeout(info);

        time = 0;

        timeScreen.innerHTML = '00:00:00';

        btnStart.disabled = false;
    }

    btnStart.addEventListener('click',start,false);
    btnStop.addEventListener('click',stop,false);
    btnReset.addEventListener('click',reset,false);
}