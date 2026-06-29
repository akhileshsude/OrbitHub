# OrbitHub

OrbitHub is a React-based real-time space dashboard that tracks the International Space Station (ISS) and surfaces the latest spaceflight news. The project combines interactive mapping, live API data, and a polished dark UI for a modern satellite tracking experience.

## Key Features

- Real-time ISS tracking with automatic map recentering
- Live satellite icon marker on a Leaflet map
- Space news feed powered by an external API
- Stylish dark dashboard design with glassmorphism cards

## APIs Used

- **ISS location API**: `https://api.wheretheiss.at/v1/satellites/25544`
  - Fetches the current latitude and longitude of the ISS
  - Data is polled approximately every 5 seconds to keep the marker live
- **Space news API**: `https://api.spaceflightnewsapi.net/v4/articles/?limit=10`
  - Loads the latest spaceflight news articles
  - Displays article titles, images, and links for quick reading

## Project Structure

- `src/app.jsx` — main application layout and dashboard sections
- `src/components/map.jsx` — Leaflet map component, ISS marker, and recenter logic
- `src/components/news.jsx` — news feed component with API-driven article list
- `src/style.css` — global styles and custom utility classes
- `src/assets/` — image assets including satellite icon and background

## Tech Stack

- React
- Vite
- Tailwind CSS
- Leaflet / React Leaflet
- Fetch API for live data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in the terminal.

## Notes

- The ISS marker is rendered using a custom satellite icon and is kept visible by adjusting map recentering near the left/right edges.
- The news panel includes a scrollable container so users can browse up to 10 articles without overflowing the layout.

## Contribution

Feel free to improve the dashboard by adding additional satellite data, enhancing the news layout, or introducing more space telemetry panels.
