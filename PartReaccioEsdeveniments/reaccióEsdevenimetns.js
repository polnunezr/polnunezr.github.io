
function hanFetClick(id) {
	if(id == 'imagen') {
 		alert('Esto es una imagen');
  } else {
  alert('Esto es un boton');
  }
}

function addTasca() {
 let tasques = [];
 let tasca = document.getElementById('task').value;
 tasques.push(tasca);
 let $i = Math.floor(Math.random() * tasques.length)
document.getElementById('demo').innerHTML += tasques[$i] + ' ,';


function countdownSetInterval() {
  setInterval(function(){ for(let $i = 5; $i > 0; $i--) {
    alert($i);
  alert($i)}},6000);
}