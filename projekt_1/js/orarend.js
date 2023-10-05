var mode = 0;

function DarkMode()
{
    if(mode == 0)
    {
        document.body.style.backgroundColor =  "#4a4848";
        document.body.style.backgroundBlendMode = "multiply";
        document.getElementsById("gomb").src = "js/night-mode.png";
        mode = 1;
    }
    else
    {
        document.body.style.backgroundColor =  "transparent";
        document.getElementById("gomb").src = "js/brightness.png";
        mode = 0;
    }
}