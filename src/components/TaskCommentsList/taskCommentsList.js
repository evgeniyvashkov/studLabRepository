import React from 'react';

import { TaskCommentsListItem } from '../TaskCommentsListItem'

export const TaskCommentsList = ({ commentsList }) => {
    
    const renderCommentsList = commentsList.map(({
        id, author, message, date
    }) => (
            <TaskCommentsListItem
                key={id}
                author={author}
                message={message}
                date={date}
            />
        ));

    return (
        <div className="comment-list">
            {renderCommentsList}
        </div>
    )
}