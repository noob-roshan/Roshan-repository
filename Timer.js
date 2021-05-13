let SubmitBtn = document.querySelector('#Submitbtn');
let completeMessage = document.querySelector('.completeMessage');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let intervalID = null;

document.querySelector('.goBackContainer').addEventListener('click', () => {
    window.location.href = "/index.html";
})
function ChnageHours() {
    hour = hour - 1;
}

function ChangeMinute() {
    minute = minute - 1;
}

function ResetSeconds() {
    second = 59;
}
function ResetMinutes() {
    minute = minute + 59
}

SubmitBtn.addEventListener('click', () => {
    hour = parseInt(document.querySelector('#hours').value);
    minute = parseInt(document.querySelector('#minutes').value);
    second = parseInt(document.querySelector('#seconds').value);    
count =  count + 1;
    if (hour > 0 || minute > 0 || second > 0) {   
   if(count == 1){
    intervalID =  setInterval(() => {
        if (hour === 0 && minute >= 0) {
            second = second - 1;
            if (second >= 0) {
                changeCss(true);
                document.querySelector('#seconds').value = second;
                document.querySelector('#minutes').value = minute;
                document.querySelector('#hours').value = hour;
            }
            else {
                { ChangeMinute(); }
                ResetSeconds();
            }
        }
        else if (hour !== 0 && minute >= 0) {
            second = second - 1;
            if (second >= 0) {

                changeCss(true);
                document.querySelector('#seconds').value = second;
                document.querySelector('#minutes').value = minute;
                document.querySelector('#hours').value = hour;
            }
            else {
                ChangeMinute();
                ChnageHours();
                ResetMinutes();
                ResetSeconds();
            }
        }
        else {
            changeCss(false)
        }
    }, 1000)
   }
   else{
       clearInterval(intervalID)
       ClearInput();
       SubmitBtn.style.backgroundColor = "rgb(40, 169, 255)";
       SubmitBtn.innerHTML = "Start Timer"
       count=0;
   }
         
    }
    else {
        alert('Please select the time');
    }

})

function ClearInput() {
    document.querySelector('#hours').value = 0;
    document.querySelector('#minutes').value = 0;
    document.querySelector('#seconds').value = 0;
}

function changeCss(flag) {
    if (flag) {
        SubmitBtn.style.backgroundColor = "#FF5D4C"
        SubmitBtn.innerHTML = "Stop"
        completeMessage.style.display = 'none'
    }
    else {
        SubmitBtn.style.backgroundColor = "rgb(40, 169, 255)";
        SubmitBtn.innerHTML = "Start Timer"
        completeMessage.style.display = 'block'
    }

}