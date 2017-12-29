function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}


function ares(arr, strs, callback) {
    var vdata = "";
    var webStrs = "http://actions.oeadd.com/api/" + arr[0] + "/" + arr[1] + ".html?";
    var urlQuryStr = "os=web&uuid=123&version=1.0&timestamp=" + Math.round(new Date().getTime() / 1000) + strs;
    var signature = hex_sha1(urlQuryStr.split("&").sort().join(""));
    var realStr = webStrs + urlQuryStr + "&signature=" + signature;
    console.log(realStr);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", realStr, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("xmlhttprequest success");
                callback(JSON.parse(xhr.responseText));

            } else {
                console.log("Problem retrieving data");
            }
        }
    }
}