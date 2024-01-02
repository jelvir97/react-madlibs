/**
 * validates that no form fields are empty
 *
 */

const validateData =(data)=>{
    for(let key in data){
        if(data[key]==="") return false
    }
    return true
}

export {validateData}