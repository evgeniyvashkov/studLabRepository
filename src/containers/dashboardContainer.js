import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DashboardPage } from '../components/DashboardPage';

import { tasksFetchData } from '../actions/fetchTasks'
import { newCommentsFetchData } from '../actions/fetchNewComments'
import { myCommentsFetchData } from '../actions/fetchMyComments'

const mapStateToProps = ({ tasks, newComments, myComments }) => ({
    tasksList: tasks.tasksList,
    newCommentsList: newComments.newCommentsList,
    myCommentsList: myComments.myCommentsList
})

const mapDispatchToProps = (dispatch) => ({
    tasksFetchData: (url) => { dispatch(tasksFetchData(url)) },
    newCommentsFetchData: (url) => { dispatch(newCommentsFetchData(url)) },
    myCommentsFetchData: (url) => { dispatch(myCommentsFetchData(url)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);