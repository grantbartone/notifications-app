import React, { useState, useEffect } from 'react';
import NotificationIcon from './NotificationIcon'
import NotificationList from './NotificationList'
import './App.css';

function App() {
  const [ notificationsText, setNotificationsText ] = useState("")
  const [ notificationsCount, setNotificationsCount ] = useState(0)
  const [ showNotificationsList, setShowNotificationsList ] = useState(false)

  useEffect(() => {
    async function getNotificationsText() {
      const text = await (await fetch('https://gist.githubusercontent.com/grantbartone/f02d21544a4759f3f3b8704df0dfe908/raw/db19c8cf5c0ca4ff47f8f128a4d25665784c7083/releaseTest.md')).text()
      setNotificationsText(text)
    }
    getNotificationsText()
    
    const count = getNotificationCount()
    setNotificationsCount(count)
  }, [])

  const getNotificationCount = () => {
    // TODO: Parse the Markdown file to get the notification count
    return 2
  }
  
  const handleNotificationClick = () => setShowNotificationsList(true)

  const handleCloseModal = () => setShowNotificationsList(false)

  return (
    <div className="App">
      <div>
        <NotificationIcon
          count={notificationsCount}
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
