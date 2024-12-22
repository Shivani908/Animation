const target = document.getElementById('target');
let yes = document.getElementById('yes');
const answer = document.getElementById('answer')

yes.addEventListener('click', () => {
  // alert("yes i know you");
   answer.change.innerHTML("Yes i know")
});


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