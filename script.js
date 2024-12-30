const target = document.getElementById('target');
let yes = document.getElementById('yes');
var ans = document.getElementById("ans")

function showans(){
document.getElementById("ans").innerHTML = "<h1> Yes I Know You </h1>"
// document.getElementById("yes").onclick = showans;
}
document.getElementById("yes").onclick = showans;



function moveTarget(){
    const maxWith = 500;
    const maxHeight = 500;

    const ranomX = Math.floor(Math.random() * maxWith);
    const ranomY = Math.floor(Math.random() * maxHeight);

    target.style.left = ranomX + 'px';
    
    target.style.top = ranomY + 'px'
}


target.addEventListener('mouseenter',function(){
    moveTarget();
})
