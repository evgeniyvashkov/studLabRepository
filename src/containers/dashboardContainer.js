import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DashboardPage } from '../components/DashboardPage';
// import newComments from '../infrostructure/newComments.json';
// import myLastComments from '../infrostructure/myLastComments.json';
// import myUnresolvedTasks from '../infrostructure/tasksList.json';
// const myUnresolvedTasks = fetch('http:/localhost:3001/tasks');
import { tasksFetchData } from '../actions'

const mapStateToProps = (state) => ({
    tasks : state.tasks
    // newComments,
    // myLastComments,
    // myUnresolvedTasks
})

const mapDispatchToProps = (dispatch) => ({
    fetchData: (url) => { dispatch(tasksFetchData(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);