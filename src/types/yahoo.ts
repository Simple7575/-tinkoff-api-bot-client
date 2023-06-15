export const IntervalYahoo = [
    "1m",
    "2m",
    "5m",
    "15m",
    "30m",
    "1h",
    "1d",
    "5d",
    "1wk",
    "1mo",
    "3mo",
] as const;
export type IntervalYahooType = (typeof IntervalYahoo)[number];

export const isYahooIntervalType = (interval: any): interval is IntervalYahooType =>
    IntervalYahoo.includes(interval);
