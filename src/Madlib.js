import React, {useState} from "react"
import MadlibForm from "./MadlibForm"
import MadlibStory from "./MadlibStory"
import { validateData } from "./helpers";
import "./Madlib.css"

/**
 * Madlib Component
 * 
 * Renders either a form or the story.
 */
const Madlib = ()=>{
    // Answers from MadlibForm
    const [answers, setAnswers] = useState()
    // allows toggle between form or story
    const [toggleStory, setToggleStory] = useState(false)

    //submit function passed into MadlibForm
    //validates incoming data and updates the state if passes
    const submit = (evt,data)=>{
        evt.preventDefault()
        if(validateData(data)){
            setAnswers(()=>data)
            setToggleStory(()=>!toggleStory)
        }

    }

    // reset function passed into MadlibStory
    // deletes answers and toggles back to form
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