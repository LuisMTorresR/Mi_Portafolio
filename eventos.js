//menu pegajoso

var menu = document.getElementById('menu');
var altura = menu.offsetTop;
window.addEventListener('scroll', function(){
  if(window.pageYOffset > altura){
    menu.classList.add('fixed');
  } else{
    menu.classList.remove('fixed');
  }
});

//ventana modal

var modal = document.getElementById('miModal');
var flex = document.getElementById('flex');
var abrir = document.getElementById('abrir');
var cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
  modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
  modal.style.display = 'none';
});

window.addEventListener('click', function(e){
  if (e.target == flex){
    modal.style.display = 'none';
  }

});