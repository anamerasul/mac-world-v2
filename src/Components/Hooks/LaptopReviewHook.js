import { useEffect, useState } from "react";


const LaptopReviewHook = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = `laptopfake.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews, setReviews]

}

export default LaptopReviewHook;