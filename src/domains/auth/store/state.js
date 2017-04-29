import UserModel from '@domains/auth/models/user'
import { clone } from 'lodash'

let User = clone(UserModel)

export default {
  ...User
}
