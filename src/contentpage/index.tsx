import React from 'react';

interface ContentPageProps {
    Component: React.ComponentType<any>;
}

export const ContentPage = ({Component}: ContentPageProps) => {
    const loginData = {isLogin:true}
    return <Component {...loginData} />
}
