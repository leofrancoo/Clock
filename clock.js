
function startTime() {
    var t= new Date();
    var h=t.getHours();
    var m=t.getMinutes();
    var s=t.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h+":"+m+":"+s;
    var t2 = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i}; 
    return i;
}
