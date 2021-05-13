let SubmitBtn = document.querySelector('#Submitbtn');
let completeMessage = document.querySelector('.completeMessage');
let hour = document.querySelector('#hours')
let minute = document.querySelector('#minutes')
let second = document.querySelector('#seconds')
let count = 0;
let intervalID = null;

document.querySelector('.goBackContainer').addEventListener('click', () => {
    window.location.href = "/index.html";
})

SubmitBtn.addEventListener('click', () => {    
    let secoundCount = parseInt(second.value);
    let mminuteCount = parseInt(minute.value);
    let hourCount = parseInt(hour.value);    

    count = count+1;
    if(count===1)
    {
        ChangeCSS(true);
        intervalID = setInterval(() => {            
            secoundCount = secoundCount + 1
            if (secoundCount >= 0 && secoundCount < 59) {
                second.value = secoundCount;
                minute.value = mminuteCount;
                hour.value = hourCount;
    
            }
            else if (secoundCount === 59) {
                mminuteCount = mminuteCount + 1
                secoundCount = 0;
            }
            else if (mminuteCount === 59) {
                hourCount = hourCount + 1;
                mminuteCount = 0;
            }
    
        }, 1000)
    }
    else{        
        clearInterval(intervalID)        
        ChangeCSS(false);
        count=0;
    }
})
function ClearInput() {
    second.value = 0
    minute.value = 0;
    hour.value = 0;
}
function ChangeCSS(flag) {
    if (flag) {
        SubmitBtn.style.backgroundColor = "#FF5D4C"
        SubmitBtn.innerHTML = "Stop"
        document.querySelector('#ResetBtn').disabled = true;
        document.querySelector('#ResetBtn').style.backgroundColor = 'lightgray';
    }
    else {
        SubmitBtn.style.backgroundColor = "rgb(40, 169, 255)";
        SubmitBtn.innerHTML = "Start"
        document.querySelector('#ResetBtn').disabled = false;
        document.querySelector('#ResetBtn').style.backgroundColor = 'coral';
    }
}

document.querySelector('#ResetBtn').addEventListener('click', ()=>{
    ClearInput();
})