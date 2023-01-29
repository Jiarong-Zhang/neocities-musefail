(function() {

    // document.getElementByClassName('marquee').innerHTML = "SORRYYYYYYYYY";

    var pet = document.getElementById("gifypet");
    var marquee = document.getElementById("marquee");
    var runner = document.getElementById("runner");


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // console.log("mobile");
        pet.style.display = "none";
        marquee.style.textAlign = "center";
        runner.style.animation = "none";
    } else {
        //console.log("not mobile");
        pet.style.display = "block";
    }

}());