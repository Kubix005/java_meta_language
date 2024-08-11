let i = 0;
document.getElementById("box1").addEventListener("click", function() {
    document.body.style.transition = "0.2s";
    if (i % 2 == 0) {
        document.body.style.backgroundColor = "#ffff22";
        document.getElementById("box1").innerHTML = "Light Mode";
    } else {
        document.getElementById("box1").innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "#AA6C39";
    }
    i++;
});
