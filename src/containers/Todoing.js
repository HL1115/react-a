import React, { Component } from 'react'
import {delItem} from '../actions/actionCreators';
import {connect} from 'react-redux';

// class Todoing extends Component {
//     delItem = (index)=>{
//         this.props.dispatch(delItem(index))
//     }
//     render() {
//         return (
//             <ul>
//                 {
//                     this.props.todos.map((item,idx)=>(
//                         <li key={item}>{item}---<button onClick={()=>this.delItem(idx)}>删除</button></li>
//                     ))
//                 } 
//             </ul>
//         )
//     }
// }
function Todoing({dispatch,todos}){
    let del = (index)=>{
        dispatch(delItem(index))
    }
    return (
        <ul>
            {
                todos.map((item,idx)=>(
                    <li key={item}>{item}---<button onClick={()=>del(idx)}>删除</button></li>
                ))
            } 
        </ul>
    )
}

let mapStateToProps = (state)=>{
    return {
        todos: state.todo
    }
}
export default connect(mapStateToProps)(Todoing)