import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import userActions from '../actions/UserActions'
import data from '../data/Data'
import Auth from '../components/users/Auth'

class UserStore extends EventEmitter {
  login (user) {
    data.loginUser(user)
    .then(respone => {
      Auth.authenticateUser(respone.token)

      this.emit(this.events.LOGGEDIN, respone)
    })
  }

  handleAction (action) {
    switch (action.type) {
      case userActions.actionTypes.LOGIN:
        this.login(action.user)
        break

      default: break
    }
  }
}

let userStore = new UserStore()
userStore.events = {
  LOGGEDIN: 'loggedin_user'
}

dispatcher.register(userStore.handleAction.bind(userStore))
export default userStore
