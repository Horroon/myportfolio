import React from 'react';
import {tableFace} from './interfaces'

const TableRow: React.FC<tableFace> = (props): JSX.Element => {
    return <tr>
        <th>{props.head.c1}</th>
        <td>{props.value.c1}</td>
        <th>{props.head.c2}</th>
        <td><div dangerouslySetInnerHTML={{ __html: `${props.value.c2}` }} /></td>
    </tr>
}

export default TableRow