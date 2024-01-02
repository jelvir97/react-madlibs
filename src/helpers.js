/**
 * validates that no form fields are empty
 *
 */

const validateData =(data)=>{
    for(let val of data){
        if(val==="") return false
    }
    return true
}