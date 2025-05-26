function obtenerDatos(callback) {
  setTimeout(() => {
    callback("Datos recibidos");
  }, 1000);
}

obtenerDatos(function (resultado) {
  console.log(resultado);
});
