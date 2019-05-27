import React from 'react'

export const TaskCommentsListItem = ({ author, message, date }) => (
    <div className="comments-list__item">
        <div className="comments-list__item-author">{author}</div>
        <div className="comments-list__item-message">{message}</div>
        <div className="comments-list__item-date">{date}</div>
    </div>
)