(function() {

    // document.getElementByClassName('marquee').innerHTML = "SORRYYYYYYYYY";

    //var pet = document.getElementById("gifypet");
    //var marquee = document.getElementById("marquee");
    //var marquee_content = document.getElementById("marquee_content");
    var footer = document.getElementById("footer");
    //var blog = document.querySelector(".div_center.blog");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // console.log("mobile");

        if (window.location.href == "https://musefail.neocities.org") {

            document.getElementById("gifypet").style.display = "none";
            document.getElementById("marquee").style.display = "none";
        } else {

            document.querySelector(".div_center.blog").style.width = "95%";

        }
        footer.style.fontSize = "50%";
        //marquee.style.textAlign = "center";
        //marquee_content.style.animation = "none";

    } else {
        //console.log("not mobile");
        //pet.style.display = "block";
    }

}());