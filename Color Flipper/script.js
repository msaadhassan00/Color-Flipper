let box = document.querySelectorAll(".box");
let code = document.querySelectorAll(".code");
let btn = document.getElementById("btn");
console.log(code);

function GenerateColor(){

    let colorCode = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",];

    let i = 0;
    let color = "#";

    for (i = 0; i < 6; i++) {
        let position = Math.floor(Math.random() * colorCode.length);

        color = color + colorCode[position];

        console.log(colorCode[position]);

    }
    code.innerHTML=color; 
    // console.log(code);

    return color;

}

    btn.addEventListener("click",()=>{
        box.forEach((eachbox)=>{
        eachbox.style.backgroundColor = GenerateColor();
        // console.log(eachbox.childElementCount);
        eachbox.childNodes[1].childNodes[1].innerHTML=GenerateColor();
       
    })
})
