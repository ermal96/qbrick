export type StockState = {
    messages: Message[],
    isConnected: boolean,
}

export type Message = {
    p: number[], // price
    t: number[], // timestamp
    v: number[], // volume
}

export type StcokData = {
    PRICE: number,
    TIME: string,
    VOLUME: number
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