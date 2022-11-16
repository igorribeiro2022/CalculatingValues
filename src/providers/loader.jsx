import { createContext, useState } from "react";

export const LoaderContext = createContext({});

export function LoaderPage({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}
