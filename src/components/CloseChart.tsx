import { ComposedChart, XAxis, YAxis, Tooltip, Line } from "recharts";
const d = [
    { date: "Today", high: 250, low: 2400, open: 100, close: 200 },
    { date: "Today", high: 250, low: 2400, open: 100, close: 200 },
    { date: "Today", high: 250, low: 2400, open: 100, close: 200 },
    { date: "Today", high: 250, low: 2400, open: 100, close: 200 },
];

type DataType = typeof d;
interface Props {
    data: DataType;
}

export default function CloseChart({ data }: Props) {
    return (
        <>
            <h3>Open & Close</h3>
            <ComposedChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="close" stroke="#2fa8fe" />
                <Line type="monotone" dataKey="open" stroke="#00ff37" />
                <XAxis />
                <YAxis />
                <Tooltip />
                {/* <Bar dataKey="high" stackId="a" fill="#8884d8" />
                <Bar dataKey="low" stackId="a" fill="#82ca9d" />
                <Bar dataKey="close" stackId="a" fill="#ffc658" />
                <Bar dataKey="open" stackId="a" fill="#ffc658" /> */}
            </ComposedChart>
        </>
    );
}
