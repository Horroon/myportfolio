import { StateFace, ActionFace } from './interfaces'

export const FavoriteReducer = (state: StateFace, action: ActionFace) => {
    switch (action.type) {
        case "selectedItem":
            return { ...state, selectedItem: action.payload }
        default:
            return { ...state }
    }
}