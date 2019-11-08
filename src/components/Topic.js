import React,{useState,useEffect} from 'react';
export default function Topic(props){
    let [data,setData] = useState('');
    useEffect(()=>{
        fetch('https://cnodejs.org/api/v1/topic/'+props.match.params.id)
            .then(res=>res.json())
            .then(res=>{
                console.log(res.data)
                setData(res.data.content)
            })
    })
    // return <div>hello{}</div>
    return <div dangerouslySetInnerHTML={{__html:data}}></div>
}