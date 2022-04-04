import { useEffect, useState } from "react";


const UseChartHook = () => {
    const [chart, setChart] = useState([])

    useEffect(() => {
        const url = `data.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setChart(data)
            })
    }, [])
    return [chart, setChart]
}

export default UseChartHook;