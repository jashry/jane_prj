    // 日历

    var odate = document.getElementById('datesWrp');
    var nowDate = new Date();
    var nowdate = nowDate.getDate();
    var nowmonth = nowDate.getMonth();
    var nowyear = nowDate.getFullYear();
    var yearMonthDayRun = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var yearMonthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var englishNameOfMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var chineseNameOfMonth = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    function runNian(yearNum) {
        if (yearNum % 4 == 0 && yearNum % 100 != 0 || yearNum % 400 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function outPutli(yearStr, monthStr) {
        var str = "";
        var yearNum = Number(yearStr);
        var monthNum = Number(monthStr) - 1;
        var firstDayDate = new Date(yearNum, monthNum, 1).getDay();
        var previousMonth = monthNum - 1;
        var previousdayCount = runNian(yearNum) ? yearMonthDayRun[previousMonth] : yearMonthDay[previousMonth];
        var theDayCount = runNian(yearNum) ? yearMonthDayRun[monthNum] : yearMonthDay[monthNum];
        if (monthNum == 0) {
            var previousMonth = 11;
            var previousdayCount = runNian(yearNum - 1) ? yearMonthDayRun[previousMonth] : yearMonthDay[previousMonth];
        }
        for (var i = previousdayCount - firstDayDate + 1; i <= previousdayCount; i++) {
            str += "<li class='preMounth'>" + i + "</li>";
        }
        for (var i = 1; i <= theDayCount; i++) {
            if (yearNum == nowyear && monthNum == nowmonth && i == nowdate) {
                str += "<li class='innow'>" + i + "</li>";
            } else if (yearNum < nowyear || yearNum == nowyear && monthNum < nowmonth) {
                str += "<li class='passed'>" + i + "</li>";
            } else {
                str += "<li>" + i + "</li>";
            }
        }
        odate.innerHTML = str;
    }
    outPutli(nowyear, nowmonth + 1)

    var oyearShow = document.getElementById("yearWrp");
    str = nowyear + "/" + (nowmonth + 1) + "/" + nowdate;
    oyearShow.innerText = str;

    var owrpour = document.getElementById('cldour');
    var olis = document.getElementById('datesWrp').getElementsByTagName('li');
    var olisPre = document.getElementById('datesWrp').getElementsByClassName('preMounth')
    var dayObj = null;
    var presone = olisPre.length;
    for (var m = olisPre.length; m < olis.length; m++) {
        ! function(m) {
            olis[m].onclick = function() {
                this.className = "on";
                dayObj.innerText = this.innerText;
                presone = m;
                setTimeout(function() {
                    olis[presone].className = "";
                    owrpour.style.display = "none"
                }, 300);

            }
        }(m)

    }

    var orlBtn = document.getElementsByClassName('rlBtn');
    for (var r = 0; r < orlBtn.length; r++) {
        ! function(r) {
            orlBtn[r].onclick = function() {
                owrpour.style.display = "block";
                dayObj = this.parentNode.getElementsByTagName('em')[0];
            }
        }(r)
    }

    // 标签效果
    var tabs = document.getElementsByClassName("tabsBtnWrp");
    for (var i = 0; i < tabs.length; i++) {
        ! function(i) {
            tabs[i].getElementsByTagName('span')[0].onclick = function() {
                this.className = "on";
                tabs[i].getElementsByTagName('span')[1].className = "";
            }
            tabs[i].getElementsByTagName('span')[1].onclick = function() {
                this.className = "on";
                tabs[i].getElementsByTagName('span')[0].className = "";
            }
        }(i)
    }
    // 加减效果
    var addBtns = document.getElementsByClassName('addBtns');
    for (var j = 0; j < addBtns.length; j++) {
        ! function(j) {
            var addAs = addBtns[j].getElementsByTagName("a");
            var inputVal = addBtns[j].getElementsByTagName("input")[0];
            inputVal.onchange = function() {
                if (this.value == 0) {
                    alert("数字不能为零");
                }
            }
            addAs[1].onclick = function() {
                var theVal = inputVal.value;
                if (theVal > 0) {
                    theVal++;
                    inputVal.value = theVal;
                }
            }
            addAs[0].onclick = function() {
                var theVal = inputVal.value;
                if (theVal > 1) {
                    theVal--;
                    inputVal.value = theVal;
                };

            }
        }(j)
    }
    // 轮播效果
    var swiper = document.getElementById("swiper");
    var imgs = swiper.getElementsByTagName("img");
    var indx = 0;
    var timers = null;
    var nodeFgmt = document.createDocumentFragment();
    newNode = document.createElement("div");
    newNode.id = "tags";
    for (var i = 0; i < imgs.length; i++) {
        var ond = document.createElement("a");
        ond.href = "javascript:;";
        ond.setAttribute("data-indx", i);
        nodeFgmt.appendChild(ond);
    }
    newNode.appendChild(nodeFgmt);
    swiper.parentNode.appendChild(newNode);
    var tagsA = document.getElementById("tags").getElementsByTagName("a");
    for (var s = 0; s < tagsA.length; s++) {
        tagsA[s].onmouseover = function() {
            offEft();
            hideAll();
            var indxA = this.getAttribute("data-indx");
            changeEffect(indxA);
            this.className = "on"
        }
        tagsA[s].onmouseout = function() {
            onEft();
        }
    }
    tagsA[0].className = "on";

    function hideAll() {
        for (var i = 0; i < imgs.length; i++) {
            tagsA[i].className = " "
        }
    }

    function scrollIntvel() {
        timers = setInterval(function() {
            hideAll()
            if (indx < imgs.length - 1) {
                indx++;
            } else {
                indx = 0;
            }
            changeEffect(indx);
        }, 3600);
    }

    function changeEffect(indx) {

        swiper.style.transform = "translateX(-" + 25 * indx + "%)";
        tagsA[indx].className = "on ";

    }

    function onEft() {
        scrollIntvel()
    }

    function offEft() {
        clearInterval(timers);
    }
    scrollIntvel();

    function swiperLeft() {
        hideAll();
        if (indx > 0) {
            indx--;
        } else {
            indx = imgs.length - 1;
        }
        changeEffect(indx);
    }

    function swiperRight() {
        hideAll();
        if (indx < imgs.length - 1) {
            indx++;
        } else {
            indx = 0;
        }
        changeEffect(indx);
    }
    var startX = endX = 0;
    swiper.addEventListener("touchstart", function(evt) {
        startX = endX = evt.targetTouches[0].clientX;
        offEft();
    });
    swiper.addEventListener("touchmove", function(evt) {
        endX = evt.targetTouches[0].clientX;
    });
    swiper.addEventListener("touchend", function(evt) {
        if (endX - startX < -47) {
            swiperRight()
        } else if (endX - startX > 47) {
            swiperLeft()
        }
        onEft()
    });