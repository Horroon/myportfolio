import { combineReducers } from 'redux';
import { FavoriteReducer } from '../favourite/reducer/reducer'
interface reducersFaces{
    FavoriteReducer: any
}
export let reducers = combineReducers<reducersFaces>({ FavoriteReducer: FavoriteReducer })
