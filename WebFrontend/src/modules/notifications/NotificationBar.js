import React from 'react';
import { useNotification } from './NotificationContext';

// PUBLIC_INTERFACE
function NotificationBar() {
  const { notifications, removeNotification } = useNotification();

  if (!notifications.length) return null;

  return (
    <div className="notifications-container" aria-live="polite">
      {notifications.map(n => (
        <div key={n.id} className={`notification notification-${n.type}`}>
          <span>{n.message}</span>
          <button aria-label="Dismiss" onClick={() => removeNotification(n.id)}>×</button>
        </div>
      ))}
      <style>
      {`
        .notifications-container {
          position: fixed;
          right: 1rem;
          top: 1rem;
          z-index: 1000;
        }
        .notification {
          background: #fff;
          color: #333;
          margin-bottom: .5rem;
          border-radius: 4px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.06);
          padding: .75rem 1.2rem;
          display: flex;
          align-items: center;
          min-width: 250px;
        }
        .notification-info { border-left: 4px solid #61dafb;}
        .notification-success { border-left: 4px solid #5cb85c;}
        .notification-error { border-left: 4px solid #d9534f;}
        .notification button {
          margin-left: auto;
          background: transparent;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: #333;
        }
      `}
      </style>
    </div>
  );
}
export default NotificationBar;
