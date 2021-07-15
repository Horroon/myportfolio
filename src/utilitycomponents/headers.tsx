import React from 'react';

interface headingface{
    children?:React.ReactChildren,
    attributes?: React.Attributes
}

export const H6:React.FC<headingface> = ({children, attributes})=>{
    return <h6 {...attributes}> {children}</h6>
}

export const H5:React.FC<headingface> = ({children, attributes})=>{
    return <h5 {...attributes}> {children}</h5>
}

export const H4:React.FC<headingface> = ({children, attributes})=>{
    return <h4 {...attributes}> {children}</h4>
}


export const H3:React.FC<headingface> = ({children, attributes})=>{
    return <h3 {...attributes}> {children}</h3>
}

export const H2:React.FC<headingface> = ({children, attributes})=>{
    return <h2 {...attributes}> {children}</h2>
}

export const H1:React.FC<headingface> = ({children, attributes})=>{
    return <h1 {...attributes}> {children}</h1>
}