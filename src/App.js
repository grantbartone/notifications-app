import React, { useState } from 'react';
import NotificationIcon from './NotificationIcon'
import NotificationList from './NotificationList'
import ReleaseNotes from './releaseTest.md'
import './App.css';

function App() {
  const [ notifications, setNotifications ] = useState(1)
  const [ showNotificationsList, setShowNotificationsList ] = useState(false)
  const [ notificationsText, setNotificationsText ] = useState("")
  
  const handleNotificationClick = async () => {
    // TODO: Fetch the Markdown from gist
    const text = await (await fetch(ReleaseNotes)).text()
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
