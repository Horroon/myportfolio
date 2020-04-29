import React from 'react';

interface inputFieldFace {
    value:string
    type:string,
    placeholder: string,
    getValue:any 
}

const FormInputFiled: React.FC<inputFieldFace> = (props): JSX.Element => {
    return <input type={props.type} className="form-control inpt-dv-slf" placeholder={props.placeholder} onChange={(e)=>props.getValue(e.target.value)} />
}

export default FormInputFiled