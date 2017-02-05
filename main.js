// declare elements
var button = document.querySelector('#timer');
var time = document.querySelector('.time');
//declare timer variables
var sec = 0;
var min = 0;
var setTime;

time.style.fontSize = "xx-large";



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
    setTime = setInterval(timer25, 1);  // <- change the 1 to 1000
  }

