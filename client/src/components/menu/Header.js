import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from '../common/Payment';

const unAuthHeader = () => {
  return (
    <nav className="nav-extended" style={{ backgroundColor: '#c83349' }}>
      <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo">Vndemy</Link>
        {/* <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/auth/google">Login</a></li>
          <li><a href="auth/google">Sign up</a></li>
          <li><a href="/auth/google">Login with Goolge+</a></li>
        </ul>
      </div>
    </nav>
  )
}

const grantAuthHeader = () => {
  return (
    <nav className="nav-extended" style={{ backgroundColor: '#c83349' }}>
      <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo">Vndemy</Link>
        {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/api/logout">Logout</a></li>
        </ul>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab"><a href="/">Home</a></li>          
          <li className="tab disabled"><a href="/surveys">Surveys</a></li>
          <li className="tab"><a href="surveys/new">Surveys New</a></li>
          <li className="tab"><Payment /></li>
        </ul>
      </div>
    </nav>
  )
}

class Header extends Component {
  renderHeader = () => {
    switch (this.props.authState) {
      case null:
        return unAuthHeader();
      case false:
        return unAuthHeader();
      default:
        return grantAuthHeader();

    }
  }
  
  render() {
    return (
      <div>
        {this.renderHeader()}
      </div>
    )
  }
}
// function map State to props
const mapStateToProps = state => {
  console.log(state.authState.currentUser);
  return {
    authState: state.authState.currentUser,
  }
}

export default connect(mapStateToProps, {})(Header);