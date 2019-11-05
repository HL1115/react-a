// import {ADD_ITEM,DEL_ITEM,CHANGE_VALUE} from './actionTypes'; 
import * as types from './actionTypes'

export const addItem = (value)=>({
    type: types.ADD_ITEM,
    value
})
export const delItem = (index)=>({
    type: types.DEL_ITEM,
    index
})
export const changevalue = (value)=>({
    type: types.CHANGE_VALUE,
    value
})
export const getUserInfor = (userInfor)=>({
    type: types.GET_USERINFOR,
    userInfor
})