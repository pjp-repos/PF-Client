import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import {
    resetAddSubscriptionStatus,
    resetUpdateSubscriptionStatus,
    formSubscriptionsHandleChange,
    formSubscriptionsValidate,
    formSubscriptionsResetBtn,
    addSubscription,
    updateSubscription,
    getPair
} from '../../../Redux/Actions/actionCreators';

// Redux Selectors
import {
    selectAddSubscriptionAll,
    selectUpdateSubscriptionAll,
    selectSymbolsAll,
    selectSessionAll,
    selectSubscriptionFormAll,
    selectPairAll
} from '../../../Redux/Selectors/selectors'

// Styled components
import { 
    SubscriptionFormWrapper,
    SubscriptionFormInput,
    SubscriptionFormButton,
    SubscriptionFormBlock,
    SubscriptionFormError,
    SubscriptionFormLabel,
    InputBlock,
    Title,
    SubTitle,
    SubsGraphics,
    DivInfoSubs,
    TitleGraphicSubs
 } from './SubscriptionFormElements';

 // Generic styled components
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'
import Graphics from '../../Graphics/Graphics';
import Swal from 'sweetalert2';

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
    const pairValid = useSelector(selectPairAll);

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

        if(key === "symbol1Id" && form.symbol2Id !== "")
          getPair(dispatch,token,value,form.symbol2Id);
        else if(key === "symbol2Id" && form.symbol1Id !== "")
          getPair(dispatch,token,form.symbol1Id,value);
    }

    const handleSubmit= ()=>{
        if(!error){
            if(edit) updateSubscription(dispatch,token, form, form.id);
            else addSubscription(dispatch,token, form);            
        }else{
            Swal.fire({
                background:'#14151a',
                color: 'white',
                icon:'error',
                title: 'Errors on Subscription Form',
                text: 'Form contain errors or no changes was made. Check inputs',
                //confirmButtonColor:'',
            })   
        }
    };
    
    const handleCancel = ()=>{
        navigate("/subscriptions");
    };

    const handleReset = ()=>{
        formSubscriptionsResetBtn(dispatch);
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
        Swal.fire({
            icon:'success',
            title: 'Subscription done successfully',
            background: '#14151a',
            color:'white',
            timer:2000,
            showConfirmButton:false,
        })
        // return<p>Success!</p>
        navigate("/subscriptions");
    };

    // === Errors ===
   
    // Symbol list
    if(statusSymbols===3){
        Swal.fire({
                    background: '#14151a',
                    icon:'error',
                    color: 'white',
                    title: `Opps. An error ocurred.`,
                    html: `<p>Type: ${errorSymbols.errorType}.</p> 
                        <p>Code: ${errorSymbols.errorCode}.</p> 
                        <p>Message: ${errorSymbols.errorMessage}.</p>`,
                })
        //<p>{`Oops. An error ocurred. 
            //Type: ${errorSymbols.errorType} 
            //Code: ${errorSymbols.errorCode} 
            //Message: ${errorSymbols.errorMessage} 
        //`}</p>
    } 


    // Add new subscription
    if(!edit && statusAdd===3){
               //return(
               //<>
        //<p>
                    //{`Oops. An error ocurred. 
                        //Type: ${errorAdd.errorType} 
                        //Code: ${errorAdd.errorCode} 
                        //Message: ${errorAdd.errorMessage} 
                    //`}
                //</p>
        //<button onClick={()=>resetAddSubscriptionStatus(dispatch)}>ok</button>
               //</>
               //)
                Swal.fire({
                    background: '#14151a',
                    icon:'error',
                    color: 'white',
                    title: `Opps. An error ocurred.`,
                    html: `<p>Type: ${errorAdd.errorType}.</p> 
                        <p>Code: ${errorAdd.errorCode}.</p> 
                        <p>Message: ${errorAdd.errorMessage}.</p>`,
                }).then(result => {
                    if(result.isConfirmed){
                        resetAddSubscriptionStatus(dispatch)
                    }        
                })

                
    } 

    // Update subscription
    if(edit && statusUpdate===3){
        //return(
        //<>
            //<p>
                //{`Oops. An error ocurred. 
                    //Type: ${errorUpdate.errorType} 
                    //Code: ${errorUpdate.errorCode} 
                    //Message: ${errorUpdate.errorMessage} 
                //`}
            //</p>
            //<button onClick={()=>resetUpdateSubscriptionStatus(dispatch)}>Ok</button>
        //</>)
        Swal.fire({
            background: '#14151a',
            icon: 'error',
            color: 'white',
            title: `Opps. An error ocurred.`,
            html: `<p>Type: ${errorUpdate.errorType}.</p> 
                   <p>Code: ${errorUpdate.errorCode}.</p> 
                   <p>Message: ${errorUpdate.errorMessage}.</p>`,
        }).then(result => {
            if(result.isConfirmed){
            resetUpdateSubscriptionStatus(dispatch)
            }        
        })
    } 
    
    
    return (
        <SubsGraphics>
            <DivInfoSubs>
              {form.symbol1Id !== "" && form.symbol2Id && <TitleGraphicSubs>{symbols.find(el => el.key === parseInt(form.symbol1Id)).value} - {symbols.find(el => el.key === parseInt(form.symbol2Id)).value}</TitleGraphicSubs>}
              { <Graphics data = {pairValid[1] === 2 && form.symbol1Id !== "" && form.symbol2Id !== "" ? pairValid[0].array : []} /> }
            </DivInfoSubs>
            <SubscriptionFormWrapper>
            <Title><SubTitle>Subscription</SubTitle> Form</Title>
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
               {
                  form.symbol2Id !== "" &&  form.symbol2Id !== "" && pairValid[1] === 3 && <SubscriptionFormError> Error Pair Invalid</SubscriptionFormError>
               }
            <InputBlock>
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
            </InputBlock>
            <InputBlock>
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
            </InputBlock>
            <SubscriptionFormBlock>
                <SubscriptionFormButton onClick={handleReset}>
                    Clear fields
                </SubscriptionFormButton>
                <SubscriptionFormButton onClick={handleCancel}>
                    Close
                </SubscriptionFormButton> 
                <SubscriptionFormButton onClick={handleSubmit}>
                    Submit
                </SubscriptionFormButton>
            </SubscriptionFormBlock>
        </SubscriptionFormWrapper>
  </SubsGraphics>
        
    )   
}

export default SubscriptionForm;
