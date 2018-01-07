function getdays(dayofupd) {
    var arr = (dayofupd+'').split('.',3);
    var day = parseInt(arr[0],10), month = parseInt(arr[1],10), year = parseInt(arr[2],10);
    month--;
    var now = new Date().getTime();
    var updday = new Date(year,month,day).getTime();
    var diff = Math.floor((now-updday)/(1000*3600*24));
    var ten = parseInt((diff+'').slice(-2),10);
    var result = undefined;
    switch (diff) {
        case 0: return result = 'сёння.';
        case 1: return result = 'учора.';
        case 2: return result = 'заўчора.';
        default: {
            function noun (ten) {
                if (parseInt((ten+'').slice(-1),10)===1) {return diff +' дзень'}
                else if (parseInt((ten+'').slice(-2,-1),10)>1 &&
                parseInt((ten+'').slice(-1),10)>1 &&
                parseInt((ten+'').slice(-1),10)<5) {return diff +' дні'}
                else {return diff+' дзён'}
            }
            result = noun(ten) + ' таму.';
            if (diff>31) {result = result+' Даўно нічога не пісаў.'}
        }
    }
    return result;
}

function writediff(day,month,year) {
    document.getElementById("updatetime").innerHTML = getdays(day,month,year);
}