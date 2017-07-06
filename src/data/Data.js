let users = []
let books = [
  {id: 1, title: 'Book 1', author: 'Author 1', date: '2017-07-06'},
  {id: 2, title: 'Book 2', author: 'Author 1', date: '2017-07-03'},
  {id: 3, title: 'Book 3', author: 'Author 2', date: '2017-07-02'},
  {id: 4, title: 'Book 4', author: 'Author 2', date: '2017-06-24'},
  {id: 5, title: 'Book 5', author: 'Author 3', date: '2017-06-20'},
  {id: 6, title: 'Book 6', author: 'Author 4', date: '2017-06-15'},
  {id: 7, title: 'Book 7', author: 'Author 5', date: '2017-06-13'},
  {id: 8, title: 'Book 8', author: 'Author 5', date: '2017-06-05'},
  {id: 9, title: 'Book 9', author: 'Author 5', date: '2017-06-04'}
]

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
  },
  allBooks: () => {
    return new Promise((resolve, reject) => {
      resolve(books.slice(0))
    })
  }
}

export default data
