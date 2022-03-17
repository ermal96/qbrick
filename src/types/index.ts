export type StockState = {
    messages: Message[],
    isConnected: boolean,
}

export type Message = {
    p: number[], // price
    t: number[], // timestamp
    v: number[], // volume
}
