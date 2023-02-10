let btn = document.querySelector('button');
btn.addEventListener('click', display_ct);
let dbms = 'https://meet.google.com/wtx-ynmn-mqq';
let dbms_lab = 'https://meet.google.com/ism-visn-jqx';
let pdc = 'https://meet.google.com/osj-bvqq-opb';
let afl = 'https://us02web.zoom.us/j/86356146691?pwd=aHFEa0xiMFlnK3h5UDhDYkVyVWEzdz09';
let coa = 'https://meet.google.com/osw-qpuv-kdc?authuser=0';
let wt = 'https://meet.google.com/njx-febs-ktn?authuser=1';
let wt_lab = 'https://meet.google.com/njx-febs-ktn?authuser=1';
let os = 'https://meet.google.com/xmd-tpzp-zqb?authuser=1';
let os_lab = 'https://meet.google.com/orj-evrr-rqm?authuser=1';
let bc = 'https://kiit-ac-in.zoom.us/j/86741187304?pwd=MFhlNW1SRzRxYWpWbm81SWFWRXlQdz09#success';
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0,c8=0,c9=0;
let spn = document.querySelector('span');
function display_c() {
    var refresh = 1000; 
    mytime = setTimeout('display_ct()', refresh)
}
function display_ct() {
    let x2 = new Date();
    let daay = x2.getDay();
    var x1;
    let hrs = x2.getHours();
    let mins = x2.getMinutes();
    if (daay == 1) {
        if ((hrs >= 5) && (hrs <= 7) && (mins <= 59)) {
            if (c8 == 0) {
                spn.innerHTML = 'Too Early for Class';
                window.open('https://youtube.com', '_blank');
                c8++;
            }
            c8++;
        }
        else if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                spn.innerHTML='Dr. Rajdeep Chaterjee';
                window.open(dbms, '_blank');
                c1++;
            }
            
            c1++;
        }
        else if ((hrs >= 9) && (hrs <= 10) && (mins <= 59)) {
            if (c2 == 0) {
               spn.innerHTML='Dr. Rajdeep Chaterjee';
                window.open(dbms_lab, '_blank');
                c2++;
            }
           
            c2++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c3 == 0) {
               spn.innerHTML='Prof. Nitin Kumar Panda';
                window.open(pdc, '_blank');
                c3++;
            }
            
            c3++;
        }
        else if ((hrs == 12) && (mins <= 59)) {
            if (c4 == 0) {

                spn.innerHTML='Prof.(Dr.) Ganga Bishnu Mund';
                window.open(afl, '_blank');
                c4++;
            }
            
            c4++;
        }
        else if ((hrs == 13) && (mins <= 59)) {
            if (c5 == 0) {
                spn.innerHTML='Mr. Mano Ranjan Kumar';
                window.open(coa, '_blank');
                c5++;
            }
           
            c5++;
        }
        else {
            if (c7 == 0) {
                spn.innerHTML = 'Class Over';
                window.open('https://google.com', '_blank');
                setTimeout(function () { window.close(); }, 1000);
                c7++;
            }
            c7++;
        }
    }
    else if (daay == 2) {
        if ((hrs >= 5) && (hrs <= 7) && (mins <= 59)) {
            if (c8 == 0) {
                spn.innerHTML = 'Too Early for Class';
                window.open('https://youtube.com', '_blank');
                c8++;
            }
            c8++;
        }
        else if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
               spn.innerHTML='Mr. Jyotiprakash Mishra';
                window.open(os, '_blank');
                c1++;
            }
            console(1);
            c1++;
        }
        else if ((hrs == 9) && (mins <= 59)) {
            if (c2 == 0) {
               spn.innerHTML='Prof. Nitin Kumar Panda';
                window.open(pdc, '_blank');
                c2++;
            }
           
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                spn.innerHTML='Mr. Mano Ranjan Kumar';
                window.open(coa, '_blank');
                c3++;
            }
            
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {
                spn.innerHTML='Prof.(Dr.) Ganga Bishnu Mund';
                window.open(afl, '_blank');
                c4++;
            }
            
            c4++;
        }
        else if ((hrs == 12) && (mins <= 59)) {
            if (c5 == 0) {
                spn.innerHTML='Mrs. Nalini Prava Behera';
                console.log('WT');
                window.open(wt, '_blank');
                c5++;
            }
           
            c5++;
        }
        else {
            if (c7 == 0) {
                spn.innerHTML = 'Class Over';
                window.open('https://google.com', '_blank');
                setTimeout(function () { window.close(); }, 1000);
                c7++;
            }
            c7++;
        }
    }
    else if (daay == 3) {
        if ((hrs >= 5) && (hrs <= 7) && (mins <= 59)) {
            if (c8 == 0) {
                spn.innerHTML = 'Too Early for Class';
                window.open('https://youtube.com', '_blank');
                c8++;
            }
            c8++;
        }
        else if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                spn.innerHTML='Mrs. Nalini Prava Behera';
                console.log('WT');
                window.open(wt, '_blank');
                c1++;
            }
            
            c1++;
        }
        else if ((hrs >= 9) && (hrs <= 10) && (mins <= 59)) {
            if (c2 == 0) {
                spn.innerHTML='Mrs. Naliniprava Behera';
                window.open(wt_lab, '_blank');
                c2++;
            }
           
            c2++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c3 == 0) {
               spn.innerHTML='Mr. Jyotiprakash Mishra';
                window.open(os, '_blank');
                c3++;
            }
            
            c3++;
        }
        else if ((hrs == 12) && (mins <= 59)) {
            if (c4 == 0) {
                spn.innerHTML='Dr. Rajdeep Chaterjee';
                window.open(dbms, '_blank');
                c4++;
            }
            
            c4++;
        }
        else if ((hrs == 13) && (mins <= 59)) {
            if (c5 == 0) {
               spn.innerHTML='Prof. Nitin Kumar Panda';
                window.open(pdc, '_blank');
                c5++;
            }
           
            c5++;
        }
        else {
            if (c7 == 0) {
                spn.innerHTML = 'Class Over';
                window.open('https://google.com', '_blank');
                setTimeout(function () { window.close(); }, 1000);
                c7++;
            }
            c7++;
        }
    }
    else if (daay == 4) {
        if ((hrs >= 5) && (hrs <= 7) && (mins <= 59)) {
            if (c8 == 0) {
                spn.innerHTML = 'Too Early for Class';
                window.open('https://youtube.com', '_blank');
                c8++;
            }
            c8++;
        }
        else if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                 spn.innerHTML='Mrs. Nalini Prava Behera';
                console.log('WT');
                window.open(wt, '_blank');
                c1++;
            }
            
            c1++;
        }
        else if ((hrs == 9) && (mins <= 59)) {
            if (c2 == 0) {
                spn.innerHTML='Prof.(Dr.) Ganga Bishnu Mund';
                window.open(afl, '_blank');
                c2++;
            }
           
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                spn.innerHTML='Dr. Rajdeep Chaterjee';
                window.open(dbms, '_blank');
                c3++;
            }
            
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {
                spn.innerHTML='Mr. Mano Ranjan Kumar';
                window.open(coa, '_blank');
                c4++;
            }
            
            c4++;
        }
        else if ((hrs == 12) && (mins <= 59)) {
            if (c5 == 0) {
               spn.innerHTML='Prof. Nitin Kumar Panda';
                window.open(pdc, '_blank');
                c5++;
            }
           
            c5++;
        }
        else if ((hrs >= 16) && (hrs <= 17) && (mins <= 59)) {
            if (c6 == 0) {
                spn.innerHTML='Mrs. Swati Samantray';
                window.open(bc, '_blank');
                c6++;
            }
            
            c6++;
        }
        else if ((hrs >= 13) && (hrs <= 15) && (mins <= 59)) 
        {
            if (c7 == 0) {
                spn.innerHTML='FREE PERIOD';
                window.open('https://youtube.com', '_blank');
                c7++;
            }
            
            c7++;
        }
        else {
            if (c9 == 0) {
                spn.innerHTML = 'Class Over';
                window.open('https://google.com', '_blank');
                setTimeout(function () { window.close(); }, 1000);
                c9++;
            }
            c9++;
        }
    }
    else if (daay == 5) {
        if ((hrs >= 5) && (hrs <= 7) && (mins <= 59)) {
            if (c8 == 0) {
                spn.innerHTML = 'Too Early for Class';
                window.open('https://youtube.com', '_blank');
                c8++;
            }
            c8++;
        }
        else if ((hrs == 8) && (mins <= 59)) {
            if (c1 == 0) {
                spn.innerHTML='Dr. Rajdeep Chaterjee';
                window.open(dbms, '_blank');
                c1++;
            }
            
            c1++;
        }
        else if ((hrs == 9) && (mins <= 59)) {
            if (c2 == 0) {
                spn.innerHTML='Prof.(Dr.) Ganga Bishnu Mund';
                window.open(afl, '_blank');
                c2++;
            }
           
            c2++;
        }
        else if ((hrs == 10) && (mins <= 59)) {
            if (c3 == 0) {
                spn.innerHTML='Mr. Mano Ranjan Kumar';
                window.open(coa, '_blank');
                c3++;
            }
            
            c3++;
        }
        else if ((hrs == 11) && (mins <= 59)) {
            if (c4 == 0) {
               spn.innerHTML='Mr. Jyotiprakash Mishra';
                window.open(os, '_blank');
                c4++;
            }
            
            c4++;
        }
        else if ((hrs >= 12) && (hrs <= 13) && (mins <= 59)) {
            if (c5 == 0) {
               spn.innerHTML='Pratyusha Mukherjee';
                window.open(os_lab, '_blank');
                c5++;
            }
           
            c5++;
        }
        else {
            if (c7 == 0) {
                spn.innerHTML = 'Class Over';
                window.open('https://google.com', '_blank');
                setTimeout(function () { window.close(); }, 1000);
                c7++;
            }
            c7++;
        }
    }
    else{
        spn.innerHTML="Holiday"
        window.open('https://youtube.com', '_blank');
        setTimeout(function () { window.close(); }, 1000);
    }
     display_c();
}
