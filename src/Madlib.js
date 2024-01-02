import React, {useState} from "react"
import MadlibForm from "./MadlibForm"
import MadlibStory from "./MadlibStory"
import "./Madlib.css"

const Madlib = ()=>{
    const [answers, setAnswers] = useState()
    const [toggleStory, setToggleStory] = useState(false)
    const submit = (evt,data)=>{
        evt.preventDefault()
        setAnswers(()=>data)
        setToggleStory(()=>!toggleStory)
    }
    const reset = ()=>{
        setAnswers(null)
        setToggleStory(()=>!toggleStory)
    }
    return(
        <div className="Madlib">
            <h1>Madlibs!</h1>
            {toggleStory ? <MadlibStory reset={reset} answers={answers}/> : <MadlibForm submit={submit}/> }
        </div>
    )
}

export default Madlib;