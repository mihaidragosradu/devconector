import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>
            <i className='fas fa-code' style={{ fontSize: '48px' }}></i>
            &#160;Developer Connector
          </h1>
          <p className='lead'>
            Create a developer profile, share posts and get help from other
            developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              <i class='fas fa-user-plus'></i>&#160;&#160;Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              <i class='fas fa-sign-in-alt'></i>&#160;&#160; Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
