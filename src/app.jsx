import { useState } from "react";
import header from "./assets/header.png";
import Map from "./components/map.jsx";
import News from "./components/news.jsx";

export default function App() {
  return (
    <div className="bg-image">
      <div className="h-[10vh] w-full flex flex-row justify-between items-center px-10 border-white/10 bg-white/5 backdrop-blur-xs">
        <div>
          <h1 className="text-gray-200 text-[2.5vw] oswald">
            Orbit
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#265bbe] to-[#4a1ada]">
              Hub
            </span>
          </h1>
          <p className="text-gray-400 text-sm">
            Real-time ISS tracking in a modern space dashboard.
          </p>
        </div>
        <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white transition hover:bg-white/15">
          Help
        </button>
      </div>
      <div className="box flex flex-row gap-6 m-5 max-w-[95vw] mx-auto">
        <div className="section1 w-[38vw] min-w-90">
          <div className="text text-[3vw] text-gray-200 bungee mt-10">
            <h1>Track the ISS.</h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3377f6] to-[#5d28ff]">
              Explore the Cosmos.
            </h1>
          </div>
          <div className="h-[60vh] mt-7 rounded-3xl border border-white/40 p-4 bg-white/2 backdrop-blur-sm shadow-lg  text-gray-200">
            <News />
          </div>
        </div>
        <div className="section2 w-full max-w-[56vw] min-w-105 flex flex-col gap-4 mt-10">
          <div className="h-[80vh] w-full rounded-4xl border border-white/20 bg-white/2 shadow-black/30 backdrop-blur-sm overflow-hidden">
            <div className="map-header flex items-center justify-between px-6 pt-3 pb-1 border-b border-white/20 text-gray-200">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#88b4ff]">
                  Live Satellite
                </p>
                <h2 className="text-2xl font-semibold">ISS Position</h2>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300">
                Updated every 5s
              </span>
            </div>
            <div className="map h-[calc(80vh-72px)] w-full">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
