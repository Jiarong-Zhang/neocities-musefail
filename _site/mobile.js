(function() {

    // document.getElementByClassName('marquee').innerHTML = "SORRYYYYYYYYY";

    var pet = document.getElementById("gifypet");
    var marquee = document.getElementById("marquee");
    //var marquee_content = document.getElementById("marquee_content");
    var footer = document.getElementById("footer");
    var blog = document.querySelector(".div_center .blog");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // console.log("mobile");
        pet.style.display = "none";
        marquee.style.display = "none";
        //marquee.style.textAlign = "center";
        //marquee_content.style.animation = "none";
        footer.style.fontSize = "75%";
        blog.style.width = "95%";
    } else {
        //console.log("not mobile");
        pet.style.display = "block";
    }

}());