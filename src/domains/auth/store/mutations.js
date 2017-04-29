export default {
  'CHANGE_USER'  (state, payload) {
    state.User = payload
  },
  'ISLOGGED'  (state, payload) {
    state.isLogged = payload
  }
}
