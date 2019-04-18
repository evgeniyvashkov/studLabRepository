import React, { PureComponent, Fragment } from 'react';

import { TasksList } from '../TasksList';
import { CommentsList } from '../CommetsList';


import './dashboardPage.scss'

export class DashboardPage extends PureComponent {
    componentDidMount() {
        this.props.tasksFetchData('http://localhost:3001/tasks');
        this.props.newCommentsFetchData('http://localhost:3001/newComments');
        this.props.myCommentsFetchData('http://localhost:3001/myComments');
    }

    render() {
        const { tasksList, newCommentsList, myCommentsList } = this.props;

        return (
            <Fragment>
                <h1 className="page-contnet__title">My dashboard</h1>

                <div className="dashboards">
                    <TasksList tasksList={tasksList} />
                    <CommentsList comments={newCommentsList} title="New comments from tranlators" />
                    <CommentsList comments={myCommentsList} title="My last comments" />
                </div>
            </Fragment>
        )
    }
}