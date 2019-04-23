import { connect } from 'react-redux';

import { TaskDetailsPage } from '../components/TaskDetailsPage';

import { fetchTariffPlans } from '../actions/fetchTariffPlans'


const mapStateToProps = ({tariffPlans}) => ({
    taskDetais: tariffPlans.tariffPlansList
})

const mapDispatchToProps = (dispatch) => ({
    fetchTariffPlans: (url) => { dispatch(fetchTariffPlans(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailsPage);