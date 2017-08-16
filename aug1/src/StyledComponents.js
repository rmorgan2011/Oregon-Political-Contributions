import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  padding: 4rem;
  background: lightgray;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: firebrick;
  font-family: helvetica;
`;

function StyledComponents(){
  return <Wrapper>
          <Title>Hello</Title>
         </Wrapper>
}

export default StyledComponents;
