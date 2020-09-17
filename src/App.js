import React, { useState } from 'react';
import NotificationIcon from './NotificationIcon'
import NotificationList from './NotificationList'
import './App.css';

function App() {
  const [ notifications, setNotifications ] = useState(1)
  const [ showNotificationsList, setShowNotificationsList ] = useState(false)
  const [ notificationsText, setNotificationsText ] = useState("")
  
  const handleNotificationClick = async () => {
    const text = await (await fetch('https://gist.githubusercontent.com/grantbartone/f02d21544a4759f3f3b8704df0dfe908/raw/db19c8cf5c0ca4ff47f8f128a4d25665784c7083/releaseTest.md')).text()
    setNotificationsText(text)
    
    // TODO: Replace with notifications count
    setNotifications(notifications + 1)
    setShowNotificationsList(true)
  }

  const handleCloseModal = () => setShowNotificationsList(false)

  return (
    <div className="App">
      <div>
        <NotificationIcon
          count={notifications}
          handleNotificationClick={handleNotificationClick}
        />
        {showNotificationsList && (
          <NotificationList markdownText={notificationsText} handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default App;
