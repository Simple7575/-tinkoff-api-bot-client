export const IntervalTinkoff = [
    "1m",
    "2m",
    "3m",
    "5m",
    "10m",
    "15m",
    "30m",
    "1h",
    "2h",
    "4h",
    "1d",
    "7 days",
    "30 days",
] as const;
export type IntervalTinkoffType = (typeof IntervalTinkoff)[number];

export const isTinkoffIntervalType = (interval: any): interval is IntervalTinkoffType =>
    IntervalTinkoff.includes(interval);
