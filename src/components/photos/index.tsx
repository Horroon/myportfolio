import React from 'react';
import Buttons from './buttons';
import Photos from './photo';
import './style.scss'

export const Picture: React.FC = (): JSX.Element => {
    return <div className="row hm-rw-3">
        <Buttons />
        <Photos />
    </div>
}
