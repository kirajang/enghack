
var button = document.createElement('button');
var instruct = document.createElement('p');
var time = document.createElement('p');
var sec = 0;
var min = 0;
var setTime;
var userIn;
var i = 0;
var userLog = document.createElement('ul');

instruct.textContent = "How many sessions would you like?";
button.textContent='start timer';
time.style.fontSize = "xx-large";

document.body.appendChild(instruct);
document.body.appendChild(button);
document.body.appendChild(time);
document.body.appendChild(userLog);

button.addEventListener('click', buttonFn);

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
    if (i<userIn-1){
      i++;
      console.log(i);
      setTime = setInterval(timer5, 1);
    } else {
      addToList();
    }
  }
}

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
    setTime = setInterval(timer25, 1);
  }
}

function startTimer(){
  setTime = setInterval(timer25, 1);
}

function isNumber (o) {
  return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
}

function addToList(){
  var userLog1 = document.createElement('li');
  //userLog1.textContent = userIn;
  var date = new Date();
  userLog1.textContent = userIn + " session(s) on " + date;
  userLog.appendChild(userLog1);
}


function buttonFn(){
  userIn = document.getElementById('a').value;
  if (isNumber(userIn)){
    console.log("ttt")
    sec = 0;
    min = 0;
    startTimer();
  } else {
    instruct.textContent = "Please enter an natural number";
  }

}
