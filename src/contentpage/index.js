import React from 'react';

export const ContentPage = ({Component})=>{
    const loginData = {isLogin:true}
    return <Component {...loginData} />
}