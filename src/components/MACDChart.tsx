import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip } from "recharts";
const d = [
    { MACD: 400, signal: 2400, histogram: 200 },
    { MACD: 200, signal: 2300, histogram: 250 },
    { MACD: 100, signal: 2500, histogram: 300 },
    { MACD: -100, signal: 2000, histogram: 150 },
    { MACD: 250, signal: 2400, histogram: 100 },
];

type DataType = typeof d;
interface Props {
    data: DataType;
}

export default function MACDChart({ data }: Props) {
    return (
        <>
            <h3>MACD</h3>
            <ComposedChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="MACD" stroke="#2fa8fe" />
                <Line type="monotone" dataKey="signal" stroke="#feb62f" />
                <Bar dataKey="histogram" fill="#cd87b6" />
                <XAxis />
                <YAxis />
                <Tooltip />
            </ComposedChart>
        </>
    );
}
