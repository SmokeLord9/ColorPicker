window.addEventListener("load", e =>{
    const colorText = document.querySelector("#color_rgb");
    const body = document.querySelector("body");
    const button = document.querySelector("#buttonCopy");
    const pop_up = document.querySelector(".pop_up");
    var rgbColor;
    document.addEventListener("keyup", e =>{
        if(e.keyCode == 32){
            var r = Math.floor(Math.random() * 255)+1;
            var g = Math.floor(Math.random() * 255)+1;
            var b = Math.floor(Math.random() * 255)+1;
            colorText.innerHTML = "rgb("+r+", "+g+", "+b+");"
            body.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
            rgbColor = "rgb("+r+", "+g+", "+b+");";
        }
    })
    button.addEventListener("click", e=>{
        e.preventDefault();
        navigator.clipboard.writeText(rgbColor);
        button.src = "https://img.icons8.com/fluency-systems-regular/48/12B886/clone-figure--v3.png";
        setTimeout(() =>{
            button.src = "https://img.icons8.com/fluency-systems-regular/48/null/clone-figure--v3.png";
        }, 2000);
    })
})