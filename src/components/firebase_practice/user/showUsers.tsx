import React, { useReducer, useEffect } from 'react';
import firebase from '../firebaseConfig';

interface ActionFace {
    type: string,
    payload: any
}
interface User {
    email: string,
    firstName: string,
    lastName: string
}
interface InitialStateFace {
    users: Array<User>
}
const InitialState: InitialStateFace = { users: [] }
const reducer = (state = InitialState, action: ActionFace) => {
    switch (action.type) {
        case 'users':
            return { ...state, users: action.payload }
        default:
            return { ...state }
    }
}

const ShowUsers: React.FC = (): JSX.Element => {
    const [state, setState] = useReducer(reducer, InitialState)
    const getData = () => {
        const db = firebase.database()
        db.ref('users').on('value', (data) => {
            let users = []
            const mydata = data.val()
            for (var item in mydata) {
                users.push(mydata[item])
            }
            setState({ type: 'users', payload: users })
        }, (e: any) => { console.log(e) })

    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.users.length > 0 && state.users.map((item:User) => {
                        return <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default ShowUsers