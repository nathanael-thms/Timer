let interval;
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
function hideobjet(item){
    document.getElementById(item).style.display="none";
}
function showobject(object){
    document.getElementById(object).style.display="inline"||"block";
}
function reset(){
    location.reload();
}
function pause(){
    clearTimeout(interval);
    showobject("input");
    showobject("playButton");
    hideobjet("pauseButton");
}
function SetTimer(){
    const seconds=getNumber(document.getElementById("seconds"));
    const minutes=getNumber(document.getElementById("minutes"));
    const hours=  getNumber(document.getElementById("hours"));

    console.log("seconds: "+seconds);
    console.log("minutes: "+minutes);
    console.log("hours : "+hours);
    
    updateDisplay(seconds,minutes,hours);
    document.getElementById("input").style.display="none";

    return {
        totalSeconds:seconds+minutes*60+hours*60*60,
        minutes: minutes,
        seconds: seconds,
        hours: hours,
    }
}
function PlayTimer(timer) {
    hideobjet("input");
    if (timer.totalSeconds>0){
        interval=setTimeout(function(){
            timer.totalSeconds=timer.totalSeconds-1;
            const newsecs=totalsecsConvert(timer.totalSeconds);
            document.getElementById("seconds").value=newsecs.seconds;
            document.getElementById("minutes").value=newsecs.minutes;
            document.getElementById("hours").value=newsecs.hours;
            updateDisplay(newsecs.seconds,newsecs.minutes,newsecs.hours);
            document.getElementById("title").innerHTML=displayNumber(newsecs.hours)+":"+displayNumber(newsecs.minutes)+
            ":"+displayNumber(newsecs.seconds);
            PlayTimer(timer);
        },1000);
    }
    else {
        reset(timer)
    }
}
function play(){
    const timer = SetTimer();
    PlayTimer(timer);
    hideobjet("playButton");
    showobject("pauseButton");
}
function updateDisplay(Secs,Mins,Hrs){
    document.getElementById("display").innerHTML=displayNumber(Hrs)+":"+
    displayNumber(Mins)
+":"+
    displayNumber(Secs)
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
    hours:hh,
    minutes:mm,
    seconds:ss,
  }
}
