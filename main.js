// declare elements
var button = document.querySelector('#timer');
var time = document.querySelector('.time');
var img = document.querySelector('#animal');
//declare timer variables
var sec = 0;
var min = 0;
var setTime;

var startimages

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
	  setTime = setInterval(timer5, 100); // <- change the 1 to 1000
	}
  }

  // timer5(): timer for 5 minutes
  function timer5(){
    
	sec++;
    if (sec >= 60){
      min++;
      sec=0;
    }
	
	if (sec % 30 === 0) {
		change_image()
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
  
  function change_image() {
	  img.src = 'https://placeimg.com/640/480/animals';
  }
 


  // buttonFn(): starts the timer
  function buttonFn(){
    setTime = setInterval(timer25, 1);  // <- change the 1 to 1000
	clearInterval(startimages)
  }

