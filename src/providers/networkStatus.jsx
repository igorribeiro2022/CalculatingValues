import { createContext, useState } from "react";

export const StatusContext = createContext({});

export function NetworkStatus({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const initialStatus = isOnline === true ? "online" : "offline";
  const [status, setStatus] = useState(initialStatus);

  window.addEventListener("offline", (e) => {
    setIsOnline(false);
    setStatus("offline");
  });

  window.addEventListener("online", (e) => {
    setIsOnline(true);
    setStatus("online");
  });

  return (
    <StatusContext.Provider value={{ status, isOnline }}>
      {children}
    </StatusContext.Provider>
  );
}
