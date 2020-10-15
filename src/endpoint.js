export const endpoint = {
    cityWeather: (query, apiKey) => `https://api.openweathermap.org/data/2.5/weather/?q=${query}&units=metric&APPID=${apiKey}`,
    forecast: (code, apiKey) => `https://api.openweathermap.org/data/2.5/forecast?q=${code}&units=metric&APPID=${apiKey}`
}