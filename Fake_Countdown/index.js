let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let countdown = null;

start.addEventListener('click',()=>{
    if(hour.value == 0 && min.value == 0 && sec.value == 0) return ;
    function startInterval(){
        start.style.display="none";
        stop.style.display="initial";
        countdown = setInterval(()=>{
            timer();
        },1000)
    }
    startInterval();
});
function stopInterval(state){
start.innerHTML = state === "pause" ? "contnue":"start";
stop.style.display="none";
start.style.display="initial";
clearInterval(countdown);
}

function timer() 
{
    if(hour.value == 0 && min.value ==0 && sec.value == 0){
        hour.value ="";
        min.value="";
        sec.value="";
        stopInterval();
    }
    if(sec.value >60){
        min.value++;
        sec.value = parseInt(sec.value)-60;

    }
    else if(min.value > 60){
        hour.value++;
        min.value = parseInt(min.value)-60;
    }
    else if(sec.value !=0){
        sec.value = `${sec.value <= 10 ?"0":""}${sec.value-1}`;
    }
    else if(min.value != 0 && sec.value == 0){
        sec.value=59;
        min.value = `${min.value <=10 ?"0":""}${min.value-1}`;
    }
    else if(hour.value != 0 && min.value == 0){
        min.value=60;
        hour.value=`${hour.value <=10 ?"0":""}${hour.value-1}`;
    }
}
stop.addEventListener('click',()=>{
    stopInterval('pause');
})
reset.addEventListener('click',()=>{
    hour.value="";
    min.value="";
    sec.value="";
    stopInterval();
})