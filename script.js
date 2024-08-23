document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los inputs con la clase 'textInput'
    const inputs = document.querySelectorAll('.textInput');
  
    inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
        input.style.borderColor = '#333'; // Cambia el color del borde
      });
  
      // Estilo cuando el campo de texto pierde el foco
      input.addEventListener('blur', function() {
        input.style.borderColor = '#ccc'; // Restaura el borde original
      });
    });
  });   