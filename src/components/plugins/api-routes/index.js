import store from '@store'
let next = false

export class ApiRoute {
  static url (query = '') {
    if (next) {
      return `http://${store.user.slug}.${process.env.API_URL}${query}`
    } else {
      return `http://${process.env.API_URL}${query}`
    }
  }
}
