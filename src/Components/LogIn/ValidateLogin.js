const validateUsernameOrPassword = (value) => {
    console.log(value);
    if(!/^[a-zA-Z0-9]+$/.test(value) || value.length > 8)
    return "Must be plain text or Numbers, max 8 characters"
    return "";
}

const samePassword = (repeatPassword,password) => {
  if(repeatPassword !== password)
   return "Error password are diferent"
   return "";
} 

const validateEmail = (value) => {
    if (!/\S+@\S+\.\S+/.test(value))
      return "Email invalid"
      return "";
}

export const validateSubmit = (errorState,formState) => {
    if(!validateInputsSubmit(errorState,formState))
      return "Inputs cant be empty or with errors"
}

export const validateSignIn = (value) => {
   return validateUsernameOrPassword(value);
}

export const validateSignUp = (id,value,state) => {
    if(id === "email")
      return validateEmail(value);
    if(id === "repeatPassword")
      return samePassword(value,state.password);
    if(id === "password" || id === "username")
      return validateUsernameOrPassword(value);
 }

const validateInputsSubmit = (errorState, formState) => {
    return (validateStatus(errorState,(value) => value !== "") && (validateStatus(formState,(value) => value === "")));
  }
  
  const validateStatus = (state,cb) => {
      for(const property in state){
          if(cb(state[property]))
           return false;
      }
      return true;
  }