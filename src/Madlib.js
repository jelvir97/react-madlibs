import React, {useState} from "react"
import MadlibForm from "./MadlibForm"
import "./Madlib.css"

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
            <h1>Madlibs!</h1>
            <MadlibForm submit={submit}/>
            {/* {answers ? <MadlibForm submit={submit}/> : <MadlibStory reset={reset}/>} */}
        </div>
    )
}

export default Madlib;