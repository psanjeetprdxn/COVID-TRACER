import React from "react";
import { connect } from "react-redux";

import CountrySelectorContainer from "./CountrySelectorContainer";
import CurrentData from "./CurrentData";
import CovidTrackerChart from "./CovidTrackerChart";

import { Redirect } from "react-router-dom";

function CovidMainContainer(props) {
  let redirect = (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );

  return (
    <>
      {!props.authData.isLoggedIn ? redirect : null}
      <CountrySelectorContainer />
      <CurrentData />
      <CovidTrackerChart />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.authData,
  };
};

export default connect(mapStateToProps)(CovidMainContainer);
