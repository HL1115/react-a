import React, { Component } from 'react'
let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';
function hoc(Com,url,title){
    class A extends Component{
        constructor(){
            super();
            this.state = {
                data: []
            }
        }
        componentDidMount(){
            fetch(url)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                this.setState({
                    data: res.result
                })
            })
        }
        render(){
            return (
                <div>
                    <h1>{title}</h1>
                    <Com {...this.props} data={this.state.data} />
                </div>
            )
        }
    }
    return A;
}
class Music extends Component{
    render(){
        return <ul>
            <div>{this.props.name}</div>
            {
                this.props.data.map((item,idx)=>{
                    return <li key={idx}>{item.title}</li>
                })
            }
        </ul>
    }
}
class Music1 extends Component{
    render(){
        return <ul>
            {
                this.props.data.map((item,idx)=>{
                    return (<div>
                            <p key={idx}>{item.title}</p>
                            <p key={idx}>{item.author}</p>
                        </div>
                    )
                })
            }
        </ul>
    }
}
var Mymusic = hoc(Music,url,'第一个');
var Mymusic1 = hoc(Music1,url,'第二个');

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Mymusic name='aa'/>
                <Mymusic1/>
            </div>
        )
    }
}
