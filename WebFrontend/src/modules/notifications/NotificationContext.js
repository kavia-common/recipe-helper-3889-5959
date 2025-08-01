import React, { createContext, useState, useCallback, useContext } from 'react';

// PUBLIC_INTERFACE
const NotificationContext = createContext(null);

// PUBLIC_INTERFACE
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  // PUBLIC_INTERFACE
  const pushNotification = useCallback((message, type = 'info') => {
    setNotifications((prev) => [...prev, { id: Date.now(), message, type }]);
  }, []);

  // PUBLIC_INTERFACE
  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter(n => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, pushNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useNotification() {
  return useContext(NotificationContext);
}
