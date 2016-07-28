var gonzagas, pereira, beto;

gonzagas = document.getElementById("gonzagas");
pereira = document.getElementById("pereira");
beto = document.getElementById("beto");

gonzagas.addEventListener("click",gonzagasFullScreen,false);
pereira.addEventListener("click", pereiraFullScreen, false);
beto.addEventListener("click", betoFullScreen, false);

function gonzagasFullScreen(){
  if(gonzagas.requestFullScreen){
    gonzagas.requestFullScreen();
    gonzagas.play();
  } else if(gonzagas.webkitRequestFullScreen){
    gonzagas.webkitRequestFullScreen();
    gonzagas.play();
  } else if(gonzagas.mozRequestFullScreen){
    gonzagas.mozRequestFullScreen();
    gonzagas.play();
  }
}

function pereiraFullScreen(){
  if(pereira.requestFullScreen){
    pereira.requestFullScreen();
    pereira.play();
  } else if(pereira.webkitRequestFullScreen){
    pereira.webkitRequestFullScreen();
    pereira.play();
  } else if(pereira.mozRequestFullScreen){
    pereira.mozRequestFullScreen();
    pereira.play();
  }
}

function betoFullScreen(){
  if(beto.requestFullScreen){
    beto.requestFullScreen();
    beto.play();
  } else if(beto.webkitRequestFullScreen){
    beto.webkitRequestFullScreen();
    beto.play();
  } else if(beto.mozRequestFullScreen){
    beto.mozRequestFullScreen();
    beto.play();
  }
}

document.addEventListener("dblclick", isVideoInFullsreen);

function isVideoInFullsreen() {
  if (document.exitFullscreen) {
    gonzagas.exitFullscreen();
    pereira.exitFullscreen();
    beto.exitFullscreen();
    gonzagas.load();
    pereira.load();
    beto.load();
  } else if (document.webkitExitFullscreen) {
    gonzagas.webkitExitFullscreen();
    pereira.webkitExitFullscreen();
    beto.webkitExitFullscreen();
    gonzagas.load();
    pereira.load();
    beto.load();
  } else if (document.mozCancelFullScreen) {
    gonzagas.mozCancelFullScreen();
    pereira.mozCancelFullScreen();
    beto.mozCancelFullScreen();
    gonzagas.load();
    pereira.load();
    beto.load();
  }
}
