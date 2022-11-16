import { createContext, useState } from "react";

export const ResponseContext = createContext({});

export function ResponseAxios({ children }) {
  const [resp, setResp] = useState(null);

  return (
    <ResponseContext.Provider value={{ resp, setResp }}>
      {children}
    </ResponseContext.Provider>
  );
}
