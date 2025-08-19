var time=document.getElementById("time")

var hour=0;
var min=0;
var sec=0;
var interval=null;

function update (){
    sec++;
    if (sec===60){
        sec=0;
        min++
    }
    if(min===60){
        min=0
        hour++
    }
    // time.innerHTML=`${String(hour).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`


    document.getElementById("time").textContent = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`

}

document.getElementById("start").addEventListener("click",function(){
    if (interval ===null){
        interval= setInterval( update, 1);
    }
})

document.getElementById("stop").onclick=function(){
    clearInterval(interval);
    interval=null;
}
document.getElementById("reset").onclick=function(){
    clearInterval(interval)
    interval=null
    hour=0
    min=0
    sec=0
    time.textContent="00:00:00"
}