import dispatcher from '../dispatcher.js'

let userActions = {
  actionTypes: {
    LOGIN: 'login'
  },
  login: (user) => {
    dispatcher.dispatch({
      type: userActions.actionTypes.LOGIN,
      user
    })
  }

}

export default userActions
