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
export const getUserInforWithFetch = (userInfor)=>{

    return (dispatch)=>{
        fetch('https://cnodejs.org/api/v1/user/alsotang')
            .then(res=>res.json())
            .then(res=>{
                dispatch(getUserInfor({
                    avatar_url:res.data.avatar_url,
                    loginname:res.data.loginname
                }))
                // props.history.push('/home')
            })
    }
}