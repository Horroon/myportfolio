import React, { Children } from 'react';

interface ContainerFace{
    cssClasses:string
    children:React.ReactChildren
}
export const Container:React.FC<ContainerFace> = ({children, cssClasses})=>{
    return <div className={cssClasses}>
        {children}
    </div>
}