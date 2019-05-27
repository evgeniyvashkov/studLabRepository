import React, { PureComponent, Fragment } from 'react';

import { HOST } from '../../constants'

import { TasksList } from '../TasksList';
import { CommentsList } from '../CommetsList';


import './dashboardPage.scss'

export class DashboardPage extends PureComponent {
    componentDidMount() {
        const { tasksFetchData, newCommentsFetchData, myCommentsFetchData } = this.props;

        tasksFetchData(`${HOST}/tasks`);
        newCommentsFetchData(`${HOST}/newComments`);
        myCommentsFetchData(`${HOST}/myComments`);
    }

    render() {
        const { tasksList, newCommentsList, myCommentsList } = this.props;

        return (
            <Fragment>
                <h1 className="page-content__title">My dashboard</h1>

                <div className="dashboards">
                    <TasksList tasksList={tasksList} />
                    <CommentsList commentsList={newCommentsList} title="New comments from tranlators" />
                    <CommentsList commentsList={myCommentsList} title="My last comments" />
                </div>
            </Fragment>
        )
    }
}