import React, { useState } from 'react';
import './App.css';
import NotificationIcon from './NotificationIcon'

function App() {
  // TODO: Replace hard-coded value with fetched result count
  const [ notifications, setNotifications ] = useState(1)
  
  const handleNotificationClick = () => setNotifications(notifications + 1)

  return (
    <div className="App">
      <div>
        <NotificationIcon
          count={notifications}
          handleNotificationClick={handleNotificationClick}
        />
      </div>
    </div>
  );
}

export default App;
