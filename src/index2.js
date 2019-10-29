import React,{useRef,useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

let cxt = React.createContext();

// 声明组件（有状态组件、无状态组件）
// 1、类组件（state是类组件特有的、私有的、存储当前组件的数据）
// 2、函数组件（无状态组件、小、简单、之前适合做UI组件）
// hooks(只能用在函数组件，而且用组件最顶层)
// useState
function Count(){
    let [num,setNum] = useState(0);
    let [name] = useState('tom');
    let value = useContext(cxt);
    console.log(value);
    let p = useRef(null);
    useEffect(()=>{
        console.log(p);
    })
    return (
        <div>
            <p ref={p}>{num}</p>
            <p>{name}</p>
            <button onClick={()=>setNum(num+1)}>点击+1</button>
            {/* <button onClick={()=>this.add()}>点击+1</button> */}
        </div>
    )
}
// useEffect(代替类组件的生命周期函数)
function ShowTime(){
    let [time,setTime] = useState(new Date().toLocaleString());
    // 相当于componentDidMount和componentDidUpdate
    // 相当于componentWillUnmount
    useEffect(()=>{
        let timeId = setInterval(()=>{
            console.log(time)
            setTime(new Date().toLocaleString())
        },1000)
        return ()=>{
            clearInterval(timeId)
        }
    },[])
// 可以写多个useEffect
    useEffect(()=>{

    },[]);

    return <div>
        <h1>{time}</h1>
    </div>
}

// 自定义hook（更方便封装组件内的逻辑功能）
// 函数名一定是use开头
function useFetch(url){
    let [data,setData] = useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setData(res.data)
            })
    },[])
    return data;
}

function Topic(){
    let data = useFetch('https://cnodejs.org/api/v1/topics');
    return (
        <div>
            {
                data.map((item)=><p key={item.id}>{item.title}</p>)
            }
        </div>
    )
}

ReactDOM.render(
    <cxt.Provider value={{list:[1,2,3]}}>
        <Router>
            <div>
                {/* <Topic/> */}
                <Link to='/count'>Count</Link><br/>
                <Link to='/showtime'>ShowTime</Link>
                <Route path='/count' component={Count}/>
                <Route path='/showtime' component={ShowTime}/>
            </div>
        </Router>
    </cxt.Provider>,
    document.getElementById('root')
)



// 计数器
// function Count(){
//     点击页面不会渲染，没有机制触发重新渲染
//     let num = 0;
//     return (
//         <div>
//             <p>{num}</p>
//             <button onClick={()=>num=10}>点击+1</button>
//         </div>
//     )
// }

// class Count extends Component{
//     constructor(){
//         super();
//         this.state={
//             num: 0
//         }
//     }
//     add = ()=>{
//         this.setState((state)=>({
//             num: state.num+1
//         }))
//         // 注意setState的异步问题
//         // let obj = Object.assign({num:0},{num:this.state.num+1},{num:this.state.num+1})
//         // console.log(obj)
//         // for(var i=0;i<10;i++){
//         //     this.setState((state)=>({
//         //         num: state.num+1
//         //     }))
//         // }
//     }
//     render(){
//         return (
//             <div>
//                 <p>{this.state.num}</p>
//                 <button onClick={this.add}>点击+1</button>
//                 {/* <button onClick={()=>this.add()}>点击+1</button> */}
//             </div>
//         )
//     }
// }

