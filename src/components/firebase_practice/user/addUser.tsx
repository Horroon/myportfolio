import React, { useReducer } from 'react';
import firebase from '../firebaseConfig'

interface Action {
    type: string,
    payload: string
}

interface InitialStateFace {
    email: string,
    firstName: string,
    lastName: string
}
const InitialState: InitialStateFace = { email: '', firstName: '', lastName: '' }

const reducer = (state = InitialState, action: Action) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload }
        case 'firstName':
            return { ...state, firstName: action.payload }
        case 'lastName':
            return { ...state, lastName: action.payload }
        default:
            return { ...state }
    }
}

const AddUser = (): JSX.Element => {
    const [state, setState] = useReducer(reducer, InitialState);

    const SendData = () => {
        if (state?.email && state.lastName && state.firstName) {
            firebase.database().ref('users/' + state.email.split('@')[0]).set({
                email: state?.email,
                firstName: state?.firstName,
                lastName: state?.lastName
            }).then(res => {
                console.log(res)
                alert('Added Successfully')
            }).catch(e => {
                console.log('Error occured', e)
            });
        }
        else {
            alert('please fill data')
        }
    }
    console.log(state)
    return (<div>
        <div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" id="email" onChange={(e) => setState({ type: "email", payload: e.target.value })} />
            </div>
            <div className="form-group">
                <label>First Name:</label>
                <input type="text" className="form-control" id="pwd" onChange={(e) => setState({ type: 'firstName', payload: e.target.value })} />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input type="text" className="form-control" id="pwd" onChange={(e) => setState({ type: 'lastName', payload: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-default" onClick={SendData}>Add User</button>
        </div>
    </div>)
}

export default AddUser