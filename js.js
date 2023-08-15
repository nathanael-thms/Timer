function displayNumber(number) {
    return String(number).padStart(2, '0')
}
function getNumber(element) {
    return parseInt(element.value) || 0;
}
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
function reset(){
    location.reload()
}
function SetTimer(){
    const seconds=getNumber(document.getElementById("seconds"));
    const minutes=getNumber(document.getElementById("minutes"));
    const hours=  getNumber(document.getElementById("hours"));

    console.log("seconds: "+seconds);
    console.log("minutes: "+minutes);
    console.log("hours : "+hours);
    
    document.getElementById("display").innerHTML=displayNumber(seconds)+":"+displayNumber(minutes)+":"+displayNumber(hours);
    document.getElementById("input").style.display="none";

    return {
        totalSeconds:seconds+minutes*60+hours*60*60,
        minutes: minutes,
        seconds: seconds,
        hours: hours,
    }
}
function PlayTimer(timer) {
    if (timer.totalSeconds>0){
        setTimeout(function(){
            timer.totalSeconds=timer.totalSeconds-1;
            const newsecs=totalsecsConvert(timer.totalSeconds);
            document.getElementById("display").innerHTML=displayNumber(newsecs.seconds)
+":"+
    displayNumber(newsecs.minutes)
+":"+
    displayNumber(newsecs.hours)
;
            PlayTimer(timer)
        },1000);
    }
    else {
        reset()
    }
}
function play(){
    const timer = SetTimer();
    PlayTimer(timer);
}
function updateDisplay(timerValueSecs,timerValueMins,timerValueHrs){
    document.getElementById("display").innerHTML=timerValueSecs
+":"+
    timerValueMins
+":"+
    timerValueHrs
;
}
function totalsecsConvert(time){
  let diffInHrs = time / 3600;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);
  let formattedMM = displayNumber(mm);
  let formattedSS = displayNumber(ss);
  let formattedHH = displayNumber(hh);
  return {
    hours:ss,
    minutes:mm,
    seconds:hh,
  }
}
