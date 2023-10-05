var mode = 0;

function DarkMode()
{
    var gomb = document.getElementById("gomb");

    if (mode == 0) {
        document.body.style.backgroundColor = "#4a4849";
        document.body.style.backgroundBlendMode = "multiply";
        gomb.src = "js/night-mode.png";
        mode = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        gomb.src = "js/brightness.png";
        mode = 0;
    }
}