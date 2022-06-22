console.log("We are live");

const turnoff = ()=>{
    let k = document.getElementById("onBulb")
    k.getAttribute("src");
    k.setAttribute("src","OFFbulb.jpg");
    let z = document.body;
    z.style.backgroundColor = "white";
    let y = document.getElementById("heading");
    y.style.color = "black";
}

const turnon = ()=>{
    let k = document.getElementById("onBulb");
    k.getAttribute("src");
    k.setAttribute("src","ONbulb.jpg");
    let z = document.body;
    z.style.backgroundColor = "black";
    let y = document.getElementById("heading");
    y.style.color = "white";
}