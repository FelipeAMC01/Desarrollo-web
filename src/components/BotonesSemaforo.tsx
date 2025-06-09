import React from "react";

import { useSemaforo } from "../context/SemaforoContext";

const BotonesSemaforo = () => {
    const { cambiarColor } = useSemaforo();

    return (
        <div className="flex flex-col items-center space-y-3 mt-6">

            <button
                className="bg-red-600 text-white px-4 py-2 rounded mr-2 hover:bg-red-700"
                onClick={() => cambiarColor('rojo')}
            >
                Luz Roja
            </button>
            <button
                className="bg-yellow-400 text-black px-4 py-2 rounded mr-2 hover:bg-yellow-500"
                onClick={() => cambiarColor('amarillo')}
            >
                Luz Amarilla
            </button>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => cambiarColor('verde')}
            >
                Luz Verde
            </button>
        </div>
  );
}

export default BotonesSemaforo;