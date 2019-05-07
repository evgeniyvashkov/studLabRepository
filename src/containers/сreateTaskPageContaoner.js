import { connect } from "react-redux";

import { CreateTaskPage } from "../components/CreateTaskPage";

import { fetchTransleteThemes } from "../actions/fetchTranslateTheme";

const mapStateToProps = ({ translateTheme }) => ({
  themeList: translateTheme.themeList
});

const mapDispatchToProps = dispatch => ({
  fetchTransleteThemes: url => {
    dispatch(fetchTransleteThemes(url));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskPage);
