import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createProject } from "../store/actions/actions";

const RouteTwo = props => {
  return (
    <div>
      <h1>Welcome to Route Two - Projects from Redux</h1>
      <button
        onClick={() => {
          props.createProject();
        }}
      >
        Add project
      </button>
      <ul>
        {props.projects.map(p => {
          return <li key={p}>{p}</li>;
        })}
      </ul>
      <ul>
        <li>
          <Link to="/one">Route One</Link>
        </li>
        <li>
          <Link to="/two">Route Two</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  };
};

const mapDispatchToProps = dispatch => ({
  createProject() {
    dispatch(createProject());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteTwo);
