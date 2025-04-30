const mapSelect = document.getElementById('mapSelect');
const mapImage = document.getElementById('map');
const dropDot = document.getElementById('dropDot');
const coords = document.getElementById('Coordinates');

mapSelect.addEventListener('change', () => {
  const selectedMap = mapSelect.value;
  mapImage.src = `maps/${selectedMap}.jpg`;
  dropDot.style.display = 'none';
});

function suggestDrop() {
  const mapContainer = document.getElementById('map-container');
  const width = mapContainer.clientWidth;
  const height = mapContainer.clientHeight;

  const x = Math.random() * width;
  const y = Math.random() * height;

  dropDot.style.left = `${x}px`;
  dropDot.style.top = `${y}px`;
  dropDot.style.display = 'block';

  const xCoord = x.toFixed(2);
  const yCoord = y.toFixed(2);

  console.log(`x ${xCoord}   :   y ${yCoord}`);
  coords.innerHTML = `x ${xCoord}   :   y ${yCoord}`;
}
