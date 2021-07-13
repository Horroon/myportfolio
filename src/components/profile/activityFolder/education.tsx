import React from 'react';

interface tableRowFace{
    th: string,
    td: string,
}

interface EducationFace{
    heading: string,
    educationList:Array<tableRowFace>
}
export const Education:React.FC<EducationFace> = ({heading, educationList}) => {
    return <div className="edtn-prnt-dv">
        <div className="edctn-tltl-dv">
            <h3>{heading}</h3>
        </div>
        <div>
            <table className="table">
                <tbody>
                    {
                        educationList.map((education,i)=><tr key={i+education.td}>
                            <th>{education.th}</th>
                            <td>{education.td}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
}
