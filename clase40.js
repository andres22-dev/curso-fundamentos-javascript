const btnEmp = document.getElementById('btnEmpezar');
const azulino =  document.getElementById('azulino');
const rojino = document.getElementById('rojino');
const amarillino = document.getElementById('amarillino');
const verdino = document.getElementById('verdino');

class Juego{

 constructor(){
  
    this.inicializar();


 }

 inicializar(){

  btnEmp.classList.add('ocultarBtn');

 }

}


function empezarJuego(){

  var juego = new Juego();

}

