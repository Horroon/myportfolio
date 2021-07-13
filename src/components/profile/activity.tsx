import React from 'react';
import SchemaParser from '../../services/schemaParser';

interface ActivitiesFace{
    items: any
}
export const Activities: React.FC<ActivitiesFace> = ({items}): JSX.Element => (
<div className="row hb-rf-adrs-prnt-dv">
        <div className="col-lg-12">
            <SchemaParser  schema={items[0]} />
        </div>
        <div className="col-lg-12">
            <SchemaParser  schema={items[1]} />
        </div>
        
        <div className="col-lg-12">
            <SchemaParser  schema={items[2]} />
        </div>
    </div>
)

export default Activities