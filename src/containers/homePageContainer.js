import { connect } from 'react-redux';

import { HomePage } from '../components/HomePage';

import { fetchTarifPlans } from '../actions/fetchTarifPlans'


const mapStateToProps = ({tarifPlans}) => ({
    tarifPlansList: tarifPlans.tarifPlansList
})

const mapDispatchToProps = (dispatch) => ({
    fetchTarifPlans: (url) => { dispatch(fetchTarifPlans(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);