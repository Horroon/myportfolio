import React from 'react';
import SchemaParser from '../../services/schemaParser';

interface ActivitiesFace{
    items: any
}
export const Activities: React.FC<ActivitiesFace> = ({items}): JSX.Element => (
<div className="row hb-rf-adrs-prnt-dv">
    <SchemaParser schemas={items} />
    </div>
)

export default Activities