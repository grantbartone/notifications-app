import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function NotificationList({ markdownText, hide, handleCloseModal }) {
    return (
        <div className="Notification_modal reveal">
            <div className={`Notification_list${hide ? ' dissolve' : ''}`}>
                <div className="Modal_header">
                    <div className="Modal_close" onClick={() => handleCloseModal()}>X</div>
                </div>
                <ReactMarkdown source={markdownText} />
            </div>
        </div>
    )
}
