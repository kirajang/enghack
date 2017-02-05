// declare elements
var button = document.createElement('button');
var time = document.createElement('p');
//declare timer variables
var sec = 0;
var min = 0;
var setTime;
var userIn = window.prompt("give input", 1);

button.textContent='start timer';
time.style.fontSize = "xx-large";

document.body.appendChild(button);
document.body.appendChild(time);

for (i = 1; i < userIn; i++){
  sec=0;
  min=0;
  button.addEventListener('click', buttonFn);
  
  // timer25(): timer for 25 minutes
  function timer25(){
    sec++;
    if (sec >= 60){
      min++;
      sec=0;
    }
    if (sec<10){
      time.textContent = min+ ':0'+ sec;
    } else {
      time.textContent = min+ ':'+ sec;
    }
    if (min>=25) {
      clearInterval(setTime);
      sec = 0;
      min = 0;

      var dog = document.createElement('img');
      dog.src = "dogtest.jpg";
      dog.width = 500;
      dog.height = 270;
      document.body.appendChild(dog);
      setTime = setInterval(timer5, 1); // <- change the 1 to 1000
    }
  }

  // timer5(): timer for 5 minutes
  function timer5(){
    sec++;
    if (sec >= 60){
      min++;
      sec=0;
    }
    if (sec<10){
      time.textContent = min+ ':0'+ sec;
    } else {
      time.textContent = min+ ':'+ sec;
    }
    if (min>=5) {
      clearInterval(setTime);
      sec = 0;
      min = 0;
    }
  }

  // buttonFn(): starts the timer
  function buttonFn(){
    document.body.removeChild(button);
    setTime = setInterval(timer25, 1);  // <- change the 1 to 1000
  }
}
