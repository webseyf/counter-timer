
let count = 0;

document.getElementById("increase").addEventListener("click", function (){
  count ++;
  document.getElementById("label").innerHTML = count;
})

document.getElementById("decrease").addEventListener("click", function (){
  count --;
  document.getElementById("label").innerHTML = count;
})
document.getElementById("reset").addEventListener('click', function(){
  count = 0;
  document.getElementById("label").innerHTML = count;
})
