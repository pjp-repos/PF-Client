import {validateUsernameOrPassword,samePassword} from "../LogIn/ValidateLogin"

export const validatePaswoord = (key, value,stateForm) => {
    if( key === "password")
      return validateUsernameOrPassword(value);
    else if(key === "newPassword"){
     return validateUsernameOrPassword(value);
    }
    else 
      return samePassword(stateForm.newPassword,value)
}


