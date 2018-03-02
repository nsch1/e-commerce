import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends PureComponent {
  handleSubmit = (data) => {
    this.props.login(data.email, data.password)
  }

  render() {
    if (this.props.currentUser) return (
      <Redirect to="/" />
    )

    return (
      <div>
        <h1>Login</h1>

        <LoginForm onSubmit={this.handleSubmit} />
        {
          this.props.error &&
          <p>{this.props.error}</p>          
        }
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, login }) => {
  return {
    currentUser: currentUser,
    error: login.error
  }
}

export default connect(mapStateToProps, {login})(LoginPage)