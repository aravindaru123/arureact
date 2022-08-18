const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    console.log('Offset * 0.7 ' + offset);

    parallax.style.backgroundPostionY = offset * 0.7 + "px";
})

