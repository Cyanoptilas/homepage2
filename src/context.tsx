import React, { createContext, FC, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

type ContextType = {
  setCount: (value: number) => void;
  count: number;
};

export const ExampleContext = createContext<ContextType>({} as ContextType);

export const ExampleProvider: FC<Props> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <ExampleContext.Provider value={{ count, setCount }}>
      {children}
    </ExampleContext.Provider>
  );
};
