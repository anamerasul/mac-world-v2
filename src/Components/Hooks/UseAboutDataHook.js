import { useEffect, useState } from "react";


const UseAboutDataHook = () => {
    const [about, setAbout] = useState([])

    useEffect(() => {
        const url = `aboutData.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setAbout(data))


    }, [])

    return [about, setAbout]


};

export default UseAboutDataHook;