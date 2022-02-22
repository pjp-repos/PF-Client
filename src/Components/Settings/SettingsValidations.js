import {validateUsernameOrPassword,samePassword} from "../LogIn/ValidateLogin"

export const validatePaswoord = (key, value,stateForm) => {
    if(key === "password" || key === "newPassword")
      return validateUsernameOrPassword(value);
    else 
      return samePassword(stateForm.newPassword,value)
}

export const validateSubmit = (errorFormState,stateForm) => {
    for(const property in errorFormState){
        if(property !== "")
         return "Password inputs cant be with errors"
    }
    return "";
}
