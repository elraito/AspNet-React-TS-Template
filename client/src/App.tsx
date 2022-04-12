import { useEffect, useState } from "react";
import "./App.css";

type Forecast = {
  date: Date;
  temperatureC: String;
  temperatureF: String;
  summary: String;
};

function App() {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    populateweatherData();
  }, []);

  const populateweatherData = async () => {
    const response = await fetch("api/weatherforecast");
    const data = await response.json();
    setForecasts(data);
    setLoading(false);
  };

  const renderForecastsTable = (forecasts: Forecast[]) => {
    return (
      <table className="center-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast: Forecast) => (
            <tr key={forecast.date.toString()}>
              <td>{forecast.date.toString()}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const contents = loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderForecastsTable(forecasts)
  );

  return (
    <div className="App">
      <h1 id="tableLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}

export default App;
