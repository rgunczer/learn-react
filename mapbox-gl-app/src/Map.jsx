import { useRef, useEffect, useState } from 'react'

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN;

const INITIAL_CENTER = [
  12.550343,
  55.665957
];
const INITIAL_ZOOM = 8;

function Map() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      // style: 'mapbox://styles/mapbox/light-v11',
      center: center,
      zoom: zoom,
      maxZoom: 15,

    });

    new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(mapRef.current);

    new mapboxgl.Marker({ color: 'black', rotation: 45 })
      .setLngLat([12.65147, 55.608166])
      .addTo(mapRef.current);

    mapRef.current.on('move', () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    let marker = null;

    mapRef.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      // Uncomment one of the following methods to try them out:

      // 1. Instantly change the center:
      // mapRef.current.setCenter([lng, lat]);

      // 2. Jump to the new center without animation:
      // mapRef.current.jumpTo({ center: [lng, lat] });

      // 3. Smoothly ease to the new center with customizable animation:
      mapRef.current.easeTo({
        center: [lng, lat],
        duration: 600, // animation duration in milliseconds
        zoom: 15,
      });

      if (marker) {
        marker.remove();
      }

      marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(mapRef.current);
    });

    // Define your bounding box as [ [minLng, minLat], [maxLng, maxLat] ]
    // const bounds = [
    //   [-75, 39], // Southwest coordinates
    //   [-74, 41]  // Northeast coordinates
    // ];
    const bounds = [[-5.225, 42.333], [9.55, 52.2]];
    // Adjust the map view to fit the bounding box
    mapRef.current.fitBounds(bounds, {
      padding: 20, // optional padding around the bounds
      duration: 1000 // optional animation duration in milliseconds
    });

    return () => {
      mapRef.current.remove();
    }
  }, []);

  const handleButtonClick = () => {
    const mapBounds = mapRef.current.getBounds();
    console.log("[MAP-BOUNDS]", mapBounds);

    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  }

  return (
    <>
      <div className="sidebar">
        Longtitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom {zoom.toFixed(2)}
      </div>
      <button className='reset-button' onClick={handleButtonClick}>
        Reset
      </button>
      <div id='map-container' ref={mapContainerRef} />
    </>
  );
}

export default Map;
