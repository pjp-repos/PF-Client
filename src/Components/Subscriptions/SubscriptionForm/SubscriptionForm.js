// Imports
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import {
    addSubscription,
    updateSubscription,
    getSubscription,
    getSymbols,
    resetAddSubscriptionStatus,
    resetUpdateSubscriptionStatus
} from '../../../Redux/Actions/actionCreators';

// Redux Selectors
import {
    selectAddSubscription,
    selectAddSubscriptionStatus,
    selectAddSubscriptionError,
    selectUpdateSubscription,
    selectUpdateSubscriptionStatus,
    selectUpdateSubscriptionError,
    selectSubscription,
    selectSubscriptionStatus,
    selectSubscriptionError,
    selectSymbols,
    selectSymbolsStatus,
    selectSymbolsError
} from '../../../Redux/Selectors/selectors'

// Custom hooks
import { useForm } from '../../../Hooks/useForm';

//Helpers
import { helpRegexValidate } from '../../../helpers/helpRegexValidate';

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


const SubscriptionForm = ({update, id}) => {  
    // Redux hooks  
    const dispatch = useDispatch();


    const dataAdd = useSelector(selectAddSubscription);
    const statusAdd = useSelector(selectAddSubscriptionStatus);
    const errorAdd = useSelector(selectAddSubscriptionError);

    const dataUpdate = useSelector(selectUpdateSubscription);
    const statusUpdate = useSelector(selectUpdateSubscriptionStatus);
    const errorUpdate = useSelector(selectUpdateSubscriptionError);

    const dataSubscription = useSelector(selectSubscription);
    const statusSubscription = useSelector(selectSubscriptionStatus);
    const errorSubscription = useSelector(selectSubscriptionError);

    const dataSymbols = useSelector(selectSymbols);
    const statusSymbols = useSelector(selectSymbolsStatus);
    const errorSymbols = useSelector(selectSymbolsError);
    
    // Submit form thunk function execution
    let submitForm = ()=>{};
    if(update) submitForm=(form, id)=>updateSubscription(dispatch, form, id)
    else submitForm=(form)=>addSubscription(dispatch, form)
  
    // Load symbol list for dropdowns.
    // Edit form needs to be prepopulated, so it is needed to load data
    // Reset status for conditional render issues.
    useEffect(() => {   
        getSymbols(dispatch);
        if(update){
            getSubscription(dispatch, id);
            resetUpdateSubscriptionStatus(dispatch);
        } else{
            resetAddSubscriptionStatus(dispatch);
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

    // custom hook useForm

    // Filed names width default values
    const initialForm = {
        id:null,
        symbol1Id:"",
        symbol2Id:"",
        risePrice:"0",
        fallPrice:"0"
    };

    // Prepopulated editting form
    if(update && statusSubscription===2){
        initialForm.id = dataSubscription.id
        initialForm.symbol1Id = dataSubscription.symbol1Id;
        initialForm.symbol2Id = dataSubscription.symbol2Id;
        initialForm.risePrice = dataSubscription.risePrice;
        initialForm.fallPrice = dataSubscription.fallPrice;
    };

    // Field validations callback for useForm 
    const validationsForm = (form)=>{
        let errors={};
        
        // symbol1Id:
        if(!form.symbol1Id){
            errors.symbol1Id="Chose symbol 1";
        }

        // symbol2Id:
        if(!form.symbol2Id){
            errors.symbol2Id="Chose symbol 2";
        }

        // raisePrice
        const risePrice = form.risePrice
        if(!risePrice){
            errors.risePrice="Rise price is required. 0 for no alert";
        }else if(!helpRegexValidate('Float',risePrice)){
            errors.risePrice="Invalid number.";
        }else if(parseFloat(risePrice)<0 ){
            errors.risePrice="Rise alert price must be 0 or higer than 0";
        }

        // fallPrice
        const fallPrice = form.fallPrice
        if(!fallPrice){
            errors.fallPrice="Fall price is required. 0 for no alert";
        }else if(!helpRegexValidate('Float',fallPrice)){
            errors.fallPrice="Invalid number.";
        }else if(parseFloat(fallPrice)<0 ){
            errors.fallPrice="Fall alert price must be 0 or higer than 0";
        }

        return errors;
    };

    const {        
        form,
        errors,
        handleChange,
        handleDropdown,
        handleSubmit,
        resetFields
    } = useForm(initialForm, validationsForm, submitForm);

    const handleExecute= ()=>{
        if(handleSubmit(true)){
            //closeModal();
        }
    };
    
    const handleCancel = ()=>{
        resetFields();
        //closeModal();
    };



    // === RENDERS ============================================

    // Loadings
    if(
        statusAdd===1 
        || statusUpdate===1
        || statusSubscription===1
        || statusSymbols===1
    ) return <Spinner/> 

    // Errors
    let errorMessage="Form proccess fail. Details: "
    if(statusSymbols===3) errorMessage=`${errorMessage} - Symbols could not be loaded! Error name: ${errorSymbols.name} Error message: ${errorSymbols.message} More details:  ${dataSymbols.error} `;
    if(!update && statusAdd===3 ) errorMessage=`${errorMessage} - Subscription was not saved! Error name: ${errorAdd.name} Error message: ${errorAdd.message}`;
    if(update && statusUpdate===3 ) errorMessage=`${errorMessage} - Subscription was not updated! Error name: ${errorUpdate.name} Error message: ${errorUpdate.message}`;
    if(update && statusSubscription===3 ) errorMessage=`${errorMessage} - Subscription data could no be loaded! Error name: ${errorSubscription.name} Error message: ${errorSubscription.message}`;
    if(errorMessage!=="Form proccess fail. Details: "){
        return (<p>{errorMessage}</p>)
    };

    // Success
    let successMessage="Form was proccessed successfully: "
    if(
        statusSymbols===2 &&(
            !update && statusAdd===2 
            || (
                update && statusUpdate===2 
                && update && statusSubscription===2
            )
        )        
    ){
        return (<p>{successMessage}</p>)
    };

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
                <SubscriptionFormButton onClick={resetFields}>
                    Clear fields
                </SubscriptionFormButton>
                <SubscriptionFormButton onClick={handleCancel}>
                    Cancel/Close
                </SubscriptionFormButton> 
                <SubscriptionFormButton onClick={handleExecute}>
                    Submit
                </SubscriptionFormButton>
            </SubscriptionFormBlock>
        </SubscriptionFormWrapper>

    )   
}

export default SubscriptionForm;


