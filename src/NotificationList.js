import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function NotificationList({ markdownText, handleCloseModal }) {
    return (
        <div className="Notification_modal">
            <div className="Notification_list">
                <div className="Modal_header">
                    <div className="Modal_close" onClick={() => handleCloseModal()}>X</div>
                </div>
                <ReactMarkdown source={markdownText} />
            </div>
        </div>
    )
}
