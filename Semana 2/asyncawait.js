function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos recibidos con async/await");
    }, 1000);
  });
}

async function mostrarDatos() {
  try {
    const resultado = await obtenerDatos();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

mostrarDatos();
