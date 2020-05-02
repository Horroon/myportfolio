export interface StateFace {
    seletctedItem: ItemFace
}

interface ItemFace {
    img: string,
    title: string,
    desc: string,
    releaseYr: string
}

export interface ActionFace {
    type: string,
    payload: ItemFace
}