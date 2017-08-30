import React from 'react'
import styled, {keyframes} from 'styled-components'

const MyInput = styled.input``;

const Wrapper = styled.section`
  padding: 4rem;
  background: ${(props) => props.primary ? 'black' : 'lightgray'};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: firebrick;
  font-family: helvetica;
`;

const PurpleTitle = Title.extend`
  color: purple;
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
`;

function StyledComponents(){
  return (
    <Wrapper primary={true}>
      <PurpleTitle>Hello World</PurpleTitle>
      <MyInput placeholder="Type here"></MyInput>
      <Spinner>🍕</Spinner>
    </Wrapper>
  );
}

export default StyledComponents;
