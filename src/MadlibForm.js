import React, {useState} from "react";
import "./MadlibForm.css"

/**
 * Renders form for madlib answers
 * 
 * Submit toggles to story with input values
 */
const MadlibForm = ({submit})=>{
    const INITIAL_DATA = {
        noun1:'',
        noun2:'',
        adjective:'',
        color:''
    }
    //state for controlled form fields
    const [formData, setFormData]= useState(INITIAL_DATA)

    //sets the form data to new object with changed value
    const handleChange = (evt)=>{
        setFormData({
            ...formData,
            [evt.target.name] :evt.target.value
        })
    }

    return (
        <div className="MadlibForm">
            <form onSubmit={(evt)=>submit(evt,formData)} >
                <input type="text" 
                    id="noun1" 
                    name="noun1" 
                    value={formData.noun1} 
                    placeholder="noun" 
                    onChange={handleChange}
                    className="MadlibForm-Input"/>
                <input type="text" 
                    id="noun2" 
                    name="noun2" 
                    value={formData.noun2} 
                    placeholder="noun" 
                    onChange={handleChange}
                    className="MadlibForm-Input"/>
                <input type="text" 
                    id="adjective" 
                    name="adjective" 
                    value={formData.adjective} 
                    placeholder="adjective" 
                    onChange={handleChange}
                    className="MadlibForm-Input"/>
                <input type="text" 
                    id="color" 
                    name="color" 
                    value={formData.color} 
                    placeholder="color" 
                    onChange={handleChange}
                    className="MadlibForm-Input"/>
                <button type="submit">Go!</button>
            </form>
        </div>

    )
}

export default MadlibForm;