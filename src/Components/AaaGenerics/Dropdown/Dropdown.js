import React, { useState } from "react";

import {
    DropDownContainer,
    DropDownButton,
    DropDownListContainer,
    DropDownLabel,
    DropDownError,
    DropDownListItem
} from './DropdownElements'


const Dropdown = ({options, fieldName, fieldValue, labelText, errorText, multiple, dropdownCb}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    let values = []
    if(multiple){
        values = fieldValue;
    } 
    else{
        values.push(fieldValue);
    } 

    let times = 0
    let showValue = "---";
    options.forEach(option=>{        
        if(values.includes(option.key) && times===0){
            showValue=`${option.value}`;
            times++;           
        }else if(values.includes(option.key) && times===1){
            showValue=`${showValue}...`;
            times++;           
        }
    })

    const onOptionClicked = (key) => {
        if(multiple){
            // Find index of clicked option in array of valies
            const index = values.findIndex(el=>el===key);
            // If it does not exist, means it needs to be added
            if(index===-1){
                dropdownCb(fieldName,[...values,key]);
            // If it exists, means it needs to be deleted 
            }else{
                dropdownCb(fieldName,values.filter(el=>el!==key));
            }
        } 
        else{
            dropdownCb(fieldName,key);
            setIsOpen(!isOpen);
        } 
    };

  return (
    <DropDownContainer>
        <DropDownLabel>
            {labelText}
        </DropDownLabel>
        <DropDownButton onClick={()=>setIsOpen(!isOpen)} show={isOpen}>
            {showValue}
        </DropDownButton>
        <DropDownError show={!isOpen}>
            {errorText}
        </DropDownError>
            <DropDownListContainer show={isOpen}>
                    {options.map(option => (
                        <DropDownListItem
                            key={option.key}
                            isSelected={values.includes(option.key)}
                            onClick={()=>onOptionClicked(option.key)} 
                        >
                            {option.value}
                        </DropDownListItem>
                    ))}
            </DropDownListContainer>
    </DropDownContainer>
  );
}

export default Dropdown;