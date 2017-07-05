let data = {
  loginUser: (user) => {
    return new Promise((resolve, reject) => {
      resolve({
        success: true,
        message: 'Successfully logged in',
        token: 'dfsdfmnsdfmclkdfsa1f1fg2f1gdfg',
        user: user
      })
    })
  }
}

export default data
