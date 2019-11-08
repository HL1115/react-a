import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            tab:'all'
        }
        this.tab = 'all';
        this.btns = [
            {btn:'全部',para:'all'},
            {btn:'精华',para:'good'},
            {btn:'分享',para:'share'},
            {btn:'招聘',para:'job'}
        ]
    }
    componentDidMount(){
        
        fetch('https://cnodejs.org/api/v1/topics').
            then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })
    }
    getData = (tab,page=1)=>{
        this.tab = tab;
        let url = 'https://cnodejs.org/api/v1/topics?tab='+tab+'&page='+page
        fetch(url).
            then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })

    }
    render() {
        let url = this.props.match.url
        
        return (
            <div>
                <div>
                    {
                        this.btns.map((item)=>(
                            <button onClick={()=>this.getData(item.para)}>{item.btn}</button>
                        ))
                    }
                    {/* <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/job'}>招聘</Link> */}
                </div>
                <div>

                    {
                        this.state.data.map((item)=>(
                            <li key={item.id}>
                                <img style={{width:50}} src={item.author.avatar_url} alt=""/>
                                <span>{item.reply_count}</span>/
                                <span>{item.visit_count}</span>
                                <span onClick={()=>this.props.history.push('/topic/'+item.id)}>{item.title}</span>
                            </li>
                        ))
                    }

                    {/* <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/good`} component={Good} /> */}
                    {/* <Route path='/home/:tab' component={List}/> */}
                </div>
                <ul>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(item=>(
                            <li onClick={()=>{this.getData(this.tab,item)}} key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
