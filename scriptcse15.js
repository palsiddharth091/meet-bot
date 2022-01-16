let btn = document.querySelector('button');
btn.addEventListener('click', display_ct);
let dbms = 'http://meet.google.com';
let dbms_lab = 'http://meet.google.com';
let pdc = 'http://meet.google.com';
let afl = 'http://meet.google.com';
let coa = 'http://us02web.zoom.us';
let wt = 'https://bit.ly';
let wt_lab = 'http://meet.google.com'; //g1
let os = 'http://meet.google.com';
let os_lab = 'https://meet.google.com';
let bc ='https://bit.ly';
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0;
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}
function display_ct() {
    let x2 = new Date();
    let daay = x2.getDay();
    var x1;
    let hrs = x2.getHours();
    let mins = x2.getMinutes();
    let sec = x2.getSeconds();
    
    if (daay == 1) {
       // c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0;
        if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                console.log('os');
                window.open(os, '_blank');
                c1++;
            }
            console.log(1);
            c1++;
        }
        else if ((hrs >= 9) && (mins <= 59)) {
            if (c2 == 0) {
                console.log('dbms');
                window.open(dbms, '_blank');
                c2++;
            }
            console.log(2);
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                console.log('afl');
                window.open(afl, '_blank');
                c3++;
            }
            console.log(3);
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {

                console.log('pdc');
                window.open(pdc, '_blank');
                c4++;
            }
            console.log(4);
            c4++;
        }
        else if ((hrs == 12) && (mins <= 59)) {
            if (c5 == 0) {
                console.log('wt');
                window.open(wt, '_blank');
            }
            console.log(5);
            c5++;
        }
        else if ((hrs == 13) && (mins <= 59)) {
            if (c6 == 0) {
                console.log('wt');
                window.open(wt, '_blank');
            }
            console.log(6);
            c6++;
        }
        else {
            console.log('Class Over');
            window.open('https://google.com', '_blank');
            setTimeout(function () { window.close(); }, 10000);
        }
    }
    else if (daay == 2) {
      //  c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0;
        if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                console.log('coa');
                window.open(coa, '_blank');
                c1++;
            }
            console(1);
            c1++;
        }
        else if ((hrs == 9) && (mins <= 59)) {
            if (c2 == 0) {
                console.log('afl');
                window.open(afl, '_blank');
                c2++;
            }
            console.log(2);
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                console.log('pdc');
                window.open(pdc, '_blank');
                c3++;
            }
            console.log(3);
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {
                console.log('dbms');
                window.open(dbms, '_blank');
                c4++;
            }
            console.log(4);
            c4++;
        }
        else if ((hrs >= 12) && ((hrs <= 13)) && (mins <= 59)) {
            if (c5 == 0) {
                console.log('dbms lab');
                window.open(dbms_lab, '_blank');
                c5++;
            }
            console.log(5);
            c5++;
        }
        else {
            console.log('Class Over');
            window.open('https://google.com', '_blank');
            setTimeout(function () { window.close(); }, 10000);
        }
    }
    else if (daay == 3) {
      //  c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0;
        if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                console.log('afl');
                window.open(afl, '_blank');
                c1++;
            }
            console.log(1);
            c1++;
        }
        else if ((hrs == 9) && (mins <= 59)) {
            if (c2 == 0) {
                console.log('coa');
                window.open(coa, '_blank');
                c2++;
            }
            console.log(2);
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                console.log('pdc');
                window.open(pdc, '_blank');
                c3++;
            }
            console.log(3);
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {
                console.log('wt');
                window.open(wt, '_blank');
                c4++;
            }
            console.log(4);
            c4++;
        }
        else if ((hrs >= 12)&&(hrs<=13) && (mins <= 59)) {
            if (c5 == 0) {
                console.log('wt lab');
                window.open(wt_lab, '_blank');
                c5++;
            }
            console.log(5);
            c5++;
        }
        else {
            console.log('Class Over');
            window.open('https://google.com', '_blank');
            setTimeout(function () { window.close(); }, 10000);
        }
    }
    else if (daay == 4) {
      //  c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0;
        if ((hrs == 9) && (mins <= 59)) {
            if (c1 == 0) {
                console.log('wt');
                window.open(wt, '_blank');
                c1++;
            }
            console.log(1);
            c1++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c2 == 0) {
                console.log('coa');
                window.open(coa, '_blank');
            }
            console.log(2);
            c2++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c3 == 0) {
                console.log('DBMS');
                window.open(dbms, '_blank');
                c3++;
            }
            console.log(3);
            c3++;
        }
        else if ((hrs == 12) && (mins <= 59)) {
            if (c4 == 0) {
                console.log('os');
                window.open(os, '_blank');
                c4++;
            }
            console.log(4);
            c4++;
        }
        else if ((hrs >= 16) && (hrs <= 17) && (mins <= 59)) {
            if (c5 == 0) {
                console.log('bc');
                window.open(bc, '_blank');
                c5++;
            }
            console.log(6);
            c5++;
        }
        else if ((hrs >= 13) && (hrs <= 15) && (mins <= 59)) {
            if (c6 == 0) {
                console.log('FREE PERIOD');
                window.open('https://youtube.com', '_blank');
                c6++;
            }
            console.log(7);
            c6++;
        }
        else {
            console.log('Class Over');
            window.open('https://google.com', '_blank');
            setTimeout(function () { window.close(); }, 10000);
        }
    }
    else if (daay == 5) {

        if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                console.log('pdc');
                window.open(pdc, '_blank');
                c1++;
            }
            console.log(1);
            c1++;
        }
        else if ((hrs == 9) && (mins <= 59)) {
            if (c2 == 0) {
                console.log('dbms');
                window.open(dbms, '_blank');
            }
            console.log(2);
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                console.log('afl');
                window.open(afl, '_blank');
                c3++;
            }
            console.log(3);
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {
                console.log('OS');
                window.open(os, '_blank');
                c4++;
            }
            console.log(4);
            c4++;
        }
        else if ((hrs >= 12) && (hrs <= 13) && (mins <= 59)) {
            if (c5 == 0) {
                console.log('OS');
                window.open(os_lab, '_blank');
                c5++;
            }
            console.log(5);
            c5++;
        }
        else {
            console.log('Class Over');
            window.open('https://google.com', '_blank');
            setTimeout(function () { window.close(); }, 10000);
        }
    }

    document.getElementById('ct').innerHTML = x1;

    tt = display_c();
}
