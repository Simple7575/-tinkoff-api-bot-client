import { ChangeEvent } from "react";
import { type IntervalTinkoffType } from "../../types/tinkoff";

interface Props {
    timeFrameTinkoff: IntervalTinkoffType;
    handleSelectTimeFrameTinkoff: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function TinkoffInterval({ timeFrameTinkoff, handleSelectTimeFrameTinkoff }: Props) {
    return (
        <>
            <label htmlFor="timeFrame">
                Interval
                <select
                    name="timeFrame"
                    id="timeFrame"
                    value={timeFrameTinkoff}
                    onChange={handleSelectTimeFrameTinkoff}
                >
                    <option value="1m">1m</option>
                    <option value="2m">2m</option>
                    <option value="3m">3m</option>
                    <option value="5m">5m</option>
                    <option value="10m">10m</option>
                    <option value="15m">15m</option>
                    <option value="30m">30m</option>
                    <option value="1h">1h</option>
                    <option value="2h">2h</option>
                    <option value="4h">4h</option>
                    <option value="1d">1d</option>
                    <option value="7 days">7 days</option>
                    <option value="30 days">30 days</option>
                </select>
            </label>
        </>
    );
}
