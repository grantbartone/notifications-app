import React from 'react'
import GrantPic from './images/grant.jpeg'

export default function NotificationIcon({count = 0, hide, handleNotificationClick}) {
    return !!count && (
        <div onClick={handleNotificationClick} className={`Notification${hide ? ' dissolve': ''}`}>
            <div className="Notification_icon reveal">
                <img src={GrantPic} alt="Grant's pic" />
                <div className="Notification-count">{count}</div>
            </div>
        </div>
    )
}
