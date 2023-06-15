import { ChangeEvent } from "react";
import { type IntervalYahooType } from "../../types/yahoo";

interface Props {
    timeFrameYahoo: IntervalYahooType;
    handleSelectTimeFrameYahoo: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function YahooInterval({ timeFrameYahoo, handleSelectTimeFrameYahoo }: Props) {
    return (
        <>
            <label htmlFor="timeFrame">
                Interval
                <select
                    name="timeFrame"
                    id="timeFrame"
                    value={timeFrameYahoo}
                    onChange={handleSelectTimeFrameYahoo}
                >
                    <option value="1m">1m</option>
                    <option value="2m">2m</option>
                    <option value="5m">5m</option>
                    <option value="15m">15m</option>
                    <option value="30m">30m</option>
                    <option value="1h">1h</option>
                    <option value="1d">1d</option>
                    <option value="5d">5d</option>
                    <option value="1wk">1wk</option>
                    <option value="1mo">1mo</option>
                    <option value="3mo">3mo</option>
                </select>
            </label>
        </>
    );
}
