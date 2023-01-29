(function() {

    // document.getElementByClassName('marquee').innerHTML = "SORRYYYYYYYYY";

    var pet = document.getElementById("gifypet");


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("mobile");
        pet.style.display = "none";
    } else {
        console.log("not mobile");
        pet.style.display = "block";
    }

}());