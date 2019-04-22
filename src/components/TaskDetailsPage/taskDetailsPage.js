import React, { PureComponent, Fragment } from 'react';

import { Button } from '../Button'
import { TaskCommentsList } from '../TaskCommentsList'
import {NewComment} from '../NewComment'

import './taskDetailsPage.scss'

const commentsList = [
    {
        "id": 1,
        "author": "Ivan Abramov",
        "date": "12.02.2019",
        "message": "Task about something intresting Task about something intresting Task about something intresting Task about something intresting"
    },
    {
        "id": 2,
        "author": "Ivan Abramov",
        "date": "12.02.2019",
        "message": "Task about something intresting Task about something intresting Task about something intresting Task about something intresting"
    },
    {
        "id": 3,
        "author": "Ivan Abramov",
        "date": "12.02.2019",
        "message": "Task about something intresting Task about something intresting Task about something intresting Task about something intresting"
    },
    {
        "id": 4,
        "author": "Ivan Abramov",
        "date": "12.02.2019",
        "message": "Task about something intresting Task about something intresting Task about something intresting Task about something intresting"
    },
    {
        "id": 5,
        "author": "Ivan Abramov",
        "date": "12.02.2019",
        "message": "Task about something intresting Task about something intresting Task about something intresting Task about something intresting"
    },
    {
        "id": 6,
        "author": "Ivan Abramov",
        "date": "12.02.2019",
        "message": "Task about something intresting Task about something intresting Task about something intresting Task about something intresting"
    },
   
]


export class TaskDetailsPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <h1 className="page-content__title">Task Details Page</h1>
                <div className="task-details">
                    <div className="task-details__descrition">
                        <h2>Description:</h2>
                        <span>Тask Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        <div className="status">status</div>
                    </div>

                    <div className="task-details__action-panel">
                        <Button />
                        <Button />
                        <Button />
                        <Button />
                    </div>

                    <TaskCommentsList commentsList={commentsList} />

                    <NewComment />
                </div>
            </Fragment>
        )
    }
}




