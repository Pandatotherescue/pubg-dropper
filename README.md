# PUBG Drop Suggester 🎯

A lightweight web application that helps PUBG players settle the age-old debate — where should we drop?

This tool randomly suggests a drop location on a selected map, making it easier and more fun to jump straight into action without wasting time arguing.

---

## 🚀 Features (Current)

- 🔘 Map selection (e.g., Erangel, Miramar)
- 🗽️ Dynamic map display based on selection
- 🎯 Random drop suggestion visualized on the map
- 🐱 Coordinates of the drop shown
- 🔁 Ability to reroll drop locations

---

## 📁 Project Structure

```
📁 pubg-drop-suggester
│
├── index.html           # Main HTML file
├── styles.css           # Styling with PUBG theme
├── script.js            # App logic and interactivity
└── maps/
    ├── erangel.jpg
    └── miramar.jpg
    └── sanhok.jpg
    └── vikendi.jpg
    └── deston.jpg
    └── taego.jpg
    └── karakhin.jpg
    └── palamo.jpg
```

---

## 🚣️ Roadmap (Upcoming Features)

### Phase 1: Data-Driven Improvements
- [ ] Use a `dropzones.json` file for location-based suggestions
- [ ] Add location names and highlight them
- [ ] Assign drop likelihoods (weighted randomness)
- [ ] Filter drops by loot quality / popularity

### Phase 2: UX & UI Enhancements
- [ ] Add confirmation/re-roll buttons
- [ ] Show location name and info overlay
- [ ] Sound effects or animations on drop
- [ ] Light/dark mode toggle (with PUBG theming)

### Phase 3: Analytics & API
- [ ] Track favorite or most used drop zones
- [ ] Sync with PUBG API (if public data available)
- [ ] Display heatmaps or popular zones based on real data

---

## 🛠️ Setup & Usage

1. Clone or download the repository.
2. Make sure your `maps/` folder contains map images (`erangel.jpg`, `miramar.jpg`).
3. Open `index.html` in your browser.
4. Select a map, and hit **Suggest Drop**!

---

## 📄 License

MIT — feel free to use, remix, or contribute!
