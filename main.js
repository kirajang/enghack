// declare elements
var button = document.querySelector('#timer');
var time = document.querySelector('#timer_time');
var img = document.querySelector('#animal');
var userIn; 
var userInLog;

//declare timer variables
var sec = 0;
var min = 0;
var i;
var setTime;

var startimages;

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
	
	  if (i<userIn-1){
      i++;
      console.log(i);
      setTime = setInterval(timer5, 1);
	}
	}
  }

  // timer5(): timer for 5 minutes
  function timer5(){
    
	sec++;
    if (sec >= 60){
      min++;
      sec=0;
    }
	
	if (sec % 500 === 0) {
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
	  
	  startTimer()
    }
  }
  
  function change_image() {
	  img.src = 'https://placeimg.com/640/480/animals';
  }
 
 
 function startTimer(){
  setTime = setInterval(timer25, 1);
}

var n = 0;

function addToList(){
  n++;
  userInLog = document.getElementById('log').value;
  var userLog1 = document.querySelector('#no' + n)
  var date = new Date();
  userLog1.textContent = userInLog + " (" + userIn + " session(s) on " + date + ")";
  
}


  // buttonFn(): starts the timer
  function buttonFn(){
		sec = 0;
		min = 0;
		i = 0;
		userIn = document.getElementById('num_sessions').value;
		addToList()
		startTimer();
		clearInterval(startimages);
		
  }
  
  

