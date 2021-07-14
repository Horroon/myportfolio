import React from 'react';
import {ScrollController} from '../../utilities-methods';

import './style.scss'
import SchemaParser from '../../services/schemaParser';

interface MainProfileInterface {
    items: any[]
}
export const MainProfile: React.FC<MainProfileInterface> = (props): JSX.Element => {
    const {items} = props
    ScrollController();
    return <SchemaParser schemas={items} />
}

export default MainProfile 