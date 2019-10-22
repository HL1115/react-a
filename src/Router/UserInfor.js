import React from 'react';

export default function UserInfor(props){
    console.log(props);

    return (
        <div>
            <p>name:zhangsan</p>
            <p>id:{props.location.state}</p>
        </div>
    )
}