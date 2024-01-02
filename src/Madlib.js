import React, {useState} from "react"

const Madlib = ()=>{
    const [answers, setAnswers] = useState()
    const submit = (data)=>{
        setAnswers(data)
    }
    const reset = ()=>{
        setAnswers(null)
    }
    return(
        <div className="Madlib">
            {answers ? <Madlib-Form submit={submit}/> : <Madlib-Story reset={reset}/>}
        </div>
    )
}

export default Madlib;