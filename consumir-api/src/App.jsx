import { useState, useEffect } from "react";
import "./app.css";
import { obtenerToken } from "./obtenertoken";
import { obtenerMonedas } from "./validación";
function App() {

  useEffect(() => {
    async function cargarDatos() {
      const monedas = await obtenerMonedas();
      setData(monedas);
    }

    cargarDatos();
  }, []);



  const [data, setData] = useState(null);
  return (
    <div className="App">
      <h1>Api-Conversión</h1>
      <button onClick={obtenerToken}>Iniciar Sesión</button>
      <div className="card">
        {data?.length > 0 ? (
          <ul>
            {data.map((moneda) => (
              <li key={moneda.id}>
                {moneda.destino}: {moneda.valor}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay datos disponibles o inicia sesión.</p> 
        )}
      </div>
    </div>
  );
}


export default App;
