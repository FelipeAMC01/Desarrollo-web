function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos recibidos con promesa");
    }, 1000);
  });
}

obtenerDatos()
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));