import React from "react";

/**
 * Renders story based off of answers.
 * 
 * Reset button toggles to fresh form.
 */
const MadlibStory = ({reset, answers})=>{
    return (
        <>
            <h4>There was a {answers.color} {answers.noun1} who loved a {answers.adjective} {answers.noun2}.</h4>
            <button onClick={reset}>Restart</button>
        </>
        )
}

export default MadlibStory