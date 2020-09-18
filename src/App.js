import React, { useState, useEffect } from 'react';
import NotificationIcon from './NotificationIcon'
import NotificationList from './NotificationList'
import './App.css';

function App() {
  const [ notificationsText, setNotificationsText ] = useState("")
  const [ showError, setShowError ] = useState(false)
  const [ notificationsCount, setNotificationsCount ] = useState(0)
  const [ showNotificationsIcon, setShowNotificationsIcon ] = useState(true)
  const [ showNotificationsList, setShowNotificationsList ] = useState(false)
  const [ hideNotifications, setHideNotifications ] = useState(false)

  useEffect(() => {
    async function getNotificationsText() {
      const response = await fetch('https://gist.githubusercontent.com/grantbartone/f02d21544a4759f3f3b8704df0dfe908/raw/a80068bd536f870b2579c2f2f0d9ed850b1cd4ca/releaseTest.md')
      
      if (response.status !== 200) return handleError(response)
      const text = await response.text()
      setNotificationsText(text)
    }
    getNotificationsText()
    
    // Show the notification icon and badge after a short delay for aesthetic effect
    const count = getNotificationCount()
    setTimeout(() => setNotificationsCount(count), 1000)
  }, [])

  const getNotificationCount = () => {
    // TODO: Parse the Markdown file to get the notification count
    return 2
  }
  
  const handleNotificationClick = () => setShowNotificationsList(true)

  const handleCloseModal = () => {
    setHideNotifications(true, setTimeout(() => {
      // Reset hideNotifications & showNotification(List|Icon) states to false after close
      setShowNotificationsList(false)
      setShowNotificationsIcon(false)
      setHideNotifications(false)
      }, 1000)
    )
  }

  const handleError = async (response) => {
    const text = await response.text()
    setNotificationsText(
      `Whoops, something went wrong getting the Release Notes!
      Please refresh the page to try again!\n\n${text}`
    )
    setShowError(true)
    setShowNotificationsList(true)
  }

  return (
    <div className="App">
      {showNotificationsIcon && !showError && (
        <NotificationIcon
          count={notificationsCount}
          hide={hideNotifications}
          handleNotificationClick={handleNotificationClick}
        />
      )}
      {showNotificationsList && (
        <NotificationList
          hide={hideNotifications}
          error={showError}
          markdownText={notificationsText}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
