import { createContext, useState } from "react";

export const ResponseContext = createContext({});

export function ResponseAxios({ children }) {
  const [resp, setResp] = useState({1: 32432});

  return (
    <ResponseContext.Provider value={{ resp, setResp }}>
      {children}
    </ResponseContext.Provider>
  );
}
