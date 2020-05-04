export interface ColumnFace {
    img: string,
    title: string,
    desc: string,
    releaseYr: string
}

export interface RowFace {
    MainTitle: string,
    BigObject: Array<ColumnFace>,
}