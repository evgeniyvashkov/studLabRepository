import { connect } from 'react-redux';

import { TaskDetailsPage } from '../components/TaskDetailsPage';

import { fetchTaskComments } from '../actions/fetchTaskCommentList'



const mapStateToProps = ({ taskComments, loginStatus : {userInfo} }) => ({
    taskComments: taskComments.taskCommentsList,
    userInfo
})
const mapDispatchToProps = (dispatch) => ({
    fetchTaskComments: (url) => { dispatch(fetchTaskComments(url)) }
})

export const TaskDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(TaskDetailsPage);