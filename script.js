 const hrs=document.querySelector(".hrs");
 const min=document.querySelector(".min");
 const sec=document.querySelector(".sec");

 setInterval(runClock,1000);
function runClock(){
    const time=new Date();
    const seco=time.getSeconds()/60;
    const minute=(seco+time.getMinutes())/60;
    const hours=(minute+time.getHours())/12;
    //  console.log(hours,minute,seco);
    hrs.style.setProperty("--rotate",hours*360);
    min.style.setProperty("--rotate",minute*360);
    sec.style.setProperty("--rotate",seco*360);
    
}
runClock();