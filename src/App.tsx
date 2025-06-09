
import './App.css'

import LucesSemaforo from './components/LucesSemaforo'
import BotonesSemaforo from './components/BotonesSemaforo'
import { SemaforoProvider } from './context/SemaforoContext'


function App() {

  return (
    <SemaforoProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-8 text-black-800">Examen Semáforo</h1>
        <LucesSemaforo />
        <BotonesSemaforo />
      </div>
    </SemaforoProvider>
  )
}

export default App
