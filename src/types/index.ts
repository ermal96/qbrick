export type ChartState = {
    status: "init" | "loading" | "error" | "success",
    aapl?: number[],
    btcusdt?: number[]
}