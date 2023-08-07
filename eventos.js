document.addEventListener('DOMContentLoaded', function () {
    const botonSaludar = document.getElementById('saludarBoton');
  
    botonSaludar.addEventListener('click', function (event) {
      event.stopPropagation();
      mostrarAlerta();
    });
  
    function mostrarAlerta() {
      alert('¡Hola!');
    }
  });
  