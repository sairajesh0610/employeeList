import * as ActionTypes from './actionTypes';
import { createReducer } from '../utils/CreateReducer';

export const employeeList = createReducer({}, {
      [ActionTypes.EMPLOYEE_LIST]: (state, action) => {
        return action.employeeList;
    }
})




