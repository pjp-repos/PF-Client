import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    postNewAccount,
    resetNewAccountStatus
} from '../../Redux/Actions/actionCreators';
import {
  selectNewAccount,
  selectNewAccountStatus,
  selectNewAccountError
} from '../../Redux/Selectors/selectors';

const validate=(input)=> {
    let errors = {};
    if (!input.userName) {
      errors.userName = ' User Name is required!';
    }
    if (!input.password) {
        errors.password = 'Password is required!';
      }

    if (!input.phoneNumber) {
        errors.phoneNumber = 'Phone number is required!';
      }
    if (!input.mail) {
          errors.mail = 'Mail is required!';
      }
      
    return errors;
};

const NewAccountForm = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectNewAccount);
    const status = useSelector(selectNewAccountStatus);
    const error = useSelector(selectNewAccountError);
    
    useEffect(() => {    
        resetNewAccountStatus(dispatch); 
    }, [])
  
    const [input, setInput] = useState({
        userName:'',
        password:'',
        mail:'',
        phoneNumber:'',
    })
    const [errors, setErrors] = useState({
        userName:'User Name is required!',
        password:'Password is required!',
        mail:'Mail is required!',
        phoneNumber:'Phone Number is required!',
    });


    function handleChange (e){
        
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        setErrors(
            validate({
            ...input,
            [e.target.name]: e.target.value,
            })
        );
        console.log(errors);

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        if(Object.keys(errors).length===0){
            postNewAccount(dispatch,{
                username:input.userName,
                password:input.password,
                email:input.mail
            });

            setInput({
                userName: "",
                password:"",
                mail:"",
                phoneNumber:"",
            })
        }
        else{
            alert('Fields not filled') 
        }        
    }

    if(status===1) return(<p>Loading...</p>)
    if(status===2) return(<p>New account was created successfully!</p>)
    if(status===3) return(<p>Error. New account was not created!</p>)
    return(
        <>
            <form  onSubmit ={(e)=> handleSubmit(e)}>
                <span>User Name:</span>
                <input 
                        type='text' 
                        placeholder='ElComandante' 
                        value={input.userName} 
                        name='userName' 
                        onChange={handleChange}
                        className={errors.userName}
                    
                />
                 {
                    errors.userName && (
                        <p className="danger">{errors.userName}</p>
                    )
                  }
            <p/>
                <span>Password:</span>
                <input 
                        type='password' 
                        placeholder='password' 
                        value={input.password} 
                        name='password' 
                        onChange={handleChange}
                        className={errors.password}
                        
                />
                {
                        errors.password && (
                            <p className="danger">{errors.password}</p>
                        )
                      }
           
                <p/>
                <span>Email:</span>
                <input 
                        type='text' 
                        placeholder='ejemplo@mail.com' 
                        name='mail' 
                        onChange={handleChange}
                        className={errors.mail}
                        
                />
                {
                        errors.mail && (
                            <p className="danger">{errors.mail}</p>
                        )
                      }
                <p/>
                <span>Phone Number:</span>
                <input 
                        type='text' 
                        placeholder='...' 
                        name='phoneNumber' 
                        onChange={handleChange}
                        className={errors.phoneNumber}
                        
                />
                {
                        errors.phoneNumber && (
                            <p className="danger">{errors.phoneNumber}</p>
                        )
                      }
                <p/>


                
                <button>Sign Up!</button>

            </form>
        </>
    )
}

export default NewAccountForm;