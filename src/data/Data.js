let users = []

let data = {
  loginUser: (user) => {
    return new Promise((resolve, reject) => {
      let existingUser = users.find(function (u) {
        if (u.username === user.username && u.password === user.password) {
          return u
        }

        return false
      })

      if (existingUser) {
        resolve({
          success: true,
          message: 'Successfully logged in',
          token: 'dfsdfmnsdfmclkdfsa1f1fg2f1gdfg',
          user: user
        })
      } else {
        resolve({
          success: false,
          message: 'Wrong username or password'
        })
      }
    })
  },
  registerUser: (user) => {
    return new Promise((resolve, reject) => {
      let existingUser = users.find(function (u) {
        if (u.username === user.username) {
          return u
        }

        return false
      })

      if (existingUser) {
        resolve({
          success: false,
          message: 'Username already exist'
        })
      } else {
        users.push(user)
        resolve({
          success: true,
          message: 'Successfully registered'
        })
      }
    })
  }
}

export default data
