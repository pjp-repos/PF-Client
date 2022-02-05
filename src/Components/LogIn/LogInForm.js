import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    postSignIn,
    resetSignInStatus
} from '../../Redux/Actions/actionCreators';
import {
  selectSignIn,
  selectSignInStatus,
  selectSignInError
} from '../../Redux/Selectors/selectors';

const validate=(input)=> {
    let errors = {};
    if (!input.userName) {
        errors.userName = 'User Name is required!';
    }
    if (!input.password) {
        errors.password = 'Password is required!';
    }
    return errors;
};

const LoginForm = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectSignIn);
    const status = useSelector(selectSignInStatus);
    const error = useSelector(selectSignInError);
    
    useEffect(() => {    
        resetSignInStatus(dispatch); 
    }, [])
  
    const [input, setInput] = useState({
        userName:'',
        password:'',
    })
    const [errors, setErrors] = useState({
        userName:'User Name is required!',
        password:'Password is required!'
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
            postSignIn(dispatch,{username:input.userName,password:input.password});

            setInput({
                userName:"",
                password:"",
            })
        }
        else{
            alert('Fields not filled') 
        }        
    }

    if(status===1) return(<p>Loading...</p>)
    if(status===2) return(<p>Success login!</p>)
    if(status===3) return(<p>Error. Login failed!</p>)
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

                <button>Login!</button>
            </form>
        </>
    )
}

export default LoginForm;