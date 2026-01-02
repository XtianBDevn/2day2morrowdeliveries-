"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FaMapMarkerAlt } from "react-icons/fa";

// Richmond, VA coordinates
const RICHMOND_CENTER = [-77.4360, 37.5407];

const coverageAreas = [
  { name: "Richmond", lat: 37.5407, lng: -77.436, radius: "Primary" },
  { name: "Henrico", lat: 37.5066, lng: -77.3458, radius: "Primary" },
  { name: "Chesterfield", lat: 37.3771, lng: -77.5048, radius: "Primary" },
  { name: "Mechanicsville", lat: 37.6088, lng: -77.3733, radius: "Secondary" },
  { name: "Ashland", lat: 37.7588, lng: -77.4797, radius: "Secondary" },
  { name: "Chester", lat: 37.3565, lng: -77.4444, radius: "Secondary" },
  { name: "Short Pump", lat: 37.6501, lng: -77.6113, radius: "Primary" },
  { name: "Glen Allen", lat: 37.6634, lng: -77.4905, radius: "Primary" },
];

export default function CoverageMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set Mapbox access token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    if (!mapboxgl.accessToken) {
      console.warn("Mapbox token not set. Please add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local");
      return;
    }

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: RICHMOND_CENTER as [number, number],
      zoom: 10,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      if (!map.current) return;

      // Add coverage circles
      coverageAreas.forEach((area, index) => {
        const radius = area.radius === "Primary" ? 5000 : 3000;
        const color = area.radius === "Primary" ? "#FDB927" : "#552583";

        // Create marker element
        const el = document.createElement("div");
        el.className = "coverage-marker";
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.cursor = "pointer";

        // Add marker
        const marker = new mapboxgl.Marker({
          element: el,
          color: color,
        })
          .setLngLat([area.lng, area.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`
              <div class="p-2">
                <h3 class="font-bold text-lg">${area.name}</h3>
                <p class="text-sm text-gray-600">${area.radius} Coverage Area</p>
              </div>
            `)
          )
          .addTo(map.current!);

        markersRef.current.push(marker);

        // GSAP animation for markers
        gsap.fromTo(
          el,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)",
          }
        );

        // Add circle layer for coverage area
        if (map.current) {
          const layerId = `coverage-${area.name}`;

          map.current.addSource(layerId, {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [area.lng, area.lat],
              },
              properties: {},
            },
          });

          map.current.addLayer({
            id: layerId,
            type: "circle",
            source: layerId,
            paint: {
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, radius / 10],
                ],
                base: 2,
              },
              "circle-color": color,
              "circle-opacity": 0.1,
              "circle-stroke-width": 2,
              "circle-stroke-color": color,
              "circle-stroke-opacity": 0.3,
            },
          });
        }

        // Click handler
        el.addEventListener("click", () => {
          setSelectedArea(area.name);
          map.current?.flyTo({
            center: [area.lng, area.lat],
            zoom: 12,
            duration: 1500,
          });
        });
      });

      // Animate camera on load
      gsap.to({}, {
        duration: 3,
        onUpdate: function () {
          const progress = this.progress();
          map.current?.rotateTo(progress * 360, { duration: 0 });
        },
      });
    });

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.current?.remove();
    };
  }, []);

  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Coverage Area
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Serving Richmond, VA and surrounding areas with fast, reliable
            freight delivery
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div
              ref={mapContainer}
              className="w-full h-[500px] rounded-xl shadow-2xl overflow-hidden"
            />
          </motion.div>

          {/* Coverage areas list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-freight-purple-50 to-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-freight-gold-500" />
                Service Areas
              </h3>
              <div className="space-y-3">
                {coverageAreas.map((area) => (
                  <motion.button
                    key={area.name}
                    onClick={() => {
                      setSelectedArea(area.name);
                      map.current?.flyTo({
                        center: [area.lng, area.lat],
                        zoom: 12,
                        duration: 1500,
                      });
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedArea === area.name
                        ? "bg-freight-gold-500 text-white shadow-lg"
                        : "bg-white hover:bg-freight-purple-50"
                    }`}
                  >
                    <div className="font-semibold">{area.name}</div>
                    <div
                      className={`text-sm ${
                        selectedArea === area.name
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {area.radius} Coverage
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-freight-gold-50 to-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">
                Need service outside these areas?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                We may be able to accommodate special requests. Give us a call!
              </p>
              <a
                href="tel:8049877178"
                className="block text-center bg-freight-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-freight-purple-700 transition-colors"
              >
                Call (804) 987-7178
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .coverage-marker {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 14c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>');
          background-size: contain;
          display: block;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s ease;
        }

        .coverage-marker:hover {
          transform: scale(1.2);
        }

        .mapboxgl-popup-content {
          padding: 0;
          border-radius: 0.5rem;
        }
      `}</style>
    </section>
  );
}
