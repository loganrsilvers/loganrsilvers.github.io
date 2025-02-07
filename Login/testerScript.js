function checkPass(){
    //name
    let name = document.getElementById("pname").value;
    //pass
    let pass = document.getElementById("pcolor").value;
    if(name === "tabby" && pass === "pink"){
       document.location.href="../intro.html";
    }
    else{
        
    }
    changePic();
    changeColor();

    function changePic(){
        if(name == "black"){
            document.getElementById('imageToChange').src="IMG/blackCat.webp";
        }
        if(name == "tabby"){
            document.getElementById('imageToChange').src="IMG/orangeCat.png";
        }
        if(name == "nyan"){
            document.getElementById('imageToChange').src="IMG/nyanCat.png";
        }
        if(name == "blue"){
            document.getElementById('imageToChange').src="IMG/blueCat.png";
        }
        if(name == "brown"){
            document.getElementById('imageToChange').src="IMG/brownCat.webp";
        }
    }
    function changeColor(){
        if(pass == "red"){
            document.getElementById('colorResult').style.backgroundColor="#ff595e";
        }
        if(pass == "pink"){
            document.getElementById('colorResult').style.backgroundColor="pink";
        }
        if(pass == "yellow"){
            document.getElementById('colorResult').style.backgroundColor="#ffca3a";
        }
        if(pass == "green"){
            document.getElementById('colorResult').style.backgroundColor="#8ac926";
        }
        if(pass == "blue"){
            document.getElementById('colorResult').style.backgroundColor="#1982c4";
        }
        if(pass == "purple"){
            document.getElementById('colorResult').style.backgroundColor="#6a4c93";
        }
    }
};