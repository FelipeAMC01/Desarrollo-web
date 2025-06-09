import React, { createContext, useState, type ReactNode, useContext } from 'react';

type SemaforoContextType = {
  color: string;
  cambiarColor: (nuevoColor: string) => void;
};

const SemaforoContext = createContext<SemaforoContextType | undefined>(undefined);

export const SemaforoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<string>('rojo');

  const cambiarColor = (nuevoColor: string) => {
    setColor(nuevoColor);
  };

  return (
    <SemaforoContext.Provider value={{ color, cambiarColor }}>
      {children}
    </SemaforoContext.Provider>
  );
};

export const useSemaforo = () => {
  const context = useContext(SemaforoContext);
  if (!context) {
    throw new Error('useSemaforo debe usarse dentro de un SemaforoProvider');
  }
  return context;
};