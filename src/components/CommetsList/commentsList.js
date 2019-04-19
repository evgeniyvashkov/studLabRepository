import React from 'react';

import { CommentListItem } from '../CommentListItem';
import { Button } from '../Button'

import './commentsList.scss';

export const CommentsList = ({ title, commentsList }) => {

    const renderCommentsList = commentsList.map(({
        commentId, commentAuthor, commentToTask, commentDate
    }) => (
            <CommentListItem
                key={commentId}
                author={commentAuthor}
                task={commentToTask}
                date={commentDate} />
        ));

    return (
        <div className="comments-list">
            <h3 className="comments-list__title">{title}</h3>

            {renderCommentsList}

            <Button value="Show more" />
        </div>
    )
} 