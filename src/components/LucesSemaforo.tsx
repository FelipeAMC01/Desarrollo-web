import { useSemaforo } from '../context/SemaforoContext';

const LucesSemaforo = () => {
    const { color } = useSemaforo();

  // Función para definir la clase según el color activo
    const claseLuz = (miColor: string) => `w-24 h-24 rounded-full mb-4 transition-opacity duration-300 ${
    color === miColor ? 'opacity-100' : 'opacity-30'}`;

    return (
        <>
            <div className={claseLuz('rojo')} style={{ backgroundColor: 'red' }}></div>
            <div className={claseLuz('amarillo')} style={{ backgroundColor: 'yellow' }}></div>
            <div className={claseLuz('verde')} style={{ backgroundColor: 'green' }}></div>
        </>
    );
};

export default LucesSemaforo;