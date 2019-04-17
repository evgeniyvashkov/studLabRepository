import React, { PureComponent, Fragment } from 'react';

import { TasksList } from '../TasksList';
import { CommentsList } from '../CommetsList';


import './dashboardPage.scss'

export class DashboardPage extends PureComponent {
    componentDidMount() {
        this.props.fetchData('http://localhost:3001/tasks')
    }

    render() {
        const { tasks } = this.props;

        return (
            <Fragment>
                <h1 className="page-contnet__title">My dashboard</h1>

                <div className="dashboards">
                    <TasksList tasks={tasks} />
                    {/* <CommentsList comments={newComments} title="New comments from tranlators" /> */}
                    {/* <CommentsList comments={myLastComments} title="My last comments" /> */}
                </div>
            </Fragment>
        )
    }
}