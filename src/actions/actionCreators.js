import {ADD_ITEM,DEL_ITEM,CHANGE_VALUE} from '../actions/actionTypes'; 


export const addItem = (value)=>({
    type: ADD_ITEM,
    value
})
export const delItem = (index)=>({
    type: DEL_ITEM,
    index
})
export const changevalue = (value)=>({
    type: CHANGE_VALUE,
    value
})