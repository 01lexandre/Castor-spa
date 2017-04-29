import store from '@store'
export default {
  'SET_ALERT_MESSAGE'  (state, payload) {
    state.status = true
    state.message = payload.message
    state.type = payload.type
    state.timeout = payload.timeout
    state.icon = payload.icon

    let time = payload.timeout + '000'

    setTimeout(function () {
      store.commit('CLEAR_ALERT')
    },
      time
    )
  },
  'CLEAR_ALERT' (state) {
    state.status = false
    state.message = ''
    state.type = ''
    state.timeout = 3
    state.icon = ''
  }
}
