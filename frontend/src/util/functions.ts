import { LatLng } from 'leaflet';


// Calculate the pixel offset to meters based on zoom level and a rough estimate
function pixelsToMeters(pixels:number, zoom:number) {
  // Rough estimate, adjust as needed
  const metersPerPixel = 156543.03392 * Math.cos(0) / Math.pow(2, zoom);
  return pixels * metersPerPixel;
}


// Calculate the offset coordinates based on the original coordinates, pixels, and zoom level
export function calculateOffsetCoordinates(lat:number, lng:number, offsetX:number, offsetY: number, zoom: number) {
  const xOffsetMeters = pixelsToMeters(offsetX, zoom);
  const yOffsetMeters = pixelsToMeters(offsetY, zoom);

  const earthRadius = 6378137; // Earth's radius in meters
  const latOffset = yOffsetMeters / earthRadius * (180 / Math.PI);
  const lngOffset = xOffsetMeters / (earthRadius * Math.cos(Math.PI * lat / 180)) * (180 / Math.PI);

  const newLat = lat + latOffset;
  const newLng = lng + lngOffset;


  return  new LatLng(newLat,newLng)
}

