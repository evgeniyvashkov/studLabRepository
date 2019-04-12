import React from 'react';

export const CommentListItem = (props) => {
    return (
        <a href="#1" className="comments-list__item">
            <div className="comments-list__item-message">
                <span className="comments-list__item-author">{props.author}</span>
                commented in:
                <span className="comments-list__item-task">{props.task}</span>
            </div>
            <div className="comments-list__item-date">{props.date}</div>
        </a>
    )
}