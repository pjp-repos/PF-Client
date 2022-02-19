import React from 'react'
import {
    SpinnerDiv,
    SpinnerWrapper,
    SpinnerText 

}from './SpinnerElements';
import Container from '../../Sections/Container';
import SectionRelative from '../../Sections/SectionRelative';

const Spinner = () => {
    return (  
        <SectionRelative>
            <Container>
               <SpinnerWrapper>
                  <SpinnerText>
                     Loading...
                   </SpinnerText>
                <SpinnerDiv/>
               </SpinnerWrapper>     
            </Container>
        </SectionRelative>  
    )
}

export default Spinner
