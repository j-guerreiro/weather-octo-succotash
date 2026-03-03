export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code?: string;
  admin1?: string;
}

export interface WeatherData {
  temperature: number;
  windspeed?: number;
  winddirection?: number;
  weathercode?: number;
  time?: string;
}

// simple wrapper to keep legacy import when form action was used
export const search = () => {
  console.log("please use fetchLocations or fetchWeather instead");
};

/**
 * Query the Open-Meteo geocoding API for places matching the given text.
 *
 * The service is public and does not require an API key.  Results are
 * limited to the first 5 matches by default.
 */
export async function fetchLocations(query: string): Promise<Location[]> {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query
  )}&count=5`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error("location lookup failed");
  }
  const data = await resp.json();
  return data.results || [];
}

/**
 * Fetch the current weather for the given latitude/longitude pair.
 */
export async function fetchWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error("weather lookup failed");
  }
  const data = await resp.json();
  return data.current_weather;
}
