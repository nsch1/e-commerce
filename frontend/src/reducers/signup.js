import {USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED} from '../actions/users'

export default function (state = {}, action) {
  switch(action.type) {
    case USER_SIGNUP_SUCCESS:
      return { success: true }
    case USER_SIGNUP_FAILED:
      return { error: action.payload }
    default: return state
  }
}