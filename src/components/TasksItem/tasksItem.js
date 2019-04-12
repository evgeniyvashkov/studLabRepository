import React from 'react';

export const TaskItem = ({ id, name, status, dueDate }) => (
    <a href={"#" + id} className="tasks-list__item">
        <div className="task-name">{name}</div>
        <div className="task-status">{status}</div>
        <div className="task-due-date">{dueDate}</div>
    </a>
)