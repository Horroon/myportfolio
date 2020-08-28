export interface ColumnFace {
    img: string,
    title: string,
    desc: string,
    releaseYr: string
}

export interface RowFace {
    id?:string
    MainTitle: string,
    BigObject: Array<ColumnFace>,
}