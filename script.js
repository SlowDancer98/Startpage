function clock() {
    var date = new Date()

    var hours = date.getHours()
    var minutes = date.getMinutes()

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    document.getElementById("clock").innerHTML = 
        hours + ":" + minutes ;
    
    var t = setTimeout(clock, 500)    
}

clock()