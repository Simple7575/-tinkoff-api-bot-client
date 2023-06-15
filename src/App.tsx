import { useState, type MouseEvent, type FormEvent, type ChangeEvent } from "react";
import MACDChart from "./components/MACDChart";
import "./App.css";
import axios from "axios";
import CloseChart from "./components/CloseChart";
import TinkoffInterval from "./components/tinkoff/TinkoffInterval";
import { type IntervalTinkoffType, isTinkoffIntervalType } from "./types/tinkoff";
import { type IntervalYahooType, isYahooIntervalType } from "./types/yahoo";
import YahooInterval from "./components/yahoo/YahooInterval";

const d = {
    macd: [
        { MACD: 400, signal: 2400, histogram: 200 },
        { MACD: 200, signal: 2300, histogram: 250 },
        { MACD: 100, signal: 2500, histogram: 300 },
    ],
    candles: [
        { date: "today", high: 250, low: 2400, open: 100, close: 200 },
        { date: "today", high: 250, low: 2400, open: 100, close: 200 },
        { date: "today", high: 250, low: 2400, open: 100, close: 200 },
        { date: "today", high: 250, low: 2400, open: 100, close: 200 },
    ],
};

function App() {
    const [source, setSource] = useState<"tinkoff" | "yahoo">("tinkoff");
    const [macd, setMacd] = useState(d.macd);
    const [candles, setCandles] = useState(d.candles);
    const [timeFrameTinkoff, setTimeFrameTinkoff] = useState<IntervalTinkoffType>("1d");
    const [timeFrameYahoo, setTimeFrameYahoo] = useState<IntervalYahooType>("1d");
    const [ticker, setTicker] = useState("CCL-SPBXM");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const getData = async (e: FormEvent<HTMLFormElement>) => {
        try {
            const url = new URL(`http://localhost:3000/macd/${source}`);
            url.searchParams.append("intervalTinkoff", timeFrameTinkoff);
            url.searchParams.append("intervalYahoo", timeFrameYahoo);
            url.searchParams.append("ticker", ticker.split("-")[0]);
            url.searchParams.append("classcode", ticker.split("-")[1]);

            setLoading(true);
            e.preventDefault();
            const { data } = await axios.get(url.href);
            console.log(data);
            setMacd(data.macd.slice(data.macd.length - 15));
            setCandles(data.candles.slice(data.candles.length - 15));
            setLoading(false);
            setError(null);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                setLoading(false);
            }
            console.log(error);
        }
    };

    const handleSelectTimeFrameTinkoff = (e: ChangeEvent<HTMLSelectElement>) => {
        if (isTinkoffIntervalType(e.target.value)) setTimeFrameTinkoff(e.target.value);
    };

    const handleSelectTimeFrameYahoo = (e: ChangeEvent<HTMLSelectElement>) => {
        if (isYahooIntervalType(e.target.value)) setTimeFrameYahoo(e.target.value);
    };

    const handleSelectTicker = (e: ChangeEvent<HTMLSelectElement>) => {
        setTicker(e.target.value);
    };

    const handleSelectSource = (e: ChangeEvent<HTMLSelectElement>) => {
        setSource(e.target.value as "tinkoff" | "yahoo");
    };

    return (
        <>
            <CloseChart data={candles} />
            <MACDChart data={macd} />
            {error ? error : null}
            <form noValidate onSubmit={getData} className="form">
                <label htmlFor="source">
                    Source
                    <select name="source" id="source" value={source} onChange={handleSelectSource}>
                        <option value="tinkoff">Tinkoff</option>
                        <option value="yahoo">Yahoo</option>
                    </select>
                </label>
                {source === "tinkoff" ? (
                    <TinkoffInterval
                        timeFrameTinkoff={timeFrameTinkoff}
                        handleSelectTimeFrameTinkoff={handleSelectTimeFrameTinkoff}
                    />
                ) : (
                    <YahooInterval
                        timeFrameYahoo={timeFrameYahoo}
                        handleSelectTimeFrameYahoo={handleSelectTimeFrameYahoo}
                    />
                )}
                <label htmlFor="ticker">
                    Ticker
                    <select name="ticker" id="ticker" value={ticker} onChange={handleSelectTicker}>
                        <option value="AAL-SPBXM">AAL</option>
                        <option value="CCL-SPBXM">CCL</option>
                        <option value="AWH-SPBXM">AWH</option>
                        <option value="WISH-SPBXM">WISH</option>
                        <option value="CLOV-SPBXM">CLOV</option>
                        <option value="GAZP-TQBR">GAZP</option>
                        <option value="SBER-TQBR">SBER</option>
                        <option value="POLY-TQBR">POLY</option>
                        <option value="MVID-TQBR">MVID</option>
                        <option value="AFLT-TQBR">AFLT</option>
                    </select>
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Get MACD"}
                </button>
            </form>
        </>
    );
}

export default App;
