/// Imports
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import {
    resetAddSubscriptionStatus,
    resetUpdateSubscriptionStatus,
    formSubscriptionsHandleChange,
    formSubscriptionsValidate,
    addSubscription,
    updateSubscription,
} from '../../../Redux/Actions/actionCreators';

// Redux Selectors
import {
    selectAddSubscriptionAll,
    selectUpdateSubscriptionAll,
    selectSymbolsAll,
    selectSessionAll,
    selectSubscriptionFormAll
} from '../../../Redux/Selectors/selectors'

// Styled components
import { 
    SubscriptionFormWrapper,
    SubscriptionFormInput,
    SubscriptionFormButton,
    SubscriptionFormBlock,
    SubscriptionFormError,
    SubscriptionFormLabel
 } from './SubscriptionFormElements';

 // Generic styled components
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import { H3 } from '../../AaaGenerics/Texts/Hx';
import Container from '../../AaaGenerics/Sections/Container';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'

const SubscriptionForm = () => {  

    // Router-dom hooks
    const navigate = useNavigate();

    // Redux hooks  
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const [dataSymbols, statusSymbols, errorSymbols] = useSelector(selectSymbolsAll);
    const [form, edit, errors, error] = useSelector(selectSubscriptionFormAll);
    const [dataAdd, statusAdd, errorAdd] = useSelector(selectAddSubscriptionAll);
    const [dataUpdate, statusUpdate, errorUpdate] = useSelector(selectUpdateSubscriptionAll);

    
    // Load symbol list for dropdowns and subscription data (Update case)
    useEffect(() => {   
        if(!isAuthenticated){
            navigate("/signin");
        }else{
            getSymbols(dispatch,token); 
            if(update){
                getSubscription(dispatch,token, id); 
                resetUpdateSubscriptionStatus(dispatch);
            } else{
                resetAddSubscriptionStatus(dispatch);
            }
        }
    }, [])



    // Dropdows option list
    let symbols=[];
    if(statusSymbols===2){
        symbols = dataSymbols.map(el=>{
            return{
                key: el.id,
                value: el.symbol
            }
        });
    }
 
    // Form events    
    const handleChange = (e)=>{
        formSubscriptionsHandleChange(dispatch, e.target.name,e.target.value)
        formSubscriptionsValidate(dispatch);
    };
    
    const handleDropdown = (key,value)=>{
        formSubscriptionsHandleChange(dispatch, key, value)
        formSubscriptionsValidate(dispatch);
    }

    const handleSubmit= ()=>{
        if(!error){
            if(edit) updateSubscription(dispatch,token, form, form.id);
            else addSubscription(dispatch,token, form);            
        }else{
            alert('Check inpust. Form contain errors or no changes was made')
        }
    };
    
    const handleCancel = ()=>{
        navigate("/subscriptions");
    };

    const handleReset = ()=>{
    };


    // === RENDERS ============================================

    // === Authenticated ===
    if(!isAuthenticated)return<p>Forbbiden</p>

    // === Loadings ===
    if(
        statusAdd===1 
        || statusUpdate===1
        || statusSymbols===1
    ) return <Spinner/> 

    //Success
    if(
        statusSymbols===2 &&(
            !edit && statusAdd===2 
            || (
                edit && statusUpdate===2 
            )
        )        
    ){
        // return<p>Success!</p>
        navigate("/subscriptions");
    };

    // === Errors ===
   
    // Symbol list
    if(statusSymbols===3){
        return<p>{`Oops. An error ocurred. 
            Type: ${errorSymbols.errorType} 
            Code: ${errorSymbols.errorCode} 
            Message: ${errorSymbols.errorMessage} 
        `}</p>
    } 


    // Add new subscription
    if(!edit && statusAdd===3){
        return(
            <>
                <p>
                    {`Oops. An error ocurred. 
                        Type: ${errorUpdate.errorType} 
                        Code: ${errorUpdate.errorCode} 
                        Message: ${errorUpdate.errorMessage} 
                    `}
                </p>
                <button onClick={()=>resetAddSubscriptionStatus(dispatch)}>Ok</button>
            </>)
    } 

    // Update subscription
    if(edit && statusUpdate===3){
        return(
        <>
            <p>
                {`Oops. An error ocurred. 
                    Type: ${errorUpdate.errorType} 
                    Code: ${errorUpdate.errorCode} 
                    Message: ${errorUpdate.errorMessage} 
                `}
            </p>
            <button onClick={()=>resetUpdateSubscriptionStatus(dispatch)}>Ok</button>
        </>)
    } 
    
    
    return (
        <SubscriptionFormWrapper>
            <H3>New subscription form</H3>
            <SubscriptionFormBlock>
                {/* Symbol 1 select dropdown */}                       
                <Dropdown 
                    labelText="Symbol 1"                                   
                    options={symbols}
                    multiple={false}
                    
                    fieldName='symbol1Id'
                    fieldValue={form.symbol1Id}
                    errorText={errors.symbol1Id}
                    dropdownCb={handleDropdown}
                />     

                {/* Symbol 2 select dropdown */}                         
                <Dropdown 
                    labelText="Symbol 2"                                       
                    options={symbols}
                    multiple={false}
                    
                    fieldName='symbol2Id'
                    fieldValue={form.symbol2Id}
                    errorText={errors.symbol2Id}
                    dropdownCb={handleDropdown}
                />
            </SubscriptionFormBlock>
            <SubscriptionFormBlock>
                {/* Rise price field */}
                <SubscriptionFormLabel>
                    Price for rice alert
                </SubscriptionFormLabel>
                <SubscriptionFormInput 
                    type="number" 
                    name="risePrice"
                    placeholder='Type price for rise alert...'
                    value={form.risePrice}
                    onChange={handleChange}
                    required
                />
                <SubscriptionFormError>
                    {errors.risePrice && errors.risePrice}
                </SubscriptionFormError>
            </SubscriptionFormBlock>
            <SubscriptionFormBlock>
                {/* Fall price field */}
                <SubscriptionFormLabel>
                    Price for fall alert
                </SubscriptionFormLabel>
                <SubscriptionFormInput 
                    type="number"   
                    name="fallPrice"
                    placeholder='Type price for fall alert...'
                    value={form.fallPrice}
                    onChange={handleChange}
                    required
                />
                <SubscriptionFormError>
                    {errors.fallPrice && errors.fallPrice}
                </SubscriptionFormError>
            </SubscriptionFormBlock>
            <SubscriptionFormBlock>
                <SubscriptionFormButton onClick={handleReset}>
                    Clear fields
                </SubscriptionFormButton>
                <SubscriptionFormButton onClick={handleCancel}>
                    Cancel/Close
                </SubscriptionFormButton> 
                <SubscriptionFormButton onClick={handleSubmit}>
                    Submit
                </SubscriptionFormButton>
            </SubscriptionFormBlock>
        </SubscriptionFormWrapper>

    )   
}

export default SubscriptionForm;