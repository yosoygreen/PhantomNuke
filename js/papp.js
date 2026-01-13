let modo = 'gym';
let indice = 0;

function filtrarEntrenadores() {
  return entrenadores.filter(e => modo === 'gym' ? e.Categoria === 'gym' : e.Categoria === '4elit');
}

function renderEntrenador() {
  const lista = filtrarEntrenadores();
  const entrenador = lista[indice];
  const equipo = equipos[entrenador.Nombre] || [];
  const tipoClass = `type-${entrenador.tipo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;
  const fondoClass = `bg-${entrenador.tipo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;

  const div = document.getElementById('entrenador-view');
  div.innerHTML = '';

  document.body.className = fondoClass;

  const img = document.createElement('img');
  img.src = entrenador.img;
  img.alt = entrenador.Nombre;
  img.className = `entrenador-img ${tipoClass}`;

  const info = document.createElement('div');
  info.className = 'entrenador-info';

  const nombre = document.createElement('h1');
  nombre.textContent = entrenador.Nombre;

  const tipo = document.createElement('span');
  tipo.className = `tipo-label ${tipoClass}`;
  tipo.textContent = entrenador.tipo;

  const descripcion = document.createElement('p');
  descripcion.innerHTML = `<strong>Descripcion:</strong><br>${entrenador.Descripcion}`;

  const frase = document.createElement('p');
  frase.innerHTML = `<strong>Frase característica:</strong><br>“${entrenador.Frase}”`;

  const equipoDiv = document.createElement('div');
  equipoDiv.className = 'equipo-pokemon';

  equipo.forEach(pokeId => {
    const poke = pokemones[pokeId];
    if (poke) {
      const pokeImg = document.createElement('img');
      pokeImg.src = poke.img;
      pokeImg.alt = poke.nombre;
      equipoDiv.appendChild(pokeImg);
    }
  });

  nombre.appendChild(tipo);
  info.appendChild(nombre);
  info.appendChild(descripcion);
  info.appendChild(frase);
  info.appendChild(equipoDiv);

  div.appendChild(img);
  div.appendChild(info);
}

document.getElementById('arrow-left').addEventListener('click', () => {
  const lista = filtrarEntrenadores();
  indice = (indice - 1 + lista.length) % lista.length;
  renderEntrenador();
});

document.getElementById('arrow-right').addEventListener('click', () => {
  const lista = filtrarEntrenadores();
  indice = (indice + 1) % lista.length;
  renderEntrenador();
});

document.getElementById('alternarBtn').addEventListener('click', () => {
  modo = modo === 'gym' ? '4elit' : 'gym';
  indice = 0;
  renderEntrenador();
});

window.addEventListener('DOMContentLoaded', () => {
  renderEntrenador();
});

const sonidoFlecha = document.getElementById('sonido-flecha');
const sonidoAlternar = document.getElementById('sonido-alternar');

document.getElementById('arrow-left').addEventListener('click', () => {
  sonidoFlecha.currentTime = 0;
  sonidoFlecha.play();
  const lista = filtrarEntrenadores();
  indice = (indice - 1 + lista.length) % lista.length;
  renderEntrenador();
});

document.getElementById('arrow-right').addEventListener('click', () => {
  sonidoFlecha.currentTime = 0;
  sonidoFlecha.play();
  const lista = filtrarEntrenadores();
  indice = (indice + 1) % lista.length;
  renderEntrenador();
});

document.getElementById('alternarBtn').addEventListener('click', () => {
  sonidoAlternar.currentTime = 0;
  sonidoAlternar.play();
  modo = modo === 'gym' ? '4elit' : 'gym';
  indice = 0;
  renderEntrenador();
});
