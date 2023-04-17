import { createContext, useState, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
};

const IsHoverContext = createContext({} as State);

export function useCountContext() {
  return useContext(IsHoverContext);
}

export function IsHoverProvider({ children }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <IsHoverContext.Provider value={{ isHover, setIsHover }}>
      {children}
    </IsHoverContext.Provider>
  );
}
