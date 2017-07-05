import React from 'react'
import Input from '../common/forms/Input'
import SubmitInput from '../common/forms/SubmitInput'
import Error from '../common/Error'

export default class RegisterForm extends React.Component {
  render () {
    let user = this.props.user
    return (
      <form className='form-horizontal' onSubmit={this.props.onSubmit}>
        <Input
          name='username'
          placeholder='Username'
          value={user.username}
          onChange={this.props.onChange} />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={user.password}
          onChange={this.props.onChange} />
        <Input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={user.confirmPassword}
          onChange={this.props.onChange} />
        <SubmitInput
          value='Login' />
        <Error error={this.props.error} />
      </form>
    )
  }
}
