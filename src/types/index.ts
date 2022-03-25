export type StockState = {
    aapl: Message[],
    btcusdt: Message[],
    isConnected: boolean,
}

export type Message = {
    p: number[], // price
    t: number[], // timestamp
    v: number[], // volume
    s: "AAPL" | "BINANCE:BTCUSDT"
}

export type StcokData = {
    PRICE: number,
    TIME: string,
  }

export type TooltipProps = {
    active?: boolean,
    payload?: {
        value: string
    }[],
    label?: string,
}

export type SidebarProps = {
    data: StcokData
}