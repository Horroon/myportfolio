import React from 'react';

interface AddressFace{
    heading: string,
    description: string
}
export const Address: React.FC<AddressFace> = ({heading, description}): JSX.Element => {
    return <div className="prfl-adrs-mn-dv">
        <div className="adrs-ttl-prnt-dv"><h3>{heading}</h3></div>
        <div>
            <p>{description}</p>
        </div>
    </div>
}
