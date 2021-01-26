import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const InputComponent = styled.input`
  background: #0e1117;
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  padding: 1.5rem 1rem;
  color: #999;
  border: 0;
`;

const Input = ({ label = "", placeholder = "", value = "" }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputComponent
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Container>
  );
};
export default Input;
