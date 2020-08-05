import React, { ReactChild, ChangeEventHandler } from 'react';
interface myProps {
    id?: any,
    name: string,
    onchange(e:any): any
}

export const Input: React.FC<myProps> = ({ id, name, onchange }): JSX.Element => {
    return <input
        id={id}
        name={name}
        onChange={onchange}
    />
}