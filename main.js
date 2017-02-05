var time = document.createElement('p');
var sec = 0;
var min = 0;
var setTime = setInterval(timer, 1000)

function timer(){
  sec++;
  if (sec >= 60){
    min++;
    sec=0;
  }
  time.textContent = min+ ' '+ sec;
}
