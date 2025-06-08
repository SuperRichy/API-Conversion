export async function obtenerToken() {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario: "admin", password: "123" })
    });

    if (!response.ok) throw new Error("Error en la autenticación");

    const token = await response.text();
    localStorage.setItem("token", token); // Guardar token
    console.log("Token guardado:", token);
  } catch (error) {
    console.error("Error al obtener el token:", error);
  }
}
