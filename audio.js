var song=new Audio('http://168.138.100.237:8000/;');

  function plays(){
    var boton=document.getElementById('repro');
    song.play();
        boton.hidden=true;
        var boton1=document.getElementById('pau');
        boton1.hidden=false;
  }

    function pausar(){
        song.pause();
        var boton=document.getElementById('pau');
        var boton1=document.getElementById('repro');
        boton.hidden=true;
        boton1.hidden=false;
    }

    function subirvolumen(){
        var volumen=song.volume;
        var volumen1=volumen+0.1;
        if (volumen1>0){
            var silencio=document.getElementById('silencio');
            var silenciado=document.getElementById('silenciado');
    silenciado.hidden=true;
    silencio.hidden=false;
        }
        song.volume=volumen1;

    }

    function bajarvolumen(){
        var volumen=song.volume;
        volumen1=volumen-0.1;
        if (volumen1<=0.1){
            var silencio=document.getElementById('silencio');
            var silenciado=document.getElementById('silenciado');
            silencio.hidden=true;
            silenciado.hidden=false;
        }
        song.volume=volumen1;
    }


    function silenciar(){
        song.volume=0;
        var silencio=document.getElementById('silencio');
        var silenciado=document.getElementById('silenciado');
        silencio.hidden=true;
        silenciado.hidden=false;
    }

    function quitsilencio(){
        song.volume=1;
        var silencio=document.getElementById('silencio');
        var silenciado=document.getElementById('silenciado');
   silenciado.hidden=true;
   silencio.hidden=false;
    }