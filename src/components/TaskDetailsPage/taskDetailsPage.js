import React, { PureComponent, Fragment } from 'react';

import { HOST } from '../../constants'

import { Button } from '../Button'
import { TaskCommentsList } from '../TaskCommentsList'
import { NewComment } from '../NewComment'

import './taskDetailsPage.scss'

export class TaskDetailsPage extends PureComponent {
    state = {

    }

    onAddComment = () => {
        console.log('send comment to server', this.props);
        const { fetchTaskComments } = this.props;

        fetchTaskComments(`${HOST}/taskComments`);
    }

    componentDidMount() {
        console.log('rerender', this.props)
        const { fetchTaskComments } = this.props;
        fetchTaskComments(`${HOST}/taskComments`);
    }

    render() {
        const { taskComments } = this.props;

        return (
            <Fragment>
                <h1 className="page-content__title">Task Details Page <div className="status">open</div></h1>
                <div className="task-details">
                    <div className="task-details__description">
                        <h2>Description:</h2>
                        <span>Тask Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                    </div>

                    <div className="task-details__action-panel">
                        <Button value="see details" />
                        <Button value="assign to me" />
                        <Button value="download" />
                        <Button value="resolve" />
                    </div>

                    <TaskCommentsList commentsList={taskComments} />

                    <NewComment onAddComment={this.onAddComment} />
                </div>
            </Fragment>
        )
    }
}
