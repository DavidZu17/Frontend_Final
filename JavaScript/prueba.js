const pista = document.getElementById('pista');
  const tarjetas = document.querySelectorAll('.tarjeta-vuelo');
  let indice = 0;

  function actualizarCarrusel() {
    pista.style.transform = `translateX(-${indice * 100}%)`;
  }

  function moverDerecha() {
    indice = (indice + 1) % tarjetas.length;
    actualizarCarrusel();
  }

  function moverIzquierda() {
    indice = (indice - 1 + tarjetas.length) % tarjetas.length;
    actualizarCarrusel();
  }

  // Movimiento automático cada 5 segundos
  let autoPlay = setInterval(moverDerecha, 5000);

  // Detener el auto-movimiento cuando el usuario interactúa
  document.querySelector('.ventana-carrusel').addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
  });

  document.querySelector('.ventana-carrusel').addEventListener('mouseleave', () => {
    autoPlay = setInterval(moverDerecha, 5000);
  });