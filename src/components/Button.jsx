import styled from "styled-components";

const ButtonContainer = styled.div`
  height: 4rem;
`;

const ButtonBase = styled.button`
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.primary};
  border: 0;
  width: 100%;
  height: 100%;
  letter-spacing: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

const ButtonElement = styled(ButtonBase)`
  font-size: 1.4rem;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

const PrimaryButton = styled(ButtonBase)`
  letter-spacing: 0.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  background: ${(props) => props.theme.colors.primary};
`;

const Button = ({ text, isPrimary = false }) => (
  <ButtonContainer>
    {isPrimary ? (
      <PrimaryButton>{text}</PrimaryButton>
    ) : (
      <ButtonElement>{text}</ButtonElement>
    )}
  </ButtonContainer>
);

export default Button;
