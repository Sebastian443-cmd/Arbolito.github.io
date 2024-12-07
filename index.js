// Añadir luces de colores que parpadean
function addLights() {
  const tree = document.querySelector('.tree');
  for (let i = 0; i < 50; i++) {
      const light = document.createElement('div');
      light.classList.add('light');
      // Posición aleatoria dentro del árbol
      const x = Math.random() * 300 - 150; // Ancho aproximado del árbol
      const y = Math.random() * 300; // Altura aproximada del árbol
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
      light.style.backgroundColor = getRandomColor();
      tree.appendChild(light);
  }
}

// Generar un color aleatorio
function getRandomColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Animar el mensaje cambiando su color
const message = document.getElementById('message');
let colorIndex = 0;

function changeMessageColor() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  message.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

// Iniciar luces y animaciones
addLights();
setInterval(changeMessageColor, 1000);
