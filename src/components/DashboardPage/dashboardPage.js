import React, { Fragment } from 'react';

import { TasksList } from '../TasksList';
import { CommentsList } from '../CommetsList';


import './dashboardPage.scss'

export const DashboardPage = ({ newComments, myLastComments, myUnresolvedTasks }) => {
    return (
        <Fragment>
            <h1 className="page-contnet__title">My dashboard</h1>

            <div className="dashboards">
                <TasksList tasks={myUnresolvedTasks} />
                <CommentsList comments={newComments} title="New comments from tranlators" />
                <CommentsList comments={myLastComments} title="My last comments" />
            </div>
        </Fragment>
    )
}