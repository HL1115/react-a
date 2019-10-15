import React, { Component } from 'react'
let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';
function hoc(Com,url){
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
            return <Com data={this.state.data} />
        }
    }
    return A;
}
class Music extends Component{
    render(){
        return <ul>
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
                    return <p key={idx}>{item.title}</p>
                })
            }
        </ul>
    }
}
var Mymusic = hoc(Music,url);
var Mymusic1 = hoc(Music1,url);

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Mymusic/>
                <Mymusic1/>
            </div>
        )
    }
}
