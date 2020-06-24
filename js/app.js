(function () {
  const input = document.querySelector(".texto");
  const contenedorTextoSalida = document.querySelector(".mensaje-final");
  const boton = document.querySelector(".boton");

  boton.addEventListener("click", copiarMensaje);

  function copiarMensaje() {
    contenedorTextoSalida.textContent = input.value;
    input.value = ""; //VACIAR EL INPUT LUEGO DE DAR CLICK
  }
})();
