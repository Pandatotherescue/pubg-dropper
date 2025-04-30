const mapSelect = document.getElementById('mapSelect');
const mapImage = document.getElementById('map');
const dropDot = document.getElementById('dropDot');
const coords = document.getElementById('Coordinates');

mapSelect.addEventListener('change', () => {
  const selectedMap = mapSelect.value;
  mapImage.src = `maps/${selectedMap}.jpg`;
  dropDot.style.display = 'none';
});

async function suggestDrop() {
  const mapName = mapSelect.value;
  const mapContainer = document.getElementById('map-container');
  const width = mapContainer.clientWidth;
  const height = mapContainer.clientHeight;

  try {
    const response = await fetch('dropzones.json');
    const data = await response.json();

    if (data[mapName] && data[mapName].length > 0) {
      const zones = data[mapName];
      const zone = zones[Math.floor(Math.random() * zones.length)];

      const x = (zone.x / 100) * width;
      const y = (zone.y / 100) * height;

      dropDot.style.left = `${x}px`;
      dropDot.style.top = `${y}px`;
      dropDot.style.display = 'block';
      coords.innerHTML = `${zone.name} (${zone.x.toFixed(2)} : ${zone.y.toFixed(2)})`;

    } else {
      coords.innerHTML = "No drop zones available for this map.";
    }
  } catch (error) {
    console.error("Failed to load dropzones.json", error);
    coords.innerHTML = "Error loading drop zones.";
  }
}
