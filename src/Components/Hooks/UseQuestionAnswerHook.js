import { useEffect, useState } from "react";

const UseQuestionAnswerHook = () => {
    const [questionAnswer, setQuestionAnswer] = useState([])


    useEffect(() => {
        const url = `QuestionAnswer.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setQuestionAnswer(data))


    }, [])

    return [questionAnswer, setQuestionAnswer]

};

export default UseQuestionAnswerHook;