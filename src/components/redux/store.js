import {createStore} from 'redux'
import {reducers} from './comibereducer';

const Store  = createStore(reducers);

export default Store