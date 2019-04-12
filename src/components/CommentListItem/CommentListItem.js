import React from 'react';

export const CommentListItem = ({ author, task, date }) => {
    return (
        <a href="#1" className="comments-list__item">
            <div className="comments-list__item-message">
                <span className="comments-list__item-author">{author}</span>
                commented in:
                <span className="comments-list__item-task">{task}</span>
            </div>
            <div className="comments-list__item-date">{date}</div>
        </a>
    )
}