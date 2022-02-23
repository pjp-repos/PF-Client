import {validateUsernameOrPassword,samePassword} from "../LogIn/ValidateLogin"

export const validatePaswoord = (key, value,stateForm) => {
    if( key === "newPassword")
      return validateUsernameOrPassword(value);
    else if(key === "password"){
        if(stateForm.newPassword !== "")
          return samePassword(stateForm.newPassword,value)
        else
          return validateUsernameOrPassword(value);
    }
    else 
      return samePassword(stateForm.newPassword,value)
}


