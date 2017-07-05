import React from 'react'

export default class Input extends React.Component {
  render () {
    return (
      <div className='form-group'>
        <div className='col-sm-offset-2 col-sm-10 text-left'>
          <input
            type='submit'
            className='btn btn-primary'
            value={this.props.value} />
        </div>
      </div>
    )
  }
}
