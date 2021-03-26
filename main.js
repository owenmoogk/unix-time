function unixToDate(){
    unixTime = document.getElementById("unixTime").value
    x = parseInt(unixTime)
    if (isNaN(x)){
        return
    }
    var a = new Date(unixTime * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    document.getElementById("year").value = a.getFullYear();
    document.getElementById("month").value = a.getMonth();
    document.getElementById("day").value = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    if (hour / 10 < 1){
        hour = "0" + hour
    }
    if (min / 10 < 1){
        min = "0" + min
    }
    if (sec / 10 < 1){
        sec = "0" + sec
    }
    time = hour + ':' + min + ':' + sec;
    document.getElementById("time").value = time;
}

function dateToUnix(){
    year = document.getElementById("year").value
    month = document.getElementById("month").value
    day = document.getElementById("day").value
    time = document.getElementById("time").value
    time = time.split(":")
    var unix = new Date(year,month,day,time[0],time[1],time[2]);
    document.getElementById("unixTime").value = unix.getTime()/1000;
}

function todayDate(){
    date = new Date()
    document.getElementById("unixTime").value = date.getTime()/1000;
    unixToDate()
}