import { useEffect } from "react";
import useSWR from "swr";

export default function Fact() {
    const { data, error } = useSWR('https://catfact.ninja/fact');

    if (error) return <h1>{error}</h1>
    return (
        <div className="App">
            {data ? <h1>{data.fact}</h1> : <h1>Loading...</h1>}
        </div>
    )
}