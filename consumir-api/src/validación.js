export async function obtenerMonedas() {
  const token = localStorage.getItem("token"); // Obtener token almacenado

  if (!token) {
    console.error("Token no encontrado. Primero inicia sesión.");
    return null;
  }

  try {
    const response = await fetch("http://localhost:3000/monedas", {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error en la solicitud: ${errorMessage}`);
    }

    return await response.json(); // Retorna los datos en JSON
  } catch (error) {
    console.error("Error al obtener monedas:", error);
    return null;
  }
}
