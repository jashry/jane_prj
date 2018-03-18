window.onload = function() {


    var otapBtns = document.getElementById("tapsWrps").getElementsByTagName("div");
    var wrWrp = document.getElementsByClassName("tapDivs");
    var cnub = 0;
    for (var m = 0; m < otapBtns.length; m++) {
        otapBtns[m].indx = m;
        otapBtns[m].onclick = function() {
            otapBtns[cnub].className = "";
            this.className = "actOn";
            wrWrp[cnub].style.display = "none";
            wrWrp[this.indx].style.display = "block";
            cnub = this.indx;
        }
    }

    function scrolis(ouls) {
        var oul = ouls;
        var olis = oul.getElementsByTagName('li');
        var indexNum = 0;
        var ofst = oul.innerHTML;
        oul.innerHTML = ofst + ofst;
        var liLens = olis.length;

        function sclNews() {
            indexNum++;
            if (indexNum < liLens / 2 + 1) {
                oul.style.transition = "transform .5s ease-in";
                oul.style.transform = "translateY(-" + 50 * indexNum + "px)";
            } else {
                indexNum = 0;
                oul.style.transition = "";
                oul.style.transform = "translateY(-" + 50 * indexNum + "px)";
                setTimeout(function() {
                    indexNum = 1;
                    oul.style.transition = "transform .5s ease-in";
                    oul.style.transform = "translateY(-" + 50 * indexNum + "px)";
                }, 100)
            }
        }
        setInterval(sclNews, 3600)
    }
    var oUlss = document.getElementsByClassName("ulWrpsIner")[0].getElementsByTagName("ul")[0]
    scrolis(oUlss)

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

    swiper.appendChild(newNode);
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
    imgs[0].style.display = "block";
    imgs[0].style.opacity = "1";

    function hideAll() {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";
            imgs[i].style.opacity = "0";
            tagsA[i].className = ""
        }
    }

    function scrollIntvel() {
        timers = setInterval(function() {
            hideAll();
            if (indx < imgs.length - 1) {
                indx++;
            } else {
                indx = 0;
            }
            changeEffect(indx);
        }, 3600);
    }



    function changeEffect(indx) {
        imgs[indx].style.display = "block";
        setTimeout(function() {
            imgs[indx].style.opacity = "1";
            tagsA[indx].className = "on";
        }, 30);
    }


    function onEft() {
        scrollIntvel()
    }

    function offEft() {
        clearInterval(timers);
    }

    scrollIntvel()

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
        startX = evt.targetTouches[0].clientX;
        offEft();
    });
    swiper.addEventListener("touchmove", function(evt) {
        endX = evt.targetTouches[0].clientX;
    });
    swiper.addEventListener("touchend", function(evt) {
        if (endX - startX < 0) {
            swiperRight()
        } else {
            swiperLeft()
        }
        onEft()
    });
}