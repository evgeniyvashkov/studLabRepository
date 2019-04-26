import { connect } from 'react-redux';

import { TaskDetailsPage } from '../components/TaskDetailsPage';

import { fetchTaskComments } from '../actions/fetchTaskCommentList'



const mapStateToProps = ({ taskCommentsList }) => ({
    taskComments: taskCommentsList.taskCommentsList
})
const mapDispatchToProps = (dispatch) => ({
    fetchTaskComments: (url) => { dispatch(fetchTaskComments(url)) }
})

export const TaskDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(TaskDetailsPage);