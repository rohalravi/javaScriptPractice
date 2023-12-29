let button = document.querySelector("#clickbutton")

let heading1 = document.querySelector("h1");


// button.onclick = function(){
//     heading1.style.background = "blue"
// }
button.addEventListener("click",()=>{
    heading1.style.background = "pink"
})


function changeClour(){
    heading1.style.background = "pink"
}
console.dir(button);
console.log(button);
