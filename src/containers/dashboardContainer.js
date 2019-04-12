import { connect } from 'react-redux';

import { DashboardPage } from '../components/DashboardPage';
import newComments from '../infrostructure/newComments.json';
import myLastComments from '../infrostructure/myLastComments.json';
import myUnresolvedTasks from '../infrostructure/tasksList.json';

const mapStateToProps = (state) => ({
    newComments,
    myLastComments,
    myUnresolvedTasks
})

export default connect(mapStateToProps)(DashboardPage);