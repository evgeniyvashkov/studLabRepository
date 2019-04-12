import React from 'react';

import { CommentListItem } from '../CommentListItem';
import { Button } from '../Button'

import './commentsList.scss';

export const CommentsList = ({ title, comments }) => {

    const commentsList = comments.map(comment => (
        <CommentListItem
            key={comment.commentId}
            author={comment.commentAuthor}
            task={comment.commentToTask}
            date={comment.commentDate} />
    ));

    return (
        <div className="comments-list">
            <h3 className="comments-list__title">{title}</h3>

            {commentsList}

            <Button value="Show more" />
        </div>
    )
} 