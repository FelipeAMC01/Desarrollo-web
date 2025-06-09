/*1. ¿Qué hace el hook useState? Dé un ejemplo.
Se usa para manejar un componente funcional, permitiendo que tenga un estado inicial y que se pueda actualizar
con la acci'on de algo adicional como un boton. Por ejemplo un contador, el botón del ejercicio del semaforo.
Ejemplo
import React, { useState } from 'react';
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
2. ¿Qué es un fragmento (<> </>) y para qué sirve?
Permite agrupar varios elementos sin necesidad de crear un nodo extra en el DOM y puede devolver los multiples
elementos desde el comoponente sin crear div innecesarios.
3. ¿Qué diferencia hay entre useContext y useState?
La diferencia radica en que el primero maneja un estado global que puede ser compartido entre varios
componentes, mientras que el segundo es para manejar el estado local de un componente específico.
4. ¿Cuál es la estructura básica de un componente funcional? 
import React from 'react';  Para importar React y usar JSX
function NombreComponente(props) {  Se define el nombre de la función y se reciben las props, es reutilizable
  // Opcional: lógica o hooks aquí

  return (  Lo que se retorna aquí, se mostrara en pantalla
    <div>
      {JSX que describe la UI }
      Hola, {props.nombre}
    </div>
  );
}
export default NombreComponente;  Exporata el como componente para que pueda ser usado en otros archivos
*/
