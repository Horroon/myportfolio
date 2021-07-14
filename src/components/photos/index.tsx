import React from 'react';
import SchemaParser from '../../services/schemaParser';
// import Buttons from './button';
// import Photos from './photo';
import './style.scss'

interface PictureFace{
    items:any
}
export const Picture: React.FC<PictureFace> = ({items}): JSX.Element => {
    return <div className="row hm-rw-3">
        <SchemaParser schemas={items} />
    </div>
}
