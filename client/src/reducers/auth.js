import {
  REGIST_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case REGISTER_SUCCESS:
     localStorage.setItem('token', payload.token);
     return {
       ...state,
       ...payload,
       isAuthenticated: true,
       loading: false
     }
  }
}
