import { connect } from 'react-redux';

import { HomePage } from '../components/HomePage';

import { fetchTariffPlans } from '../actions/fetchTariffPlans'


const mapStateToProps = ({tariffPlans}) => ({
    tariffPlansList: tariffPlans.tariffPlansList
})

const mapDispatchToProps = (dispatch) => ({
    fetchTariffPlans: (url) => { dispatch(fetchTariffPlans(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);