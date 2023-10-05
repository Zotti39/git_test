const btn = document.getElementById("btn");
btn.addEventListener("click",function(e){
    console.log(e.target);
    e.target.style.background = "blue";
});

/*second part*/
const gn = document.querySelectorAll(".groupNode");
gn.forEach((button)=>{
    button.addEventListener("click", ()=> {
    console.log(button.id);
    })
})