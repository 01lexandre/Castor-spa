// export default (state) => state.Auth
export default {
  getStatusAlert (state) {
    console.log('Alert Status')
    if (state.AlertMessage) {
      console.log('tem coisa')
      return true
    } else {
      return false
    }
  }
}
