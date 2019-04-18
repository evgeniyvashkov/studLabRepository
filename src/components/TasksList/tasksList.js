import React from 'react';

import { TaskItem } from '../TasksItem';
import { Button } from '../Button';

import './tasksList.scss';

export const TasksList = ({ tasksList }) => {
    const renderTasksList = tasksList.map(({
        taskId, text, status, dueDate
    }) => (
            <TaskItem
                id={taskId}
                key={taskId}
                name={text}
                status={status}
                dueDate={dueDate} />
        ));

    return (
        <div className="tasks-list">
            <h3 className="tasks-list__title">My unresolved tasks</h3>
            <div className="tasks-list__container">

                <div className="tasks-list__caption">
                    <h4 className="task-name">Task</h4>
                    <h4 className="task-status">Status</h4>
                    <h4 className="task-due-date">Due Date</h4>
                </div>

                {renderTasksList}

            </div>
            <Button value="Show more" />
        </div>
    )
} 